# Cartesian3

> new Cesium.Cartesian3(x, y, z)

三维笛卡尔点。

名称|类型|默认值|描述
:-|:-|:-|:-
x | Number |0.0| *可选* X 分量
y | Number | 0.0 | *可选* Y 分量
z | Number | 0.0 | *可选* Z 分量


## 属性

> ***static*** Cesium.Cartesian3.fromDegrees(longitude, latitude, height, ellipsoid, result) → Cartesian3

根据以度为单位的经纬度值得到一个三维笛卡尔坐标位置.

名称|类型|默认值|描述
:-|:-|:-|:-
longitude | Number |0.0| 以度为单位的经度值
latitude | Number | 0.0 | 以度为单位的维度值
height | Number | 0.0 | *可选* 地平面以上的高度,以米为单位
ellipsoid | Ellipsoid |Ellipsoid.WGS84|*可选* 位置所在的椭球体。
result|Cartesian3||*可选* 结果所存储的对象

**返回**

位置信息

