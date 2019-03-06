# VelocityOrientationProperty

> new Cesium.VelocityOrientationProperty(options)

基于提供的PositionProperty的速度来确定Quaternion旋转属性.
名称|类型|默认值|描述
:-|:-|:-|:-
position | Property | |*可选* 用于计算方向的位置信息
ellipsoid | Ellipsoid | Ellipsoid.WGS84 |*可选* 用于确定向上方向的椭圆体。