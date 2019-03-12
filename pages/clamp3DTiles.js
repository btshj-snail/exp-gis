
var viewer = null,entity =null;
var pageOper = {
    setView:function(){
        viewer.camera.setView({
            destination: new Cesium.Cartesian3(1216403.8845586285, -4736357.493351395, 4081299.715698949),
            orientation: new Cesium.HeadingPitchRoll(4.2892217081808806, -0.4799070147502502, 6.279789177843313),
            endTransform : Cesium.Matrix4.IDENTITY
        });
    },
    start:function(){
        viewer.clock.shouldAnimate = true;
        var objectsToExclude = [entity];
        viewer.scene.postRender.addEventListener(function(){
            var position = positionProperty.getValue(viewer.clock.currentTime);
            entity.position = viewer.scene.clampToHeight(position,objectsToExclude);
        })
    }
}


var pageInit = {
    initGis: function () {
        viewer = new Cesium.Viewer('cesiumContainer', {
            geocoder: false,
            infoBox: false,
            navigationHelpButton: false,
            selectionIndicator: false,
            shadows: false,
            shouldAnimate: true,
            baseLayerPicker: false,
            terrainProvider : Cesium.createWorldTerrain()
        })

        viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
        viewer.imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                url: "http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}",
                tillingScheme: new Cesium.WebMercatorTilingScheme()
            })
        )
    },
    initModel:function(){
        var dataSourcePromise = Cesium.CzmlDataSource.load('../data/ClampToGround.czml');
        viewer.dataSources.add(dataSourcePromise).then(function(data){
            entity = data.entities.getById('CesiumMilkTruck');
            positionProperty = entity.position;
        })
    },
    initTiles:function(){
        var tileset = viewer.scene.primitives.add(
            new Cesium.Cesium3DTileset({url:Cesium.IonResource.fromAssetId(6074)})
        )

        if (viewer.scene.clampToHeightSupported) {
            tileset.initialTilesLoaded.addEventListener(pageOper.start);
        } else {
            console.log('This browser does not support clampToHeight.');
        }
    }
}


window.onload = function () {
    pageInit.initGis();
    pageInit.initModel();
    pageInit.initTiles();
    pageOper.setView();
}