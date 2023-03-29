// importScripts("./bmap.js");
// this.addEventListener("message", function(res) {

//     setInterval((e) => {
//         // this.postMessage(navigator.geolocation);
//         // // 检测浏览器是否支持定位API
//         // if (navigator.geolocation) {
//         //     // getCurrentPosition获取当前位置的坐标值
//         //     navigator.geolocation.getCurrentPosition(function(position) {
//         //         // 纬度
//         //         var latitude = position.coords.latitude;
//         //         // 经度
//         //         var longtude = position.coords.longitude;
//         //         // 把经纬度传给百度
//         //         var point = new BMap.point(longtude, latitude);
//         //         // 坐标转换
//         //         var convertor = new BMap.Convertor();
//         //         var pointArr = [];
//         //         pointArr.push(point);
//         //         convertor.translate(point, 1, 5, translateCallback);
//         //         // 坐标转换后的回调函数
//         //         function translateCallback(data) {
//         //             if (data.status === 0) {
//         //                 // 发送给主线程或者存到数据库
//         //                 this.postMessage(data.points[0]);
//         //             }
//         //         }
//         //     }, function(err) {
//         //         console.log(err);
//         //     })
//         // }


//         var bmap = res.data;
//         bmap.getCurrentPosition(function(r) {
//             if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//                 this.postMessage(r.point.lng + "," + r.point.lat);
//             }
//         })



//         // var geolocation = res.data;
//         // geolocation.getCurrentPosition(function(r) {
//         //     if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//         //         this.postMessage(r.point.lng + "," + r.point.lat);
//         //     }
//         // })



//     }, 3000)
// })

console.log(self)
importScripts('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=wzlFnFRGKwjZ18GwfmM1Y7yqbwTHQakq');

// self为DedicatedWorkerGlobalScope对象（专用 workers），也可写作this或省略
// 监听接收主进程信息
// self.onmessage = (e) => console.log(`接收到主进程发送的信息：${e.data}`);
// // 发送信息到主进程
// self.postMessage('我是子线程信息');

self.onmessage = (e) => {
    console.log(`接收到主进程发送的信息：${e.data}`);
    var geolocation = new BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(r){
        console.log(r.point);
    });
}
// 发送信息到主进程
self.postMessage('我是子线程信息');


// var geolocation = new BMapGL.Geolocation();
//         geolocation.getCurrentPosition(function(r){
//             console.log(r.point);
//         });