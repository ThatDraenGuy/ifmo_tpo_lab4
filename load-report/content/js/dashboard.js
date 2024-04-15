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

    var data = {"OkPercent": 65.5, "KoPercent": 34.5};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.3275, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.5, 500, 1500, "conf #3 req"], "isController": false}, {"data": [0.4825, 500, 1500, "conf #2 req"], "isController": false}, {"data": [0.0, 500, 1500, "conf #1 req"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 600, 207, 34.5, 830.2400000000001, 504, 1207, 765.5, 1180.0, 1189.0, 1205.0, 6.0621369032583985, 1.3675328365748927, 0.9768091689820663], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["conf #3 req", 200, 0, 0.0, 566.365, 504, 604, 567.5, 601.0, 602.0, 603.0, 2.032768223767126, 0.4585639254787169, 0.32754566105622634], "isController": false}, {"data": ["conf #2 req", 200, 7, 3.5, 763.3299999999999, 705, 804, 765.5, 795.0, 797.0, 804.0, 2.028747349948774, 0.4576568728888348, 0.32689776634916773], "isController": false}, {"data": ["conf #1 req", 200, 200, 100.0, 1161.0249999999996, 1105, 1207, 1163.5, 1190.0, 1192.9, 1205.99, 2.020712301086133, 0.4558442788582976, 0.3256030563273554], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1&nbsp;168 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;130 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.898550724637681, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;172 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;193 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;105 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;136 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;157 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;183 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;137 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;151 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;178 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;182 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;140 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;167 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;146 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;148 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, 2.898550724637681, 1.0], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;150 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;127 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;188 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;114 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;135 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;156 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;161 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;201 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;177 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;174 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;181 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;117 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;184 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;149 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, 3.864734299516908, 1.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;145 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;171 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;142 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;113 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, 3.864734299516908, 1.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;107 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;152 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;139 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;158 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;155 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;197 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;129 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;108 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, 4.3478260869565215, 1.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;165 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;186 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;112 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;175 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;180 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;206 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;133 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;119 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;154 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;122 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;164 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;143 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;132 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;153 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;207 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;185 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;121 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;160 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;138 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, 1.932367149758454, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;124 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;166 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;169 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;128 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;163 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;134 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;173 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;176 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;179 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;205 milliseconds, but should not have lasted longer than 800 milliseconds.", 5, 2.4154589371980677, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;141 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;115 milliseconds, but should not have lasted longer than 800 milliseconds.", 1, 0.4830917874396135, 0.16666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;144 milliseconds, but should not have lasted longer than 800 milliseconds.", 2, 0.966183574879227, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;170 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}, {"data": ["The operation lasted too long: It took 1&nbsp;147 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, 1.4492753623188406, 0.5], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 600, 207, "The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, "The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, "The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, "The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, "The operation lasted too long: It took 1&nbsp;148 milliseconds, but should not have lasted longer than 800 milliseconds.", 6], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["conf #2 req", 200, 7, "The operation lasted too long: It took 804 milliseconds, but should not have lasted longer than 800 milliseconds.", 4, "The operation lasted too long: It took 803 milliseconds, but should not have lasted longer than 800 milliseconds.", 3, "", "", "", "", "", ""], "isController": false}, {"data": ["conf #1 req", 200, 200, "The operation lasted too long: It took 1&nbsp;190 milliseconds, but should not have lasted longer than 800 milliseconds.", 9, "The operation lasted too long: It took 1&nbsp;187 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, "The operation lasted too long: It took 1&nbsp;191 milliseconds, but should not have lasted longer than 800 milliseconds.", 8, "The operation lasted too long: It took 1&nbsp;189 milliseconds, but should not have lasted longer than 800 milliseconds.", 6, "The operation lasted too long: It took 1&nbsp;148 milliseconds, but should not have lasted longer than 800 milliseconds.", 6], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
