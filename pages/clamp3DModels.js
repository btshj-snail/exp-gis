/*
 * @Author: snail 
 * @Date: 2019-03-12 15:08:51 
 * @Last Modified by: snail
 * @Last Modified time: 2019-03-12 17:00:28
 * 这个例子和官网的clamp to 3D model 是一样的....只不过在updatePosition里面有变化...
 * 我们的经纬度是degrees为单位,而官网则是以radians为单位
 * 因此updatePosition略有不同...
 * 因此一定要注意单位的转换.
 * 
 * 
 * 
 * 但是这个方法,最重要的扫描高度,并没有看出来.不知道什么地方出问题了.height一直都是undefined...官网也是一样.
 * 哈哈知道问题了....原来是浏览器版本低了...HOHO..Cesium也不提示下,真是的...
 */
var viewer = null;
var objectsToExclude = [];
var cartographic = new Cesium.Cartographic();
var longitude = 104.0671;
var latitude = 30.53803;
var range = 0.00006;
var duration = 10.0;
var point = null;
var pageOper = {
  updatePosition: function(time, result) {
    var offset = (time.secondsOfDay % duration) / duration;
    // return result
    var _longitude = longitude - range + offset * range * 2.0;
    var _latitude = latitude;
    var _cartogrphic = Cesium.Cartographic.fromDegrees(_longitude, _latitude);

    var height;
    if (viewer.scene.sampleHeightSupported) {
      height = viewer.scene.sampleHeight(_cartogrphic, objectsToExclude);
    }
    if (Cesium.defined(height)) {
        _cartogrphic.height = height;
      point.label.text = Math.abs(height).toFixed(2).toString() + "m";
      point.label.show = true;
    } else {
        _cartogrphic.height = 0.0;
      point.label.show = false;
    }
    result = viewer.scene.globe.ellipsoid.cartographicToCartesian(_cartogrphic);
    return result;
  }
};

var pageInit = {
  initGis: function() {
    viewer = new Cesium.Viewer("cesiumContainer", {
      geocoder: false,
      infoBox: false,
      navigationHelpButton: false,
      selectionIndicator: false,
      shadows: false,
      shouldAnimate: true,
      baseLayerPicker: false
    });

    viewer.scene.globe.enableLighting = true;
    viewer.scene.globe.depthTestAgainstTerrain = true;
    if (!viewer.scene.sampleHeightSupported) {
      console.log("this browser does not support sampleHeight");
    }

    viewer.imageryLayers.remove(viewer.imageryLayers.get(0));
    viewer.imageryLayers.addImageryProvider(
      new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}",
        tillingScheme: new Cesium.WebMercatorTilingScheme()
      })
    );
  },
  initModel: function() {
    var position = Cesium.Cartesian3.fromDegrees(longitude, latitude,0);
    var entity = viewer.entities.add({
      position: position,
      model: {
        uri: "../data/models/GroundVehicle/GroundVehicle.glb"
      }
    });
    viewer.trackedEntity = entity;
  },
  initPoint: function() {
    var position = Cesium.Cartesian3.fromDegrees(longitude, latitude);
    point = viewer.entities.add({
      position: new Cesium.CallbackProperty(pageOper.updatePosition, false),
      point: {
        pixelSize: 10,
        color: Cesium.Color.YELLOW,
        disableDepthTestDistance : Number.POSITIVE_INFINITY
      },
      label: {
        show: false,
        showBackground: true,
        font: "14px monospace",
        horizontalorigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.TOP,
        pixelOffset: new Cesium.Cartesian3(5, 5),
        disableDepthTestDistance : Number.POSITIVE_INFINITY
      }
    });
    objectsToExclude.push(point);
  }
};

window.onload = function() {
  pageInit.initGis();
  pageInit.initModel();
  pageInit.initPoint();
};
