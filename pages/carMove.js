/*
 * @Author: snail 
 * @Date: 2019-03-08 10:22:09 
 * @Last Modified by: snail
 * @Last Modified time: 2019-03-08 10:28:23
 * 这是前两个界面的升级版.并且通过对前两个界面的理解,将代码功能划分的更为清楚.
 * 1.相机定位到指定区域.
 * 2.路线绘画
 * 3.缩放时,对各种实体显示/移除的逻辑处理.
 * 
 * 疑问:
 *  不知道什么原因,描出来的路径,总是断断续续的,不知道什么缘故..
 */
var viewer = null,
    carEntity = null,
    roadEntities = [];
//[longitdue,latitude,height,sampledTime]
var pathAry = [
    [104.0671, 30.53813, 0, 0],
    [104.0671, 30.5384, 0, 15],
    [104.06707, 30.53943, 0, 15],
    [104.06703, 30.54041, 0, 15],
    [104.06693, 30.54341, 0, 6],
    [104.0669, 30.54489, 0, 6],
    [104.06329, 30.54489, 0, 6],
    [104.06086, 30.54489, 0, 6],
    [104.06076, 30.5449, 0, 3],
    [104.06032, 30.5443, 0, 3],
    [104.05948, 30.54322, 0, 3],
    [104.05906, 30.54263, 0, 3],
    [104.05906, 30.54263, 0, 3],
    [104.05881, 30.54217, 0, 3],
    [104.05842, 30.54138, 0, 3],
    [104.05804, 30.54056, 0, 3],
    [104.05801, 30.54036, 0, 3],
    [104.06033, 30.54037, 0, 3],
    [104.06089, 30.54012, 0, 3],
    [104.06198, 30.53944, 0, 3],
    [104.06295, 30.53877, 0, 3],
    [104.06431, 30.53799, 0, 3],
    [104.06588, 30.53798, 0, 3],
    [104.06682, 30.53806, 0, 3],
    [104.0671, 30.53813, 0, 3]
]
var pageOper = {
    /**
     * 展示道路线条
     */
    showRoadLine() {
        if (roadEntities.length > 0) return;
        var _rrNum = 3,
            _ryNum = 3;
        var roadRed = [],
            roadYellow = [],
            roadGreen = [];
        pathAry.forEach(function (item, index) {
            var cartesian = Cesium.Cartesian3.fromDegrees(item[0], item[1], item[2])
            if (index <= _rrNum) {
                roadRed.push(cartesian);
            }
            if (index >= _rrNum && index <= _rrNum + _ryNum) {
                roadYellow.push(cartesian)
            }
            if (index >= _rrNum + _ryNum) {
                roadGreen.push(cartesian)
            }
            // viewer.entities.add({
            //     position :cartesian,
            //     point : {
            //         pixelSize:8,
            //         color:Cesium.Color.TRANSPARENT,
            //         outlineColor:Cesium.Color.WHITE,
            //         outlineWidth:3
            //     },
            //     label:{text:index+"",fillColor:Cesium.Color.RED,pixelOffset:new Cesium.Cartesian2(15, 15)}
            // })

        })

        var lineWidth = 5
        var redLine = viewer.entities.add({
            polyline: {
                positions: roadRed,
                width: lineWidth,
                material: Cesium.Color.RED
            }
        });
        var yellowLine = viewer.entities.add({
            polyline: {
                positions: roadYellow,
                width: lineWidth,
                material: Cesium.Color.YELLOW
            }
        });
        var greenLine = viewer.entities.add({
            polyline: {
                positions: roadGreen,
                width: lineWidth,
                material: Cesium.Color.GREEN
            }
        });
        roadEntities = [redLine, yellowLine, greenLine]
    },
    /**
     * 移除道路线条
     */
    removeRoadLine() {
        if (roadEntities.length > 0) {
            roadEntities.forEach(function (item) {
                viewer.entities.remove(item);
            })
            roadEntities = [];
        }
    },
    /**
     * 创建车辆模型
     */
    createCarModel: function () {
        if (carEntity) return;
        carEntity = viewer.entities.add({
            name: "car",
            model: {
                uri: "../data/models/CesiumMilkTruck/CesiumMilkTruck-kmc.glb",
                maximumScale: 1,
            }
        })
    },
    /**
     * 车辆运动
     */
    carMove: function () {
        if (!carEntity) return;
        var start = Cesium.JulianDate.fromDate(new Date());
        var totalTime = 0;
        pathAry.forEach(function (item) {
            totalTime += item[3]
        })
        var stop = Cesium.JulianDate.addSeconds(start, totalTime, new Cesium.JulianDate());

        viewer.clock.startTime = start.clone();
        viewer.clock.stopTime = stop.clone();
        viewer.clock.currentTime = start.clone();
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
        viewer.timeline.zoomTo(start, stop);

        var property = pageOper.getCarMovePath(start);

        carEntity.availability = new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
            start: start,
            stop: stop
        })])
        carEntity.position = property;
        carEntity.orientation = new Cesium.VelocityOrientationProperty(property);
    },

    getCarMovePath: function (start) {
        var property = new Cesium.SampledPositionProperty();
        var curTime = 0;
        pathAry.forEach(function (item, index) {
            curTime = curTime + item[3]
            var time = Cesium.JulianDate.addSeconds(start, curTime, new Cesium.JulianDate());
            var cartesian = Cesium.Cartesian3.fromDegrees(item[0], item[1], item[2]);
            property.addSample(time, cartesian);
        })
        return property;
    },
    /**
     * 展示车辆模型
     */
    showCarModels: function () {
        if (!carEntity) {
            pageOper.createCarModel();
            pageOper.carMove();
        }

    },
    /**
     * 移除车辆模型
     */
    removeCarModels: function () {
        if (carEntity) {
            viewer.entities.remove(carEntity);
        }
        carEntity = null;
    },
    showEntity(height) {
        if (height <= 300) {
            pageOper.showCarModels();
            // pageOper.removeRoadLine();
        } else if (height <= 14816) {
            pageOper.removeCarModels();
            pageOper.showRoadLine();
        } else {
            pageOper.removeRoadLine();
        }
    }
}

var pageInit = {
    /**
     * 初始化GIS
     */
    initGis: function () {
        viewer = new Cesium.Viewer('cesiumContainer', {
            geocoder: false,
            infoBox: false,
            navigationHelpButton: false,
            selectionIndicator: false,
            shadows: false,
            shouldAnimate: true,
            baseLayerPicker: false
        })

        viewer.scene.globe.enableLighting = true;
        viewer.scene.globe.depthTestAgainstTerrain = true;

        viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
        viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
            url: 'http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
            tillingScheme: new Cesium.WebMercatorTilingScheme()
        }));

        pageInit.initVisualBlock();
        pageInit.initGisEvent();
    },
    /**
     * 初始化可视化区域
     */
    initVisualBlock: function () {
        var west = Cesium.Math.toRadians(104.058);
        var south = Cesium.Math.toRadians(30.537);
        var east = Cesium.Math.toRadians(104.068);
        var north = Cesium.Math.toRadians(30.548);
        var rectangle = Cesium.Rectangle.fromRadians(west, south, east, north)
        viewer.camera.setView({
            destination: rectangle
        });
        var height = Math.ceil(viewer.camera.positionCartographic.height).toFixed(3);
        pageOper.showEntity(height)
    },
    /**
     * 注册GIS交互事件
     */
    initGisEvent: function () {
        var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function (movement) {
            var height = Math.ceil(viewer.camera.positionCartographic.height).toFixed(3);
            pageOper.showEntity(height);
        }, Cesium.ScreenSpaceEventType.WHEEL);


        handler.setInputAction(function (movement) {
            var ellipsoid = viewer.scene.globe.ellipsoid
            var cartesian = viewer.camera.pickEllipsoid(new Cesium.Cartesian2(movement.position.x, movement.position.y), ellipsoid);
            var height = Math.ceil(viewer.camera.positionCartographic.height).toFixed(3);
            if (cartesian) {
                //将笛卡尔坐标转换为地理坐标
                var cartographic = ellipsoid.cartesianToCartographic(cartesian);
                // 将弧度转为度的十进制度表示
                longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(3);
                latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(3);
                console.log('点击点位:' + longitudeString + ', ' + latitudeString + ',' + height);
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    },
}

window.onload = function () {
    pageInit.initGis();
}