# Cartographic

> new Cesium.Cartographic(longitude,latitude,height)

由经度,维度,高度定义的位置

名称|类型|默认|描述
:-|:-|:-|:-
longitude | Number |0.0|*可选* 经度值,弧度
latitude | Number |0.0|*可选* 纬度值,弧度
height | Number | 0.0 | *可选* 离椭圆球体的高度,单位为m


## 属性


## 方法

> ***static*** Cesium.Cartographic.toCartesian(cartographic, ellipsoid, result) → Cartesian3

从cartographic实例提取数据,创建一个新的Cartesian3实例.输入的值应该以弧度为单位.

名称|类型|默认值|描述
:-|:-|:-|:-
cartographic | Cartographic	 | 要转换为cartesian3输出的输入。
ellipsoid | Ellipsoid | Ellipsoid.WGS84|*可选* 位置所在的椭球体。
result | Cartesian3 | |*可选* 结果

**返回**

位置信息