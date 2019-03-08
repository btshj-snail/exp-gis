var viewer = null;

var pageOper = {
    updatePosition:function(time,result){
        var offset = (time.secondsOfDay % duration) / duration;
        cartographic
    }
}

var pageInit = {
    initGis:function(){
        viewer = new Cesium.Viewer('cesiumContainer',{
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
        if(!viewer.scene.sampleHeightSupported){
            console.log('this browser does not support sampleHeight');
        }

        viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
        viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
            url: 'http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
            tillingScheme: new Cesium.WebMercatorTilingScheme()
        }))


    },
    initModel:function(){
        var position  = Cesium.Cartesian3.fromDegrees(104.0671, 30.53813);
        var entity = viewer.entities.add({
            position:new Cesium.CallbackProperty(pageOper.updatePosition,false),
            model:{
                uri:'../data/models/GroundVehicle/GroundVehicle.glb'
            }
        })
        viewer.trackedEntity = entity;
    }
}

window.onload = function(){
    pageInit.initGis();
    pageInit.initModel();
}