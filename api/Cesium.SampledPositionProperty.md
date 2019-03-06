# SampledPositionProperty

一个SampledPositionProperty实例也是一个PositionProperty实例.

名称|类型|默认值|描述
:-|:-|:-|:-
referenceFrame | ReferenceFrame |ReferenceFrame.FIXED | *可选* 定位所使用的坐标系
numberOfDerivatives | Number | 0 | *可选* 伴随每个位置的导数的数目.比如,即速度、加速度等。


## 属性


## 方法

> addSample(time, position, derivatives)

增加新的采样点.

名称|类型|描述
:-|:-|:-
time | JulianDate | 采样时间
position | Cartesian3 | 三维笛卡尔坐标点
derivatives | Array.<Cartesian3> | 0.0 | *可选* 在提供的时间内派生值的数组。

---

> addSamples(times, positions, derivatives)

增加多个新的采样点.

名称|类型|描述
:-|:-|:-
times |  Array.<JulianDate> | 采样时间 数组
position |  Array.<Cartesian3>
 | 三维笛卡尔坐标点 数组
derivatives | Array.<Cartesian3> | 0.0 | *可选* 在提供的时间内派生值的数组。

