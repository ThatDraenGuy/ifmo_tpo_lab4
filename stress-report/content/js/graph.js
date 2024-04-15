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
        data: {"result": {"minY": 506.0, "minX": 0.0, "maxY": 25079.0, "series": [{"data": [[0.0, 506.0], [0.1, 523.0], [0.2, 525.0], [0.3, 526.0], [0.4, 528.0], [0.5, 547.0], [0.6, 1197.0], [0.7, 1407.0], [0.8, 1491.0], [0.9, 2016.0], [1.0, 2114.0], [1.1, 2117.0], [1.2, 2139.0], [1.3, 2139.0], [1.4, 2139.0], [1.5, 2229.0], [1.6, 2264.0], [1.7, 2271.0], [1.8, 2338.0], [1.9, 2392.0], [2.0, 2416.0], [2.1, 2417.0], [2.2, 2424.0], [2.3, 2424.0], [2.4, 2424.0], [2.5, 2424.0], [2.6, 2425.0], [2.7, 2453.0], [2.8, 2454.0], [2.9, 2454.0], [3.0, 2454.0], [3.1, 2466.0], [3.2, 2467.0], [3.3, 2467.0], [3.4, 2467.0], [3.5, 2483.0], [3.6, 2483.0], [3.7, 2484.0], [3.8, 2485.0], [3.9, 2492.0], [4.0, 2492.0], [4.1, 2492.0], [4.2, 2493.0], [4.3, 2494.0], [4.4, 2494.0], [4.5, 2494.0], [4.6, 2495.0], [4.7, 2495.0], [4.8, 2495.0], [4.9, 2496.0], [5.0, 2497.0], [5.1, 2497.0], [5.2, 2497.0], [5.3, 2498.0], [5.4, 2498.0], [5.5, 2499.0], [5.6, 2500.0], [5.7, 2500.0], [5.8, 2500.0], [5.9, 2500.0], [6.0, 2500.0], [6.1, 2501.0], [6.2, 2504.0], [6.3, 2504.0], [6.4, 2504.0], [6.5, 2505.0], [6.6, 2505.0], [6.7, 2505.0], [6.8, 2505.0], [6.9, 2505.0], [7.0, 2506.0], [7.1, 2507.0], [7.2, 2507.0], [7.3, 2508.0], [7.4, 2508.0], [7.5, 2509.0], [7.6, 2509.0], [7.7, 2510.0], [7.8, 2515.0], [7.9, 2515.0], [8.0, 2515.0], [8.1, 2516.0], [8.2, 2516.0], [8.3, 2516.0], [8.4, 2516.0], [8.5, 2516.0], [8.6, 2516.0], [8.7, 2516.0], [8.8, 2517.0], [8.9, 2517.0], [9.0, 2517.0], [9.1, 2517.0], [9.2, 2517.0], [9.3, 2517.0], [9.4, 2517.0], [9.5, 2518.0], [9.6, 2518.0], [9.7, 2518.0], [9.8, 2518.0], [9.9, 2518.0], [10.0, 2518.0], [10.1, 2518.0], [10.2, 2519.0], [10.3, 2519.0], [10.4, 2519.0], [10.5, 2520.0], [10.6, 2520.0], [10.7, 2520.0], [10.8, 2520.0], [10.9, 2520.0], [11.0, 2520.0], [11.1, 2520.0], [11.2, 2521.0], [11.3, 2521.0], [11.4, 2521.0], [11.5, 2521.0], [11.6, 2521.0], [11.7, 2521.0], [11.8, 2521.0], [11.9, 2521.0], [12.0, 2521.0], [12.1, 2522.0], [12.2, 2522.0], [12.3, 2522.0], [12.4, 2522.0], [12.5, 2522.0], [12.6, 2523.0], [12.7, 2523.0], [12.8, 2523.0], [12.9, 2523.0], [13.0, 2523.0], [13.1, 2524.0], [13.2, 2524.0], [13.3, 2524.0], [13.4, 2524.0], [13.5, 2524.0], [13.6, 2524.0], [13.7, 2525.0], [13.8, 2525.0], [13.9, 2526.0], [14.0, 2526.0], [14.1, 2527.0], [14.2, 2527.0], [14.3, 2527.0], [14.4, 2528.0], [14.5, 2528.0], [14.6, 2532.0], [14.7, 2532.0], [14.8, 2533.0], [14.9, 2534.0], [15.0, 2535.0], [15.1, 2535.0], [15.2, 2535.0], [15.3, 2535.0], [15.4, 2536.0], [15.5, 2536.0], [15.6, 2537.0], [15.7, 2537.0], [15.8, 2540.0], [15.9, 2541.0], [16.0, 2541.0], [16.1, 2541.0], [16.2, 2550.0], [16.3, 2555.0], [16.4, 2556.0], [16.5, 2556.0], [16.6, 2557.0], [16.7, 2557.0], [16.8, 2557.0], [16.9, 2558.0], [17.0, 2559.0], [17.1, 2559.0], [17.2, 2560.0], [17.3, 2560.0], [17.4, 2563.0], [17.5, 2585.0], [17.6, 2586.0], [17.7, 2586.0], [17.8, 2587.0], [17.9, 2650.0], [18.0, 2719.0], [18.1, 2720.0], [18.2, 2720.0], [18.3, 2720.0], [18.4, 2721.0], [18.5, 2721.0], [18.6, 2731.0], [18.7, 2731.0], [18.8, 2732.0], [18.9, 2753.0], [19.0, 2758.0], [19.1, 2758.0], [19.2, 2758.0], [19.3, 2758.0], [19.4, 2758.0], [19.5, 2790.0], [19.6, 2790.0], [19.7, 2790.0], [19.8, 2791.0], [19.9, 2791.0], [20.0, 2791.0], [20.1, 2792.0], [20.2, 2843.0], [20.3, 2869.0], [20.4, 3000.0], [20.5, 3001.0], [20.6, 3001.0], [20.7, 3009.0], [20.8, 3009.0], [20.9, 3009.0], [21.0, 3010.0], [21.1, 3010.0], [21.2, 3010.0], [21.3, 3011.0], [21.4, 3043.0], [21.5, 3043.0], [21.6, 3043.0], [21.7, 3044.0], [21.8, 3145.0], [21.9, 3145.0], [22.0, 3145.0], [22.1, 3145.0], [22.2, 3146.0], [22.3, 3146.0], [22.4, 3150.0], [22.5, 3150.0], [22.6, 3151.0], [22.7, 3162.0], [22.8, 3181.0], [22.9, 3182.0], [23.0, 3183.0], [23.1, 3183.0], [23.2, 3194.0], [23.3, 3203.0], [23.4, 3204.0], [23.5, 3204.0], [23.6, 3241.0], [23.7, 3268.0], [23.8, 3269.0], [23.9, 3269.0], [24.0, 3269.0], [24.1, 3285.0], [24.2, 3285.0], [24.3, 3285.0], [24.4, 3286.0], [24.5, 3286.0], [24.6, 3310.0], [24.7, 3314.0], [24.8, 3314.0], [24.9, 3314.0], [25.0, 3314.0], [25.1, 3315.0], [25.2, 3315.0], [25.3, 3315.0], [25.4, 3316.0], [25.5, 3320.0], [25.6, 3321.0], [25.7, 3321.0], [25.8, 3321.0], [25.9, 3322.0], [26.0, 3323.0], [26.1, 3360.0], [26.2, 3361.0], [26.3, 3361.0], [26.4, 3361.0], [26.5, 3361.0], [26.6, 3362.0], [26.7, 3362.0], [26.8, 3362.0], [26.9, 3368.0], [27.0, 3369.0], [27.1, 3373.0], [27.2, 3373.0], [27.3, 3374.0], [27.4, 3374.0], [27.5, 3374.0], [27.6, 3374.0], [27.7, 3377.0], [27.8, 3378.0], [27.9, 3378.0], [28.0, 3378.0], [28.1, 3378.0], [28.2, 3378.0], [28.3, 3378.0], [28.4, 3378.0], [28.5, 3378.0], [28.6, 3379.0], [28.7, 3379.0], [28.8, 3379.0], [28.9, 3379.0], [29.0, 3379.0], [29.1, 3379.0], [29.2, 3379.0], [29.3, 3379.0], [29.4, 3379.0], [29.5, 3379.0], [29.6, 3379.0], [29.7, 3379.0], [29.8, 3379.0], [29.9, 3379.0], [30.0, 3380.0], [30.1, 3380.0], [30.2, 3380.0], [30.3, 3380.0], [30.4, 3380.0], [30.5, 3380.0], [30.6, 3380.0], [30.7, 3380.0], [30.8, 3380.0], [30.9, 3381.0], [31.0, 3381.0], [31.1, 3381.0], [31.2, 3381.0], [31.3, 3381.0], [31.4, 3381.0], [31.5, 3381.0], [31.6, 3381.0], [31.7, 3381.0], [31.8, 3381.0], [31.9, 3381.0], [32.0, 3381.0], [32.1, 3382.0], [32.2, 3382.0], [32.3, 3382.0], [32.4, 3382.0], [32.5, 3382.0], [32.6, 3382.0], [32.7, 3382.0], [32.8, 3382.0], [32.9, 3382.0], [33.0, 3382.0], [33.1, 3382.0], [33.2, 3383.0], [33.3, 3383.0], [33.4, 3383.0], [33.5, 3383.0], [33.6, 3383.0], [33.7, 3383.0], [33.8, 3383.0], [33.9, 3383.0], [34.0, 3383.0], [34.1, 3384.0], [34.2, 3384.0], [34.3, 3384.0], [34.4, 3384.0], [34.5, 3384.0], [34.6, 3384.0], [34.7, 3384.0], [34.8, 3385.0], [34.9, 3385.0], [35.0, 3386.0], [35.1, 3386.0], [35.2, 3386.0], [35.3, 3386.0], [35.4, 3386.0], [35.5, 3386.0], [35.6, 3387.0], [35.7, 3387.0], [35.8, 3387.0], [35.9, 3387.0], [36.0, 3387.0], [36.1, 3387.0], [36.2, 3387.0], [36.3, 3388.0], [36.4, 3388.0], [36.5, 3388.0], [36.6, 3388.0], [36.7, 3388.0], [36.8, 3388.0], [36.9, 3388.0], [37.0, 3389.0], [37.1, 3389.0], [37.2, 3389.0], [37.3, 3389.0], [37.4, 3389.0], [37.5, 3389.0], [37.6, 3389.0], [37.7, 3389.0], [37.8, 3389.0], [37.9, 3389.0], [38.0, 3390.0], [38.1, 3390.0], [38.2, 3390.0], [38.3, 3390.0], [38.4, 3390.0], [38.5, 3390.0], [38.6, 3390.0], [38.7, 3391.0], [38.8, 3391.0], [38.9, 3391.0], [39.0, 3391.0], [39.1, 3391.0], [39.2, 3391.0], [39.3, 3391.0], [39.4, 3391.0], [39.5, 3391.0], [39.6, 3392.0], [39.7, 3392.0], [39.8, 3392.0], [39.9, 3392.0], [40.0, 3392.0], [40.1, 3392.0], [40.2, 3392.0], [40.3, 3392.0], [40.4, 3392.0], [40.5, 3393.0], [40.6, 3393.0], [40.7, 3393.0], [40.8, 3393.0], [40.9, 3393.0], [41.0, 3393.0], [41.1, 3394.0], [41.2, 3394.0], [41.3, 3394.0], [41.4, 3395.0], [41.5, 3395.0], [41.6, 3395.0], [41.7, 3395.0], [41.8, 3396.0], [41.9, 3396.0], [42.0, 3396.0], [42.1, 3396.0], [42.2, 3397.0], [42.3, 3397.0], [42.4, 3397.0], [42.5, 3397.0], [42.6, 3397.0], [42.7, 3398.0], [42.8, 3398.0], [42.9, 3398.0], [43.0, 3398.0], [43.1, 3399.0], [43.2, 3399.0], [43.3, 3400.0], [43.4, 3400.0], [43.5, 3400.0], [43.6, 3401.0], [43.7, 3401.0], [43.8, 3401.0], [43.9, 3402.0], [44.0, 3402.0], [44.1, 3402.0], [44.2, 3402.0], [44.3, 3402.0], [44.4, 3403.0], [44.5, 3403.0], [44.6, 3403.0], [44.7, 3404.0], [44.8, 3406.0], [44.9, 3407.0], [45.0, 3407.0], [45.1, 3407.0], [45.2, 3407.0], [45.3, 3408.0], [45.4, 3409.0], [45.5, 3409.0], [45.6, 3409.0], [45.7, 3410.0], [45.8, 3410.0], [45.9, 3411.0], [46.0, 3412.0], [46.1, 3412.0], [46.2, 3412.0], [46.3, 3412.0], [46.4, 3414.0], [46.5, 3420.0], [46.6, 3420.0], [46.7, 3420.0], [46.8, 3420.0], [46.9, 3422.0], [47.0, 3423.0], [47.1, 3461.0], [47.2, 3461.0], [47.3, 3461.0], [47.4, 3462.0], [47.5, 3462.0], [47.6, 3462.0], [47.7, 3468.0], [47.8, 3518.0], [47.9, 3524.0], [48.0, 3524.0], [48.1, 3524.0], [48.2, 3525.0], [48.3, 3525.0], [48.4, 3536.0], [48.5, 3537.0], [48.6, 3537.0], [48.7, 3537.0], [48.8, 3537.0], [48.9, 3608.0], [49.0, 3621.0], [49.1, 3623.0], [49.2, 3623.0], [49.3, 3624.0], [49.4, 3626.0], [49.5, 3627.0], [49.6, 3628.0], [49.7, 3630.0], [49.8, 3631.0], [49.9, 3631.0], [50.0, 3632.0], [50.1, 3633.0], [50.2, 3633.0], [50.3, 3634.0], [50.4, 3635.0], [50.5, 3636.0], [50.6, 3636.0], [50.7, 3637.0], [50.8, 3643.0], [50.9, 3647.0], [51.0, 3648.0], [51.1, 3649.0], [51.2, 3649.0], [51.3, 3650.0], [51.4, 3651.0], [51.5, 3651.0], [51.6, 3652.0], [51.7, 3653.0], [51.8, 3653.0], [51.9, 3654.0], [52.0, 3654.0], [52.1, 3655.0], [52.2, 3656.0], [52.3, 3656.0], [52.4, 3656.0], [52.5, 3657.0], [52.6, 3657.0], [52.7, 3658.0], [52.8, 3659.0], [52.9, 3660.0], [53.0, 3661.0], [53.1, 3668.0], [53.2, 3669.0], [53.3, 3670.0], [53.4, 3671.0], [53.5, 3672.0], [53.6, 3672.0], [53.7, 3708.0], [53.8, 3728.0], [53.9, 3729.0], [54.0, 3729.0], [54.1, 3739.0], [54.2, 3742.0], [54.3, 3791.0], [54.4, 3802.0], [54.5, 3818.0], [54.6, 3846.0], [54.7, 3846.0], [54.8, 3852.0], [54.9, 3878.0], [55.0, 3880.0], [55.1, 3880.0], [55.2, 3880.0], [55.3, 3881.0], [55.4, 3919.0], [55.5, 3919.0], [55.6, 3919.0], [55.7, 3919.0], [55.8, 3965.0], [55.9, 3966.0], [56.0, 3966.0], [56.1, 3974.0], [56.2, 4011.0], [56.3, 4012.0], [56.4, 4012.0], [56.5, 4012.0], [56.6, 4012.0], [56.7, 4012.0], [56.8, 4013.0], [56.9, 4027.0], [57.0, 4070.0], [57.1, 4070.0], [57.2, 4081.0], [57.3, 4107.0], [57.4, 4116.0], [57.5, 4116.0], [57.6, 4116.0], [57.7, 4116.0], [57.8, 4117.0], [57.9, 4117.0], [58.0, 4138.0], [58.1, 4138.0], [58.2, 4138.0], [58.3, 4138.0], [58.4, 4139.0], [58.5, 4139.0], [58.6, 4141.0], [58.7, 4142.0], [58.8, 4145.0], [58.9, 4145.0], [59.0, 4145.0], [59.1, 4145.0], [59.2, 4146.0], [59.3, 4147.0], [59.4, 4147.0], [59.5, 4148.0], [59.6, 4148.0], [59.7, 4150.0], [59.8, 4150.0], [59.9, 4150.0], [60.0, 4150.0], [60.1, 4150.0], [60.2, 4151.0], [60.3, 4151.0], [60.4, 4151.0], [60.5, 4151.0], [60.6, 4151.0], [60.7, 4151.0], [60.8, 4151.0], [60.9, 4151.0], [61.0, 4151.0], [61.1, 4151.0], [61.2, 4151.0], [61.3, 4151.0], [61.4, 4151.0], [61.5, 4151.0], [61.6, 4151.0], [61.7, 4151.0], [61.8, 4151.0], [61.9, 4151.0], [62.0, 4151.0], [62.1, 4152.0], [62.2, 4152.0], [62.3, 4152.0], [62.4, 4152.0], [62.5, 4152.0], [62.6, 4152.0], [62.7, 4152.0], [62.8, 4152.0], [62.9, 4152.0], [63.0, 4152.0], [63.1, 4152.0], [63.2, 4152.0], [63.3, 4152.0], [63.4, 4152.0], [63.5, 4153.0], [63.6, 4153.0], [63.7, 4153.0], [63.8, 4153.0], [63.9, 4153.0], [64.0, 4153.0], [64.1, 4153.0], [64.2, 4153.0], [64.3, 4153.0], [64.4, 4153.0], [64.5, 4153.0], [64.6, 4153.0], [64.7, 4154.0], [64.8, 4154.0], [64.9, 4154.0], [65.0, 4155.0], [65.1, 4155.0], [65.2, 4155.0], [65.3, 4155.0], [65.4, 4155.0], [65.5, 4155.0], [65.6, 4156.0], [65.7, 4156.0], [65.8, 4156.0], [65.9, 4156.0], [66.0, 4156.0], [66.1, 4156.0], [66.2, 4157.0], [66.3, 4157.0], [66.4, 4157.0], [66.5, 4157.0], [66.6, 4157.0], [66.7, 4157.0], [66.8, 4157.0], [66.9, 4157.0], [67.0, 4157.0], [67.1, 4157.0], [67.2, 4157.0], [67.3, 4157.0], [67.4, 4157.0], [67.5, 4157.0], [67.6, 4158.0], [67.7, 4158.0], [67.8, 4158.0], [67.9, 4158.0], [68.0, 4158.0], [68.1, 4159.0], [68.2, 4159.0], [68.3, 4159.0], [68.4, 4159.0], [68.5, 4159.0], [68.6, 4159.0], [68.7, 4159.0], [68.8, 4160.0], [68.9, 4160.0], [69.0, 4161.0], [69.1, 4161.0], [69.2, 4161.0], [69.3, 4161.0], [69.4, 4162.0], [69.5, 4163.0], [69.6, 4163.0], [69.7, 4163.0], [69.8, 4163.0], [69.9, 4164.0], [70.0, 4165.0], [70.1, 4165.0], [70.2, 4165.0], [70.3, 4165.0], [70.4, 4165.0], [70.5, 4165.0], [70.6, 4165.0], [70.7, 4166.0], [70.8, 4166.0], [70.9, 4166.0], [71.0, 4166.0], [71.1, 4166.0], [71.2, 4166.0], [71.3, 4166.0], [71.4, 4166.0], [71.5, 4166.0], [71.6, 4166.0], [71.7, 4166.0], [71.8, 4166.0], [71.9, 4166.0], [72.0, 4166.0], [72.1, 4167.0], [72.2, 4167.0], [72.3, 4167.0], [72.4, 4167.0], [72.5, 4167.0], [72.6, 4167.0], [72.7, 4167.0], [72.8, 4167.0], [72.9, 4167.0], [73.0, 4167.0], [73.1, 4167.0], [73.2, 4168.0], [73.3, 4168.0], [73.4, 4168.0], [73.5, 4168.0], [73.6, 4168.0], [73.7, 4168.0], [73.8, 4169.0], [73.9, 4170.0], [74.0, 4170.0], [74.1, 4170.0], [74.2, 4170.0], [74.3, 4170.0], [74.4, 4171.0], [74.5, 4171.0], [74.6, 4171.0], [74.7, 4171.0], [74.8, 4171.0], [74.9, 4171.0], [75.0, 4171.0], [75.1, 4171.0], [75.2, 4172.0], [75.3, 4172.0], [75.4, 4172.0], [75.5, 4172.0], [75.6, 4172.0], [75.7, 4172.0], [75.8, 4173.0], [75.9, 4173.0], [76.0, 4173.0], [76.1, 4174.0], [76.2, 4174.0], [76.3, 4176.0], [76.4, 4176.0], [76.5, 4176.0], [76.6, 4176.0], [76.7, 4176.0], [76.8, 4185.0], [76.9, 4186.0], [77.0, 4186.0], [77.1, 4186.0], [77.2, 4186.0], [77.3, 4186.0], [77.4, 4186.0], [77.5, 4186.0], [77.6, 4186.0], [77.7, 4186.0], [77.8, 4193.0], [77.9, 4201.0], [78.0, 4212.0], [78.1, 4212.0], [78.2, 4212.0], [78.3, 4213.0], [78.4, 4214.0], [78.5, 4215.0], [78.6, 4226.0], [78.7, 4227.0], [78.8, 4227.0], [78.9, 4234.0], [79.0, 4245.0], [79.1, 4248.0], [79.2, 4248.0], [79.3, 4248.0], [79.4, 4249.0], [79.5, 4253.0], [79.6, 4261.0], [79.7, 4288.0], [79.8, 4289.0], [79.9, 4289.0], [80.0, 4289.0], [80.1, 4289.0], [80.2, 4291.0], [80.3, 4291.0], [80.4, 4321.0], [80.5, 4321.0], [80.6, 4322.0], [80.7, 4322.0], [80.8, 4322.0], [80.9, 4322.0], [81.0, 4382.0], [81.1, 4383.0], [81.2, 4383.0], [81.3, 4383.0], [81.4, 4383.0], [81.5, 4383.0], [81.6, 4383.0], [81.7, 4383.0], [81.8, 4387.0], [81.9, 4388.0], [82.0, 4389.0], [82.1, 4431.0], [82.2, 4432.0], [82.3, 4434.0], [82.4, 4436.0], [82.5, 4447.0], [82.6, 4448.0], [82.7, 4605.0], [82.8, 4658.0], [82.9, 4658.0], [83.0, 4658.0], [83.1, 4658.0], [83.2, 4659.0], [83.3, 4741.0], [83.4, 4746.0], [83.5, 4747.0], [83.6, 4865.0], [83.7, 4876.0], [83.8, 4943.0], [83.9, 4944.0], [84.0, 4944.0], [84.1, 4944.0], [84.2, 4944.0], [84.3, 4979.0], [84.4, 4996.0], [84.5, 4996.0], [84.6, 4998.0], [84.7, 5000.0], [84.8, 5001.0], [84.9, 5001.0], [85.0, 5001.0], [85.1, 5003.0], [85.2, 5005.0], [85.3, 5012.0], [85.4, 5013.0], [85.5, 5016.0], [85.6, 5018.0], [85.7, 5021.0], [85.8, 5021.0], [85.9, 5021.0], [86.0, 5021.0], [86.1, 5021.0], [86.2, 5022.0], [86.3, 5022.0], [86.4, 5027.0], [86.5, 5030.0], [86.6, 5032.0], [86.7, 5033.0], [86.8, 5033.0], [86.9, 5034.0], [87.0, 5034.0], [87.1, 5034.0], [87.2, 5035.0], [87.3, 5035.0], [87.4, 5035.0], [87.5, 5036.0], [87.6, 5036.0], [87.7, 5037.0], [87.8, 5037.0], [87.9, 5040.0], [88.0, 5040.0], [88.1, 5041.0], [88.2, 5041.0], [88.3, 5041.0], [88.4, 5043.0], [88.5, 5044.0], [88.6, 5044.0], [88.7, 5048.0], [88.8, 5048.0], [88.9, 5053.0], [89.0, 5056.0], [89.1, 5058.0], [89.2, 5058.0], [89.3, 5065.0], [89.4, 5108.0], [89.5, 5110.0], [89.6, 5110.0], [89.7, 5111.0], [89.8, 5111.0], [89.9, 5111.0], [90.0, 5111.0], [90.1, 5138.0], [90.2, 5176.0], [90.3, 5304.0], [90.4, 5357.0], [90.5, 5357.0], [90.6, 5357.0], [90.7, 5358.0], [90.8, 5358.0], [90.9, 5389.0], [91.0, 5390.0], [91.1, 5607.0], [91.2, 5607.0], [91.3, 5607.0], [91.4, 5607.0], [91.5, 5607.0], [91.6, 5608.0], [91.7, 5677.0], [91.8, 5677.0], [91.9, 5678.0], [92.0, 5678.0], [92.1, 5678.0], [92.2, 5678.0], [92.3, 5765.0], [92.4, 5793.0], [92.5, 5799.0], [92.6, 5800.0], [92.7, 5800.0], [92.8, 5801.0], [92.9, 5801.0], [93.0, 5801.0], [93.1, 5802.0], [93.2, 5803.0], [93.3, 5804.0], [93.4, 5804.0], [93.5, 5804.0], [93.6, 5804.0], [93.7, 5805.0], [93.8, 5805.0], [93.9, 5805.0], [94.0, 5805.0], [94.1, 5806.0], [94.2, 5806.0], [94.3, 5806.0], [94.4, 5806.0], [94.5, 5806.0], [94.6, 5808.0], [94.7, 5814.0], [94.8, 5895.0], [94.9, 6001.0], [95.0, 6088.0], [95.1, 6134.0], [95.2, 6171.0], [95.3, 6171.0], [95.4, 6172.0], [95.5, 6174.0], [95.6, 6235.0], [95.7, 6501.0], [95.8, 6501.0], [95.9, 6501.0], [96.0, 6502.0], [96.1, 6502.0], [96.2, 6503.0], [96.3, 6503.0], [96.4, 6503.0], [96.5, 6504.0], [96.6, 6504.0], [96.7, 6505.0], [96.8, 6505.0], [96.9, 6722.0], [97.0, 6725.0], [97.1, 6733.0], [97.2, 6753.0], [97.3, 6869.0], [97.4, 7051.0], [97.5, 7159.0], [97.6, 7413.0], [97.7, 7415.0], [97.8, 7415.0], [97.9, 7415.0], [98.0, 7415.0], [98.1, 7415.0], [98.2, 7416.0], [98.3, 7416.0], [98.4, 7417.0], [98.5, 7455.0], [98.6, 7459.0], [98.7, 7459.0], [98.8, 7460.0], [98.9, 7460.0], [99.0, 7460.0], [99.1, 7462.0], [99.2, 7962.0], [99.3, 7966.0], [99.4, 7966.0], [99.5, 7969.0], [99.6, 8939.0], [99.7, 10269.0], [99.8, 24733.0], [99.9, 24918.0]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 943.0, "series": [{"data": [[900.0, 1.0], [1000.0, 2.0], [1100.0, 1.0], [1300.0, 3.0], [1400.0, 6.0], [1500.0, 2.0], [1600.0, 2.0], [2000.0, 3.0], [2100.0, 24.0], [2200.0, 11.0], [2300.0, 10.0], [2400.0, 166.0], [2500.0, 560.0], [2600.0, 5.0], [2800.0, 8.0], [2700.0, 100.0], [2900.0, 2.0], [3000.0, 63.0], [3100.0, 68.0], [3300.0, 851.0], [3200.0, 59.0], [3400.0, 205.0], [3500.0, 54.0], [3600.0, 217.0], [3700.0, 32.0], [3800.0, 47.0], [3900.0, 36.0], [4000.0, 48.0], [4200.0, 111.0], [4300.0, 78.0], [4100.0, 943.0], [4400.0, 29.0], [4600.0, 26.0], [4800.0, 6.0], [4700.0, 15.0], [5100.0, 44.0], [5000.0, 214.0], [4900.0, 42.0], [5300.0, 34.0], [5600.0, 56.0], [5800.0, 105.0], [5700.0, 11.0], [6000.0, 6.0], [6100.0, 26.0], [5900.0, 4.0], [6200.0, 1.0], [6500.0, 55.0], [6700.0, 21.0], [6800.0, 2.0], [7000.0, 6.0], [7100.0, 5.0], [7400.0, 73.0], [7300.0, 1.0], [7900.0, 16.0], [8400.0, 1.0], [8900.0, 2.0], [10200.0, 6.0], [24900.0, 3.0], [25000.0, 2.0], [24800.0, 3.0], [24600.0, 2.0], [24700.0, 2.0], [500.0, 24.0]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 25000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4421.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 37.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4421.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 103.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 19.125, "minX": 1.71317556E12, "maxY": 135.2629558541269, "series": [{"data": [[1.71317562E12, 135.2629558541269], [1.71317568E12, 106.0], [1.71317574E12, 99.73109243697473], [1.71317556E12, 19.125]], "isOverall": false, "label": "conf #3 users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71317574E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 749.75, "minX": 1.0, "maxY": 24766.0, "series": [{"data": [[2.0, 1091.0], [3.0, 1197.0], [4.0, 1476.0], [5.0, 1427.0], [6.0, 1407.0], [7.0, 1369.0], [8.0, 1649.0], [9.0, 1605.0], [10.0, 1576.0], [11.0, 1530.0], [12.0, 1491.0], [13.0, 1471.0], [14.0, 1451.0], [15.0, 1387.0], [16.0, 1332.0], [17.0, 2323.0], [18.0, 2273.0], [19.0, 749.75], [20.0, 19800.222222222223], [21.0, 2155.0], [22.0, 2143.0], [23.0, 2918.0], [24.0, 2114.0], [25.0, 2103.0], [26.0, 2869.0], [27.0, 2071.0], [28.0, 2843.0], [29.0, 2048.0], [30.0, 2384.5], [31.0, 2686.0], [32.0, 2605.0], [34.0, 24742.5], [36.0, 2527.0], [44.0, 2416.4444444444443], [49.0, 2116.0], [50.0, 2601.3333333333335], [52.0, 24766.0], [59.0, 3268.5], [58.0, 3268.0], [63.0, 3269.0], [62.0, 3269.0], [66.0, 3429.2], [65.0, 3269.0], [69.0, 3909.5], [68.0, 3612.142857142857], [72.0, 24733.0], [75.0, 24654.0], [78.0, 3043.2777777777774], [77.0, 3043.0], [83.0, 3880.25], [82.0, 2802.777777777778], [81.0, 2264.0], [86.0, 3879.6666666666665], [89.0, 3286.0], [88.0, 4348.727272727272], [94.0, 3285.3846153846157], [92.0, 3285.3636363636365], [98.0, 2484.0], [96.0, 2484.1428571428573], [102.0, 3987.909090909091], [101.0, 3311.166666666667], [100.0, 2759.0], [106.0, 3578.166061406399], [105.0, 3077.763157894737], [104.0, 4040.423076923077], [112.0, 4292.011904761905], [119.0, 3739.0], [118.0, 4114.270676691733], [123.0, 4530.835227272726], [120.0, 3739.0], [125.0, 4221.731092436976], [131.0, 7314.458333333332], [130.0, 6724.0], [143.0, 6171.0], [142.0, 6171.666666666667], [141.0, 6171.0], [140.0, 6171.0], [148.0, 6476.414893617019], [146.0, 6171.0], [145.0, 6171.5], [144.0, 6171.0], [164.0, 5801.666666666667], [162.0, 5801.0], [175.0, 5801.0], [174.0, 5800.666666666667], [172.0, 5801.0], [170.0, 5800.555555555556], [168.0, 5801.0], [179.0, 6131.755555555553], [178.0, 5803.444444444443], [177.0, 5800.2], [199.0, 3634.0], [207.0, 3629.5], [206.0, 3626.0], [205.0, 3627.0], [203.0, 3623.0], [201.0, 3645.5], [200.0, 3634.3333333333335], [209.0, 3367.642105263159], [1.0, 983.0]], "isOverall": false, "label": "conf #3 req", "isController": false}, {"data": [[114.24007893005897, 3885.8427976320972]], "isOverall": false, "label": "conf #3 req-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 209.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.0, "minX": 1.71317556E12, "maxY": 6930.0, "series": [{"data": [[1.71317562E12, 6020.983333333334], [1.71317568E12, 6930.0], [1.71317574E12, 4581.5], [1.71317556E12, 30.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71317562E12, 4298.25], [1.71317568E12, 4950.0], [1.71317574E12, 3272.5], [1.71317556E12, 22.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71317574E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 533.875, "minX": 1.71317556E12, "maxY": 4578.813819577742, "series": [{"data": [[1.71317562E12, 4578.813819577742], [1.71317568E12, 3562.485555555554], [1.71317574E12, 3487.3092436974775], [1.71317556E12, 533.875]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71317574E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 530.125, "minX": 1.71317556E12, "maxY": 4578.767754318616, "series": [{"data": [[1.71317562E12, 4578.767754318616], [1.71317568E12, 3562.467222222224], [1.71317574E12, 3487.2974789915947], [1.71317556E12, 530.125]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71317574E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06470588235294113, "minX": 1.71317556E12, "maxY": 20.5, "series": [{"data": [[1.71317562E12, 0.19321817018554044], [1.71317568E12, 0.08444444444444456], [1.71317574E12, 0.06470588235294113], [1.71317556E12, 20.5]], "isOverall": false, "label": "conf #3 req", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71317574E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 506.0, "minX": 1.71317556E12, "maxY": 25079.0, "series": [{"data": [[1.71317562E12, 25079.0], [1.71317568E12, 5138.0], [1.71317574E12, 5046.0], [1.71317556E12, 547.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71317562E12, 6504.9], [1.71317568E12, 4187.0], [1.71317574E12, 4173.0], [1.71317556E12, 547.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71317562E12, 10269.0], [1.71317568E12, 5057.0], [1.71317574E12, 5040.0], [1.71317556E12, 547.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71317562E12, 7417.0], [1.71317568E12, 5020.5999999999985], [1.71317574E12, 5027.0], [1.71317556E12, 547.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71317562E12, 521.0], [1.71317568E12, 2453.0], [1.71317574E12, 983.0], [1.71317556E12, 506.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71317562E12, 4011.0], [1.71317568E12, 3401.0], [1.71317574E12, 3388.0], [1.71317556E12, 547.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71317574E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 547.0, "minX": 1.0, "maxY": 13902.5, "series": [{"data": [[32.0, 4012.0], [35.0, 6066.5], [34.0, 4430.5], [38.0, 3880.5], [44.0, 5127.5], [45.0, 4383.0], [49.0, 4152.0], [50.0, 4289.0], [52.0, 4383.0], [53.0, 3269.0], [55.0, 6211.5], [58.0, 5677.0], [60.0, 3011.0], [62.0, 4658.0], [75.0, 3390.0], [73.0, 3286.0], [5.0, 2590.0], [6.0, 4260.0], [118.0, 5806.0], [8.0, 547.0], [186.0, 3650.0], [12.0, 13902.5], [1.0, 3774.0], [17.0, 3066.5], [19.0, 3043.0], [23.0, 3536.0], [25.0, 3670.0], [26.0, 3389.0], [27.0, 5357.0], [28.0, 3314.0], [29.0, 4322.0], [30.0, 5000.0], [31.0, 2016.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 4012.0], [35.0, 6171.0], [38.0, 3896.0], [186.0, 3624.0], [50.0, 6722.0], [118.0, 5801.0], [29.0, 4322.0], [30.0, 4865.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 186.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 542.0, "minX": 1.0, "maxY": 13902.5, "series": [{"data": [[32.0, 4012.0], [35.0, 6066.5], [34.0, 4430.0], [38.0, 3880.5], [44.0, 5127.5], [45.0, 4383.0], [49.0, 4152.0], [50.0, 4289.0], [52.0, 4382.5], [53.0, 3269.0], [55.0, 6211.5], [58.0, 5677.0], [60.0, 3011.0], [62.0, 4658.0], [75.0, 3390.0], [73.0, 3286.0], [5.0, 2590.0], [6.0, 4260.0], [118.0, 5806.0], [8.0, 542.0], [186.0, 3650.0], [12.0, 13902.5], [1.0, 3774.0], [17.0, 3066.5], [19.0, 3043.0], [23.0, 3536.0], [25.0, 3670.0], [26.0, 3389.0], [27.0, 5357.0], [28.0, 3314.0], [29.0, 4322.0], [30.0, 5000.0], [31.0, 2016.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 4012.0], [35.0, 6171.0], [38.0, 3896.0], [186.0, 3624.0], [50.0, 6722.0], [118.0, 5800.0], [29.0, 4322.0], [30.0, 4865.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 186.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.71317556E12, "maxY": 30.0, "series": [{"data": [[1.71317562E12, 27.616666666666667], [1.71317568E12, 30.0], [1.71317574E12, 18.066666666666666], [1.71317556E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71317574E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71317556E12, "maxY": 30.0, "series": [{"data": [[1.71317562E12, 24.333333333333332], [1.71317568E12, 30.0], [1.71317574E12, 19.833333333333332], [1.71317556E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.71317562E12, 1.7166666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71317574E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71317556E12, "maxY": 30.0, "series": [{"data": [[1.71317562E12, 1.7166666666666666]], "isOverall": false, "label": "conf #3 req-failure", "isController": false}, {"data": [[1.71317562E12, 24.333333333333332], [1.71317568E12, 30.0], [1.71317574E12, 19.833333333333332], [1.71317556E12, 0.13333333333333333]], "isOverall": false, "label": "conf #3 req-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71317574E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.71317556E12, "maxY": 30.0, "series": [{"data": [[1.71317562E12, 24.333333333333332], [1.71317568E12, 30.0], [1.71317574E12, 19.833333333333332], [1.71317556E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.71317562E12, 1.7166666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71317574E12, "title": "Total Transactions Per Second"}},
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

