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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 558.0, "minX": 0.0, "maxY": 24782.0, "series": [{"data": [[0.0, 558.0], [0.1, 558.0], [0.2, 558.0], [0.3, 558.0], [0.4, 558.0], [0.5, 561.0], [0.6, 561.0], [0.7, 561.0], [0.8, 561.0], [0.9, 561.0], [1.0, 569.0], [1.1, 569.0], [1.2, 569.0], [1.3, 569.0], [1.4, 569.0], [1.5, 572.0], [1.6, 572.0], [1.7, 572.0], [1.8, 572.0], [1.9, 572.0], [2.0, 581.0], [2.1, 581.0], [2.2, 581.0], [2.3, 581.0], [2.4, 585.0], [2.5, 585.0], [2.6, 585.0], [2.7, 585.0], [2.8, 585.0], [2.9, 593.0], [3.0, 593.0], [3.1, 593.0], [3.2, 593.0], [3.3, 593.0], [3.4, 598.0], [3.5, 598.0], [3.6, 598.0], [3.7, 598.0], [3.8, 598.0], [3.9, 605.0], [4.0, 605.0], [4.1, 605.0], [4.2, 605.0], [4.3, 605.0], [4.4, 605.0], [4.5, 605.0], [4.6, 605.0], [4.7, 605.0], [4.8, 605.0], [4.9, 605.0], [5.0, 605.0], [5.1, 605.0], [5.2, 605.0], [5.3, 606.0], [5.4, 606.0], [5.5, 606.0], [5.6, 606.0], [5.7, 606.0], [5.8, 606.0], [5.9, 606.0], [6.0, 606.0], [6.1, 606.0], [6.2, 606.0], [6.3, 606.0], [6.4, 606.0], [6.5, 606.0], [6.6, 606.0], [6.7, 606.0], [6.8, 606.0], [6.9, 606.0], [7.0, 606.0], [7.1, 606.0], [7.2, 606.0], [7.3, 606.0], [7.4, 606.0], [7.5, 606.0], [7.6, 606.0], [7.7, 606.0], [7.8, 606.0], [7.9, 606.0], [8.0, 606.0], [8.1, 606.0], [8.2, 606.0], [8.3, 606.0], [8.4, 606.0], [8.5, 606.0], [8.6, 606.0], [8.7, 606.0], [8.8, 606.0], [8.9, 606.0], [9.0, 606.0], [9.1, 606.0], [9.2, 606.0], [9.3, 606.0], [9.4, 606.0], [9.5, 606.0], [9.6, 606.0], [9.7, 606.0], [9.8, 606.0], [9.9, 606.0], [10.0, 606.0], [10.1, 606.0], [10.2, 606.0], [10.3, 606.0], [10.4, 606.0], [10.5, 606.0], [10.6, 606.0], [10.7, 606.0], [10.8, 606.0], [10.9, 606.0], [11.0, 606.0], [11.1, 606.0], [11.2, 606.0], [11.3, 606.0], [11.4, 606.0], [11.5, 607.0], [11.6, 607.0], [11.7, 607.0], [11.8, 607.0], [11.9, 607.0], [12.0, 607.0], [12.1, 607.0], [12.2, 607.0], [12.3, 607.0], [12.4, 607.0], [12.5, 607.0], [12.6, 607.0], [12.7, 607.0], [12.8, 607.0], [12.9, 607.0], [13.0, 607.0], [13.1, 607.0], [13.2, 607.0], [13.3, 607.0], [13.4, 607.0], [13.5, 607.0], [13.6, 607.0], [13.7, 607.0], [13.8, 607.0], [13.9, 607.0], [14.0, 607.0], [14.1, 607.0], [14.2, 607.0], [14.3, 607.0], [14.4, 607.0], [14.5, 607.0], [14.6, 607.0], [14.7, 607.0], [14.8, 607.0], [14.9, 607.0], [15.0, 607.0], [15.1, 607.0], [15.2, 607.0], [15.3, 607.0], [15.4, 24135.0], [15.5, 24135.0], [15.6, 24135.0], [15.7, 24135.0], [15.8, 24146.0], [15.9, 24146.0], [16.0, 24146.0], [16.1, 24146.0], [16.2, 24146.0], [16.3, 24148.0], [16.4, 24148.0], [16.5, 24148.0], [16.6, 24148.0], [16.7, 24148.0], [16.8, 24154.0], [16.9, 24154.0], [17.0, 24154.0], [17.1, 24154.0], [17.2, 24154.0], [17.3, 24155.0], [17.4, 24155.0], [17.5, 24155.0], [17.6, 24155.0], [17.7, 24155.0], [17.8, 24161.0], [17.9, 24161.0], [18.0, 24161.0], [18.1, 24161.0], [18.2, 24162.0], [18.3, 24162.0], [18.4, 24162.0], [18.5, 24162.0], [18.6, 24162.0], [18.7, 24171.0], [18.8, 24171.0], [18.9, 24171.0], [19.0, 24171.0], [19.1, 24171.0], [19.2, 24173.0], [19.3, 24173.0], [19.4, 24173.0], [19.5, 24173.0], [19.6, 24173.0], [19.7, 24177.0], [19.8, 24177.0], [19.9, 24177.0], [20.0, 24177.0], [20.1, 24178.0], [20.2, 24178.0], [20.3, 24178.0], [20.4, 24178.0], [20.5, 24178.0], [20.6, 24186.0], [20.7, 24186.0], [20.8, 24186.0], [20.9, 24186.0], [21.0, 24186.0], [21.1, 24193.0], [21.2, 24193.0], [21.3, 24193.0], [21.4, 24193.0], [21.5, 24193.0], [21.6, 24193.0], [21.7, 24193.0], [21.8, 24193.0], [21.9, 24193.0], [22.0, 24193.0], [22.1, 24199.0], [22.2, 24199.0], [22.3, 24199.0], [22.4, 24199.0], [22.5, 24200.0], [22.6, 24200.0], [22.7, 24200.0], [22.8, 24200.0], [22.9, 24200.0], [23.0, 24204.0], [23.1, 24204.0], [23.2, 24204.0], [23.3, 24204.0], [23.4, 24204.0], [23.5, 24208.0], [23.6, 24208.0], [23.7, 24208.0], [23.8, 24208.0], [23.9, 24208.0], [24.0, 24209.0], [24.1, 24209.0], [24.2, 24209.0], [24.3, 24209.0], [24.4, 24209.0], [24.5, 24218.0], [24.6, 24218.0], [24.7, 24218.0], [24.8, 24218.0], [24.9, 24223.0], [25.0, 24223.0], [25.1, 24223.0], [25.2, 24223.0], [25.3, 24223.0], [25.4, 24228.0], [25.5, 24228.0], [25.6, 24228.0], [25.7, 24228.0], [25.8, 24228.0], [25.9, 24229.0], [26.0, 24229.0], [26.1, 24229.0], [26.2, 24229.0], [26.3, 24229.0], [26.4, 24234.0], [26.5, 24234.0], [26.6, 24234.0], [26.7, 24234.0], [26.8, 24239.0], [26.9, 24239.0], [27.0, 24239.0], [27.1, 24239.0], [27.2, 24239.0], [27.3, 24242.0], [27.4, 24242.0], [27.5, 24242.0], [27.6, 24242.0], [27.7, 24242.0], [27.8, 24247.0], [27.9, 24247.0], [28.0, 24247.0], [28.1, 24247.0], [28.2, 24247.0], [28.3, 24251.0], [28.4, 24251.0], [28.5, 24251.0], [28.6, 24251.0], [28.7, 24251.0], [28.8, 24252.0], [28.9, 24252.0], [29.0, 24252.0], [29.1, 24252.0], [29.2, 24253.0], [29.3, 24253.0], [29.4, 24253.0], [29.5, 24253.0], [29.6, 24253.0], [29.7, 24261.0], [29.8, 24261.0], [29.9, 24261.0], [30.0, 24261.0], [30.1, 24261.0], [30.2, 24265.0], [30.3, 24265.0], [30.4, 24265.0], [30.5, 24265.0], [30.6, 24265.0], [30.7, 24267.0], [30.8, 24267.0], [30.9, 24267.0], [31.0, 24267.0], [31.1, 24267.0], [31.2, 24269.0], [31.3, 24269.0], [31.4, 24269.0], [31.5, 24269.0], [31.6, 24272.0], [31.7, 24272.0], [31.8, 24272.0], [31.9, 24272.0], [32.0, 24272.0], [32.1, 24284.0], [32.2, 24284.0], [32.3, 24284.0], [32.4, 24284.0], [32.5, 24284.0], [32.6, 24285.0], [32.7, 24285.0], [32.8, 24285.0], [32.9, 24285.0], [33.0, 24285.0], [33.1, 24290.0], [33.2, 24290.0], [33.3, 24290.0], [33.4, 24290.0], [33.5, 24295.0], [33.6, 24295.0], [33.7, 24295.0], [33.8, 24295.0], [33.9, 24295.0], [34.0, 24300.0], [34.1, 24300.0], [34.2, 24300.0], [34.3, 24300.0], [34.4, 24300.0], [34.5, 24301.0], [34.6, 24301.0], [34.7, 24301.0], [34.8, 24301.0], [34.9, 24301.0], [35.0, 24306.0], [35.1, 24306.0], [35.2, 24306.0], [35.3, 24306.0], [35.4, 24306.0], [35.5, 24310.0], [35.6, 24310.0], [35.7, 24310.0], [35.8, 24310.0], [35.9, 24313.0], [36.0, 24313.0], [36.1, 24313.0], [36.2, 24313.0], [36.3, 24313.0], [36.4, 24318.0], [36.5, 24318.0], [36.6, 24318.0], [36.7, 24318.0], [36.8, 24318.0], [36.9, 24320.0], [37.0, 24320.0], [37.1, 24320.0], [37.2, 24320.0], [37.3, 24320.0], [37.4, 24325.0], [37.5, 24325.0], [37.6, 24325.0], [37.7, 24325.0], [37.8, 24328.0], [37.9, 24328.0], [38.0, 24328.0], [38.1, 24328.0], [38.2, 24328.0], [38.3, 24329.0], [38.4, 24329.0], [38.5, 24329.0], [38.6, 24329.0], [38.7, 24329.0], [38.8, 24335.0], [38.9, 24335.0], [39.0, 24335.0], [39.1, 24335.0], [39.2, 24335.0], [39.3, 24338.0], [39.4, 24338.0], [39.5, 24338.0], [39.6, 24338.0], [39.7, 24338.0], [39.8, 24346.0], [39.9, 24346.0], [40.0, 24346.0], [40.1, 24346.0], [40.2, 24351.0], [40.3, 24351.0], [40.4, 24351.0], [40.5, 24351.0], [40.6, 24351.0], [40.7, 24355.0], [40.8, 24355.0], [40.9, 24355.0], [41.0, 24355.0], [41.1, 24355.0], [41.2, 24359.0], [41.3, 24359.0], [41.4, 24359.0], [41.5, 24359.0], [41.6, 24359.0], [41.7, 24363.0], [41.8, 24363.0], [41.9, 24363.0], [42.0, 24363.0], [42.1, 24363.0], [42.2, 24366.0], [42.3, 24366.0], [42.4, 24366.0], [42.5, 24366.0], [42.6, 24370.0], [42.7, 24370.0], [42.8, 24370.0], [42.9, 24370.0], [43.0, 24370.0], [43.1, 24371.0], [43.2, 24371.0], [43.3, 24371.0], [43.4, 24371.0], [43.5, 24371.0], [43.6, 24378.0], [43.7, 24378.0], [43.8, 24378.0], [43.9, 24378.0], [44.0, 24378.0], [44.1, 24380.0], [44.2, 24380.0], [44.3, 24380.0], [44.4, 24380.0], [44.5, 24380.0], [44.6, 24380.0], [44.7, 24380.0], [44.8, 24380.0], [44.9, 24380.0], [45.0, 24388.0], [45.1, 24388.0], [45.2, 24388.0], [45.3, 24388.0], [45.4, 24388.0], [45.5, 24392.0], [45.6, 24392.0], [45.7, 24392.0], [45.8, 24392.0], [45.9, 24392.0], [46.0, 24398.0], [46.1, 24398.0], [46.2, 24398.0], [46.3, 24398.0], [46.4, 24398.0], [46.5, 24401.0], [46.6, 24401.0], [46.7, 24401.0], [46.8, 24401.0], [46.9, 24401.0], [47.0, 24401.0], [47.1, 24401.0], [47.2, 24401.0], [47.3, 24401.0], [47.4, 24409.0], [47.5, 24409.0], [47.6, 24409.0], [47.7, 24409.0], [47.8, 24409.0], [47.9, 24413.0], [48.0, 24413.0], [48.1, 24413.0], [48.2, 24413.0], [48.3, 24413.0], [48.4, 24414.0], [48.5, 24414.0], [48.6, 24414.0], [48.7, 24414.0], [48.8, 24414.0], [48.9, 24416.0], [49.0, 24416.0], [49.1, 24416.0], [49.2, 24416.0], [49.3, 24424.0], [49.4, 24424.0], [49.5, 24424.0], [49.6, 24424.0], [49.7, 24424.0], [49.8, 24426.0], [49.9, 24426.0], [50.0, 24426.0], [50.1, 24426.0], [50.2, 24426.0], [50.3, 24429.0], [50.4, 24429.0], [50.5, 24429.0], [50.6, 24429.0], [50.7, 24429.0], [50.8, 24433.0], [50.9, 24433.0], [51.0, 24433.0], [51.1, 24433.0], [51.2, 24438.0], [51.3, 24438.0], [51.4, 24438.0], [51.5, 24438.0], [51.6, 24438.0], [51.7, 24448.0], [51.8, 24448.0], [51.9, 24448.0], [52.0, 24448.0], [52.1, 24448.0], [52.2, 24449.0], [52.3, 24449.0], [52.4, 24449.0], [52.5, 24449.0], [52.6, 24449.0], [52.7, 24449.0], [52.8, 24449.0], [52.9, 24449.0], [53.0, 24449.0], [53.1, 24449.0], [53.2, 24450.0], [53.3, 24450.0], [53.4, 24450.0], [53.5, 24450.0], [53.6, 24461.0], [53.7, 24461.0], [53.8, 24461.0], [53.9, 24461.0], [54.0, 24461.0], [54.1, 24462.0], [54.2, 24462.0], [54.3, 24462.0], [54.4, 24462.0], [54.5, 24462.0], [54.6, 24463.0], [54.7, 24463.0], [54.8, 24463.0], [54.9, 24463.0], [55.0, 24463.0], [55.1, 24469.0], [55.2, 24469.0], [55.3, 24469.0], [55.4, 24469.0], [55.5, 24469.0], [55.6, 24472.0], [55.7, 24472.0], [55.8, 24472.0], [55.9, 24472.0], [56.0, 24480.0], [56.1, 24480.0], [56.2, 24480.0], [56.3, 24480.0], [56.4, 24480.0], [56.5, 24485.0], [56.6, 24485.0], [56.7, 24485.0], [56.8, 24485.0], [56.9, 24485.0], [57.0, 24489.0], [57.1, 24489.0], [57.2, 24489.0], [57.3, 24489.0], [57.4, 24489.0], [57.5, 24489.0], [57.6, 24489.0], [57.7, 24489.0], [57.8, 24489.0], [57.9, 24495.0], [58.0, 24495.0], [58.1, 24495.0], [58.2, 24495.0], [58.3, 24495.0], [58.4, 24499.0], [58.5, 24499.0], [58.6, 24499.0], [58.7, 24499.0], [58.8, 24499.0], [58.9, 24505.0], [59.0, 24505.0], [59.1, 24505.0], [59.2, 24505.0], [59.3, 24505.0], [59.4, 24506.0], [59.5, 24506.0], [59.6, 24506.0], [59.7, 24506.0], [59.8, 24506.0], [59.9, 24507.0], [60.0, 24507.0], [60.1, 24507.0], [60.2, 24507.0], [60.3, 24517.0], [60.4, 24517.0], [60.5, 24517.0], [60.6, 24517.0], [60.7, 24517.0], [60.8, 24520.0], [60.9, 24520.0], [61.0, 24520.0], [61.1, 24520.0], [61.2, 24520.0], [61.3, 24521.0], [61.4, 24521.0], [61.5, 24521.0], [61.6, 24521.0], [61.7, 24521.0], [61.8, 24526.0], [61.9, 24526.0], [62.0, 24526.0], [62.1, 24526.0], [62.2, 24526.0], [62.3, 24530.0], [62.4, 24530.0], [62.5, 24530.0], [62.6, 24530.0], [62.7, 24535.0], [62.8, 24535.0], [62.9, 24535.0], [63.0, 24535.0], [63.1, 24535.0], [63.2, 24536.0], [63.3, 24536.0], [63.4, 24536.0], [63.5, 24536.0], [63.6, 24536.0], [63.7, 24541.0], [63.8, 24541.0], [63.9, 24541.0], [64.0, 24541.0], [64.1, 24541.0], [64.2, 24544.0], [64.3, 24544.0], [64.4, 24544.0], [64.5, 24544.0], [64.6, 24549.0], [64.7, 24549.0], [64.8, 24549.0], [64.9, 24549.0], [65.0, 24549.0], [65.1, 24556.0], [65.2, 24556.0], [65.3, 24556.0], [65.4, 24556.0], [65.5, 24556.0], [65.6, 24561.0], [65.7, 24561.0], [65.8, 24561.0], [65.9, 24561.0], [66.0, 24561.0], [66.1, 24564.0], [66.2, 24564.0], [66.3, 24564.0], [66.4, 24564.0], [66.5, 24564.0], [66.6, 24568.0], [66.7, 24568.0], [66.8, 24568.0], [66.9, 24568.0], [67.0, 24573.0], [67.1, 24573.0], [67.2, 24573.0], [67.3, 24573.0], [67.4, 24573.0], [67.5, 24574.0], [67.6, 24574.0], [67.7, 24574.0], [67.8, 24574.0], [67.9, 24574.0], [68.0, 24576.0], [68.1, 24576.0], [68.2, 24576.0], [68.3, 24576.0], [68.4, 24576.0], [68.5, 24577.0], [68.6, 24577.0], [68.7, 24577.0], [68.8, 24577.0], [68.9, 24583.0], [69.0, 24583.0], [69.1, 24583.0], [69.2, 24583.0], [69.3, 24583.0], [69.4, 24593.0], [69.5, 24593.0], [69.6, 24593.0], [69.7, 24593.0], [69.8, 24593.0], [69.9, 24597.0], [70.0, 24597.0], [70.1, 24597.0], [70.2, 24597.0], [70.3, 24597.0], [70.4, 24600.0], [70.5, 24600.0], [70.6, 24600.0], [70.7, 24600.0], [70.8, 24600.0], [70.9, 24606.0], [71.0, 24606.0], [71.1, 24606.0], [71.2, 24606.0], [71.3, 24608.0], [71.4, 24608.0], [71.5, 24608.0], [71.6, 24608.0], [71.7, 24608.0], [71.8, 24612.0], [71.9, 24612.0], [72.0, 24612.0], [72.1, 24612.0], [72.2, 24612.0], [72.3, 24615.0], [72.4, 24615.0], [72.5, 24615.0], [72.6, 24615.0], [72.7, 24615.0], [72.8, 24619.0], [72.9, 24619.0], [73.0, 24619.0], [73.1, 24619.0], [73.2, 24619.0], [73.3, 24623.0], [73.4, 24623.0], [73.5, 24623.0], [73.6, 24623.0], [73.7, 24625.0], [73.8, 24625.0], [73.9, 24625.0], [74.0, 24625.0], [74.1, 24625.0], [74.2, 24632.0], [74.3, 24632.0], [74.4, 24632.0], [74.5, 24632.0], [74.6, 24632.0], [74.7, 24632.0], [74.8, 24632.0], [74.9, 24632.0], [75.0, 24632.0], [75.1, 24632.0], [75.2, 24639.0], [75.3, 24639.0], [75.4, 24639.0], [75.5, 24639.0], [75.6, 24641.0], [75.7, 24641.0], [75.8, 24641.0], [75.9, 24641.0], [76.0, 24641.0], [76.1, 24645.0], [76.2, 24645.0], [76.3, 24645.0], [76.4, 24645.0], [76.5, 24645.0], [76.6, 24650.0], [76.7, 24650.0], [76.8, 24650.0], [76.9, 24650.0], [77.0, 24650.0], [77.1, 24654.0], [77.2, 24654.0], [77.3, 24654.0], [77.4, 24654.0], [77.5, 24654.0], [77.6, 24656.0], [77.7, 24656.0], [77.8, 24656.0], [77.9, 24656.0], [78.0, 24664.0], [78.1, 24664.0], [78.2, 24664.0], [78.3, 24664.0], [78.4, 24664.0], [78.5, 24669.0], [78.6, 24669.0], [78.7, 24669.0], [78.8, 24669.0], [78.9, 24669.0], [79.0, 24672.0], [79.1, 24672.0], [79.2, 24672.0], [79.3, 24672.0], [79.4, 24672.0], [79.5, 24678.0], [79.6, 24678.0], [79.7, 24678.0], [79.8, 24678.0], [79.9, 24678.0], [80.0, 24678.0], [80.1, 24678.0], [80.2, 24678.0], [80.3, 24678.0], [80.4, 24681.0], [80.5, 24681.0], [80.6, 24681.0], [80.7, 24681.0], [80.8, 24681.0], [80.9, 24686.0], [81.0, 24686.0], [81.1, 24686.0], [81.2, 24686.0], [81.3, 24686.0], [81.4, 24688.0], [81.5, 24688.0], [81.6, 24688.0], [81.7, 24688.0], [81.8, 24688.0], [81.9, 24697.0], [82.0, 24697.0], [82.1, 24697.0], [82.2, 24697.0], [82.3, 24701.0], [82.4, 24701.0], [82.5, 24701.0], [82.6, 24701.0], [82.7, 24701.0], [82.8, 24702.0], [82.9, 24702.0], [83.0, 24702.0], [83.1, 24702.0], [83.2, 24702.0], [83.3, 24712.0], [83.4, 24712.0], [83.5, 24712.0], [83.6, 24712.0], [83.7, 24712.0], [83.8, 24715.0], [83.9, 24715.0], [84.0, 24715.0], [84.1, 24715.0], [84.2, 24715.0], [84.3, 24717.0], [84.4, 24717.0], [84.5, 24717.0], [84.6, 24717.0], [84.7, 24720.0], [84.8, 24720.0], [84.9, 24720.0], [85.0, 24720.0], [85.1, 24720.0], [85.2, 24727.0], [85.3, 24727.0], [85.4, 24727.0], [85.5, 24727.0], [85.6, 24727.0], [85.7, 24737.0], [85.8, 24737.0], [85.9, 24737.0], [86.0, 24737.0], [86.1, 24737.0], [86.2, 24749.0], [86.3, 24749.0], [86.4, 24749.0], [86.5, 24749.0], [86.6, 24749.0], [86.7, 24753.0], [86.8, 24753.0], [86.9, 24753.0], [87.0, 24753.0], [87.1, 24769.0], [87.2, 24769.0], [87.3, 24769.0], [87.4, 24769.0], [87.5, 24769.0], [87.6, 24769.0], [87.7, 24769.0], [87.8, 24769.0], [87.9, 24769.0], [88.0, 24769.0], [88.1, 24769.0], [88.2, 24769.0], [88.3, 24769.0], [88.4, 24769.0], [88.5, 24769.0], [88.6, 24769.0], [88.7, 24769.0], [88.8, 24769.0], [88.9, 24769.0], [89.0, 24770.0], [89.1, 24770.0], [89.2, 24770.0], [89.3, 24770.0], [89.4, 24770.0], [89.5, 24770.0], [89.6, 24770.0], [89.7, 24770.0], [89.8, 24770.0], [89.9, 24770.0], [90.0, 24770.0], [90.1, 24770.0], [90.2, 24770.0], [90.3, 24770.0], [90.4, 24770.0], [90.5, 24770.0], [90.6, 24770.0], [90.7, 24770.0], [90.8, 24770.0], [90.9, 24770.0], [91.0, 24770.0], [91.1, 24770.0], [91.2, 24770.0], [91.3, 24770.0], [91.4, 24770.0], [91.5, 24770.0], [91.6, 24770.0], [91.7, 24770.0], [91.8, 24770.0], [91.9, 24770.0], [92.0, 24770.0], [92.1, 24770.0], [92.2, 24770.0], [92.3, 24770.0], [92.4, 24770.0], [92.5, 24770.0], [92.6, 24770.0], [92.7, 24770.0], [92.8, 24770.0], [92.9, 24771.0], [93.0, 24771.0], [93.1, 24771.0], [93.2, 24771.0], [93.3, 24771.0], [93.4, 24771.0], [93.5, 24771.0], [93.6, 24771.0], [93.7, 24771.0], [93.8, 24771.0], [93.9, 24771.0], [94.0, 24771.0], [94.1, 24771.0], [94.2, 24771.0], [94.3, 24771.0], [94.4, 24771.0], [94.5, 24771.0], [94.6, 24771.0], [94.7, 24771.0], [94.8, 24772.0], [94.9, 24772.0], [95.0, 24772.0], [95.1, 24772.0], [95.2, 24772.0], [95.3, 24773.0], [95.4, 24773.0], [95.5, 24773.0], [95.6, 24773.0], [95.7, 24773.0], [95.8, 24773.0], [95.9, 24773.0], [96.0, 24773.0], [96.1, 24773.0], [96.2, 24775.0], [96.3, 24775.0], [96.4, 24775.0], [96.5, 24775.0], [96.6, 24775.0], [96.7, 24777.0], [96.8, 24777.0], [96.9, 24777.0], [97.0, 24777.0], [97.1, 24777.0], [97.2, 24777.0], [97.3, 24777.0], [97.4, 24777.0], [97.5, 24777.0], [97.6, 24777.0], [97.7, 24778.0], [97.8, 24778.0], [97.9, 24778.0], [98.0, 24778.0], [98.1, 24778.0], [98.2, 24778.0], [98.3, 24778.0], [98.4, 24778.0], [98.5, 24778.0], [98.6, 24779.0], [98.7, 24779.0], [98.8, 24779.0], [98.9, 24779.0], [99.0, 24779.0], [99.1, 24780.0], [99.2, 24780.0], [99.3, 24780.0], [99.4, 24780.0], [99.5, 24780.0], [99.6, 24782.0], [99.7, 24782.0], [99.8, 24782.0], [99.9, 24782.0]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 8.0, "minX": 500.0, "maxY": 37.0, "series": [{"data": [[600.0, 24.0], [24400.0, 26.0], [24500.0, 24.0], [24300.0, 26.0], [24100.0, 15.0], [24200.0, 24.0], [24600.0, 25.0], [24700.0, 37.0], [500.0, 8.0]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 159.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 32.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 159.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 18.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 180.06698564593296, "minX": 1.71316872E12, "maxY": 180.06698564593296, "series": [{"data": [[1.71316872E12, 180.06698564593296]], "isOverall": false, "label": "conf #3 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71316872E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 597.875, "minX": 169.0, "maxY": 24525.73469387755, "series": [{"data": [[175.0, 24320.75], [174.0, 24223.0], [173.0, 24320.571428571428], [172.0, 24229.5], [171.0, 24265.0], [170.0, 24207.5], [169.0, 24330.6], [177.0, 24525.73469387755], [176.0, 24438.0], [201.0, 599.2916666666667], [202.0, 597.875]], "isOverall": false, "label": "conf #3 req", "isController": false}, {"data": [[180.06698564593296, 20831.253588516745]], "isOverall": false, "label": "conf #3 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 202.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 574.75, "minX": 1.71316872E12, "maxY": 805.25, "series": [{"data": [[1.71316872E12, 805.25]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71316872E12, 574.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71316872E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 20831.253588516745, "minX": 1.71316872E12, "maxY": 20831.253588516745, "series": [{"data": [[1.71316872E12, 20831.253588516745]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71316872E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 20830.129186602873, "minX": 1.71316872E12, "maxY": 20830.129186602873, "series": [{"data": [[1.71316872E12, 20830.129186602873]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71316872E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 12.435406698564588, "minX": 1.71316872E12, "maxY": 12.435406698564588, "series": [{"data": [[1.71316872E12, 12.435406698564588]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71316872E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 558.0, "minX": 1.71316872E12, "maxY": 24782.0, "series": [{"data": [[1.71316872E12, 24782.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71316872E12, 24770.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71316872E12, 24780.16]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71316872E12, 24773.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71316872E12, 558.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71316872E12, 24462.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71316872E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 606.0, "minX": 32.0, "maxY": 24526.0, "series": [{"data": [[32.0, 606.0], [177.0, 24526.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[177.0, 24228.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 177.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 599.0, "minX": 32.0, "maxY": 24526.0, "series": [{"data": [[32.0, 599.0], [177.0, 24526.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[177.0, 24228.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 177.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.4833333333333334, "minX": 1.71316872E12, "maxY": 3.4833333333333334, "series": [{"data": [[1.71316872E12, 3.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71316872E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.71316872E12, "maxY": 3.183333333333333, "series": [{"data": [[1.71316872E12, 3.183333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71316872E12, 0.3]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71316872E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.71316872E12, "maxY": 3.183333333333333, "series": [{"data": [[1.71316872E12, 0.3]], "isOverall": false, "label": "conf #3 req-failure", "isController": false}, {"data": [[1.71316872E12, 3.183333333333333]], "isOverall": false, "label": "conf #3 req-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71316872E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.71316872E12, "maxY": 3.183333333333333, "series": [{"data": [[1.71316872E12, 3.183333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71316872E12, 0.3]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71316872E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

