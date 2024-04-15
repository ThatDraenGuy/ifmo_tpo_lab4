/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 49.25, "KoPercent": 50.75};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.24625, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.374375, 500, 1500, "conf #3 req"], "isController": false}, {"data": [0.364375, 500, 1500, "conf #2 req"], "isController": false}, {"data": [0.0, 500, 1500, "conf #1 req"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 2400, 1218, 50.75, 937.5524999999991, 504, 9913, 1103.5, 1189.0, 1194.0, 1205.0, 0.50018298360817, 0.11283424727879617, 0.08035166094096091], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["conf #3 req", 800, 201, 25.125, 737.2237499999994, 504, 9913, 584.0, 1179.8, 1197.0, 1204.0, 0.16674806056372934, 0.03761601756857566, 0.02678716402610691], "isController": false}, {"data": ["conf #2 req", 800, 217, 27.125, 884.0437499999996, 705, 9913, 780.0, 1174.9, 1191.9499999999998, 1199.0, 0.16674128339098412, 0.03761448873370834, 0.026786075310368057], "isController": false}, {"data": ["conf #1 req", 800, 800, 100.0, 1191.3899999999987, 1103, 9913, 1163.0, 1191.0, 1193.0, 1205.0, 0.16672766120272334, 0.03761141575959872, 0.026783886980320304], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1&nbsp;168 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 9&nbsp;913 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;126 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;193 milliseconds, but should not have lasted longer than 800 milliseconds.", 28, 2.2988505747126435, 1.1666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;136 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 0.8210180623973727, 0.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;203 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;183 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;151 milliseconds, but should not have lasted longer than 800 milliseconds.", 17, 1.3957307060755337, 0.7083333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;116 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 0.49261083743842365, 0.25], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;178 milliseconds, but should not have lasted longer than 800 milliseconds.", 16, 1.3136288998357963, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;146 milliseconds, but should not have lasted longer than 800 milliseconds.", 16, 1.3136288998357963, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;148 milliseconds, but should not have lasted longer than 800 milliseconds.", 27, 2.2167487684729066, 1.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;106 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;114 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 0.8210180623973727, 0.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;188 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 0.49261083743842365, 0.25], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;156 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 1.2315270935960592, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;161 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 0.7389162561576355, 0.375], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;201 milliseconds, but should not have lasted longer than 800 milliseconds.", 14, 1.1494252873563218, 0.5833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;181 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 1.2315270935960592, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;171 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;104 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.08210180623973727, 0.041666666666666664], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 41, 3.3661740558292284, 1.7083333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;158 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;133 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 1.2315270935960592, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;154 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;164 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;143 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 0.5747126436781609, 0.2916666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;153 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;207 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.08210180623973727, 0.041666666666666664], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;198 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;124 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;169 milliseconds, but should not have lasted longer than 800 milliseconds.", 17, 1.3957307060755337, 0.7083333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;163 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 0.8210180623973727, 0.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;192 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;134 milliseconds, but should not have lasted longer than 800 milliseconds.", 19, 1.5599343185550083, 0.7916666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;173 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;179 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;115 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;144 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 801 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;130 milliseconds, but should not have lasted longer than 800 milliseconds.", 16, 1.3136288998357963, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 30, 2.4630541871921183, 1.25], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;172 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 0.90311986863711, 0.4583333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;162 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;105 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;202 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 0.7389162561576355, 0.375], "isController": false}, {"data": ["The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 0.5747126436781609, 0.2916666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;157 milliseconds, but should not have lasted longer than 800 milliseconds.", 14, 1.1494252873563218, 0.5833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;199 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 0.7389162561576355, 0.375], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;137 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 0.90311986863711, 0.4583333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 9&nbsp;170 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.08210180623973727, 0.041666666666666664], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;125 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;182 milliseconds, but should not have lasted longer than 800 milliseconds.", 16, 1.3136288998357963, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;140 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;167 milliseconds, but should not have lasted longer than 800 milliseconds.", 19, 1.5599343185550083, 0.7916666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;150 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;127 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 0.5747126436781609, 0.2916666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;135 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 1.2315270935960592, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;204 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;159 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, 0.6568144499178982, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;177 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;103 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;174 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;117 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 0.5747126436781609, 0.2916666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;184 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;149 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 34, 2.7914614121510675, 1.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;145 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 0.7389162561576355, 0.375], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;142 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;113 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;194 milliseconds, but should not have lasted longer than 800 milliseconds.", 19, 1.5599343185550083, 0.7916666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;107 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;152 milliseconds, but should not have lasted longer than 800 milliseconds.", 15, 1.2315270935960592, 0.625], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;110 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;139 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, 0.5747126436781609, 0.2916666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;155 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 0.8210180623973727, 0.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;120 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;123 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;197 milliseconds, but should not have lasted longer than 800 milliseconds.", 20, 1.6420361247947455, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;129 milliseconds, but should not have lasted longer than 800 milliseconds.", 17, 1.3957307060755337, 0.7083333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;108 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 40, 3.284072249589491, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;165 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 0.90311986863711, 0.4583333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;186 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;112 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;175 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, 0.9852216748768473, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;180 milliseconds, but should not have lasted longer than 800 milliseconds.", 18, 1.477832512315271, 0.75], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;196 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.08210180623973727, 0.041666666666666664], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;206 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;119 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;122 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 0.49261083743842365, 0.25], "isController": false}, {"data": ["The operation lasted too long: It took 805 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;111 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;132 milliseconds, but should not have lasted longer than 800 milliseconds.", 14, 1.1494252873563218, 0.5833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;109 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.16420361247947454, 0.08333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;185 milliseconds, but should not have lasted longer than 800 milliseconds.", 17, 1.3957307060755337, 0.7083333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;121 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, 0.6568144499178982, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;160 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 0.90311986863711, 0.4583333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;138 milliseconds, but should not have lasted longer than 800 milliseconds.", 11, 0.90311986863711, 0.4583333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;195 milliseconds, but should not have lasted longer than 800 milliseconds.", 10, 0.8210180623973727, 0.4166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 0.3284072249589491, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;166 milliseconds, but should not have lasted longer than 800 milliseconds.", 16, 1.3136288998357963, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;128 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 0.7389162561576355, 0.375], "isController": false}, {"data": ["The operation lasted too long: It took 8&nbsp;762 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 0.24630541871921183, 0.125], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;176 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;131 milliseconds, but should not have lasted longer than 800 milliseconds.", 13, 1.0673234811165846, 0.5416666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;205 milliseconds, but should not have lasted longer than 800 milliseconds.", 14, 1.1494252873563218, 0.5833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;141 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, 0.6568144499178982, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;118 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 0.41050903119868637, 0.20833333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;170 milliseconds, but should not have lasted longer than 800 milliseconds.", 19, 1.5599343185550083, 0.7916666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;147 milliseconds, but should not have lasted longer than 800 milliseconds.", 24, 1.9704433497536946, 1.0], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 2400, 1218, "The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 41, "The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 40, "The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 34, "The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 30, "The operation lasted too long: It took 1&nbsp;193 milliseconds, but should not have lasted longer than 800 milliseconds.", 28], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["conf #3 req", 800, 201, "The operation lasted too long: It took 1&nbsp;201 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, "The operation lasted too long: It took 1&nbsp;202 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, "The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, "The operation lasted too long: It took 1&nbsp;197 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, "The operation lasted too long: It took 1&nbsp;203 milliseconds, but should not have lasted longer than 800 milliseconds.", 5], "isController": false}, {"data": ["conf #2 req", 800, 217, "The operation lasted too long: It took 1&nbsp;197 milliseconds, but should not have lasted longer than 800 milliseconds.", 12, "The operation lasted too long: It took 1&nbsp;195 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, "The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, "The operation lasted too long: It took 1&nbsp;199 milliseconds, but should not have lasted longer than 800 milliseconds.", 7, "The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 7], "isController": false}, {"data": ["conf #1 req", 800, 800, "The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 36, "The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 35, "The operation lasted too long: It took 1&nbsp;193 milliseconds, but should not have lasted longer than 800 milliseconds.", 24, "The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 23, "The operation lasted too long: It took 1&nbsp;148 milliseconds, but should not have lasted longer than 800 milliseconds.", 21], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
