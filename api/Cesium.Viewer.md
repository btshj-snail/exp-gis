# Viewer

用于构建应用程序的基本部件。它将所有标准Cesium部件组合成一个可重用的包。这个部件可以通过使用mixin进行扩展，mixin为各种应用程序添加了有用的功能。

> new Cesium.Viewer(container, options)

名称|类型|描述
:-|:-|:-
container | Element/String | 包含该组件的DOM对象或者html元素的ID
option | Object | **可选** 下面单独介绍option的属性.


option属性

名称|类型|默认值|描述
:-|:-|:-|:-
animation|Boolean|true|**可选** 如果设置false,animation部件将不会被创建,animation-显示时间,暂停/开始 运动额控件
baseLayerPicker|Boolean|true|**可选** 如果设置false,baseLayerPicker部件将不会被创建 .baseLayerPicker-选取图层的控件
fullscreenButton|Boolean|true|**可选** 如果设置false,全屏显示按钮 将不会被创建
vrButton|Boolean|false|**可选** 如果设置true,vr按钮控件将会创建
geocoder|Boolean/Array.<GeocoderService>|true|**可选** 如果设置false,geocoder部件将不会被创建. //没明白这是啥
homeButton|Boolean|true|**可选** 如果设置false,homeButton按钮 将不会被创建
infoBox|Boolean|true|**可选** 如果设置false,infoBox 将不会被创建
sceneModePicker|Boolean|true|**可选** 如果设置false,sceneModePicker将不会被创建
selectionIndicator|Boolean|true|**可选** 如果设置false,SelectionIndicator将不会被创建
timeline|Boolean|true|**可选** 如果设置false,timeline将不会被创建
navigationHelpButton|Boolean|true|**可选** 如果设置false,navigation将不会被创建
navigationInstructionsInitiallyVisible|Boolean|true|**可选** 如果导航指令最初应该可见，则为true；如果在用户明确单击按钮之前不应显示，则为false。
scene3DOnly|Boolean|false|**可选** 如果为true，则每个几何体实例将仅在3D中渲染以保存GPU内存。
shouldAnimate|Boolean|false|**可选** 如果为true，则每个几何体实例将仅在3D中渲染以保存GPU内存。

## 属性


## 方法

> zoomTo(target, offset) → Promise.<Boolean>
异步设置相机以查看提供的实体、实体集合或数据源。如果数据源仍在加载过程中，或者可视化仍在加载，则此方法在执行缩放之前等待数据准备就绪。

offset参数是以边界球中心为中心的本地东北向上参考帧中的方向/间距/范围。航向和俯仰角在本地东北向上参考框架中定义。航向是从Y轴到X轴的角度。螺距是从xy平面开始的旋转。正俯仰角在平面上方。负的螺距角在平面以下。范围是距中心的距离。如果范围为零，则计算范围以使整个边界球可见。

在2维中,必须有一个自顶向下的视图。相机将放在目标上方向下看。高于目标的高度将是范围。航向将根据偏移量确定。如果无法从偏移量确定航向，则航向将为北。

名称|类型|描述
:-|:-|:-
container |Entity/Array.<Entity>/EntityCollection/DataSource/ImageryLayer/Cesium3DTileset/TimeDynamicPointCloud/Promise.<(Entity/Array.<Entity>/EntityCollection/DataSource/ImageryLayer/Cesium3DTileset/TimeDynamicPointCloud)> | entity, array of entities, entity collection, data source, Cesium3DTileset, point cloud, or imagery layer to view. 也可以传递一个promise
offset| HeadingPitchRange | **可选** 从本地东北向上参照框中实体中心的偏移量

**返回**

返回一个promise对象,如果缩放成功,则解析为true,反之解析为false