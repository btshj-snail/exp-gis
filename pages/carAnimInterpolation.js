var pathAry = [[104.0671, 30.53813, 0],
[104.0671, 30.5384, 0],
[104.06707, 30.53943, 0],
[104.06703, 30.54041, 0],
[104.06693, 30.54341, 0],
[104.0669, 30.54489, 0],
[104.06329, 30.54489, 0],
[104.06086, 30.54489, 0],
[104.06076, 30.5449, 0],
[104.06032, 30.5443, 0],
[104.05948, 30.54322, 0],
[104.05906, 30.54263, 0],
[104.05906, 30.54263, 0],
[104.05881, 30.54217, 0],
[104.05842, 30.54138, 0],
[104.05804, 30.54056, 0],
[104.05801, 30.54036, 0],
[104.06033, 30.54037, 0],
[104.06089, 30.54012, 0],
[104.06198, 30.53944, 0],
[104.06295, 30.53877, 0],
[104.06431, 30.53799, 0],
[104.06588, 30.53798, 0],
[104.06682, 30.53806, 0],]
var pageOper = {
    generatePath:function(start,stop){
        var property = new Cesium.SampledPositionProperty();
        pathAry.forEach(function(item,i){
            var time = Cesium.JulianDate.addSeconds(start,i*3,new Cesium.JulianDate());
            var position = Cesium.Cartesian3.fromDegrees(item[0],item[1],item[2]);
            property.addSample(time,position);
            viewer.entities.add({
                position:position,
                point:{
                    pixelSize:8,
                    color:Cesium.Color.TRANSPARENT,
                    outlineColor:Cesium.Color.RED,
                    outlineWidth:3
                }
            })
        })
        return property;
    },
    createCarModel:function(start,stop){
        viewer.entities.removeAll();
        var position = pageOper.generatePath(start,stop);
        // var hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(135), 0, 0);
        var entity = viewer.entities.add({
            availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start : start,
                stop : stop
            })]),
            position : position,
            orientation :new Cesium.VelocityOrientationProperty(position),
            model: {
                uri: "../data/models/CesiumMilkTruck/CesiumMilkTruck-kmc.glb",
                minimumPixelSize: 32,
                // maximumScale: 20000,
            },
            path : {
                resolution : 1,
                material : new Cesium.PolylineGlowMaterialProperty({
                    glowPower : 0.1,
                    color : Cesium.Color.YELLOW
                }),
                width : 2
            }
            
        })
        
        // viewer.trackedEntity = entity;
        viewer.zoomTo(viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)));
        //todo
        entity.position.setInterpolationOptions({
            interpolationDegree : 1,
            interpolationAlgorithm : Cesium.LinearApproximation
        });
    },
    startAnim:function(){
        //Set the random number seed for consistent results.
        Cesium.Math.setRandomNumberSeed(3);

        //Set bounds of our simulation time
        var start = Cesium.JulianDate.fromDate(new Date());
        var stop = Cesium.JulianDate.addSeconds(start, pathAry.length*3, new Cesium.JulianDate());

        //确保视图是在所设置的时间内
        viewer.clock.startTime = start.clone();
        viewer.clock.stopTime = stop.clone();
        viewer.clock.currentTime = start.clone();
        viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
        viewer.clock.multiplier = 10; //不太理解这个是干什么的.............

        //Set timeline to simulation bounds
        viewer.timeline.zoomTo(start, stop);    
        pageOper.createCarModel(start,stop);
    }
}
var initPage = {
    initGis:function(){
        viewer = new Cesium.Viewer('cesiumContainer',{
            infoBox:false,
            selectionIndicator:false,
            shadows:false,
            shouldAnimate:true,
            baseLayerPicker:false
        });

        //开启现实光照模式
        viewer.scene.globe.enableLighting = true;

        //Enable depth testing so things behind the terrain disappear.
        viewer.scene.globe.depthTestAgainstTerrain = true;

        


        viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
        viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
            url: 'http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
            tillingScheme: new Cesium.WebMercatorTilingScheme()
        }))

    },
    
    
}


window.onload = function () {
    initPage.initGis();
    pageOper.startAnim();
  
}