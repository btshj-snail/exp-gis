# TimeInterval

> new Cesium.TimeInterval(options)

由开始时间和停止时间定义的间隔；可以选择将这些时间作为间隔的一部分。使用TimeIntervalCollection可以将里面的每个TimeInterval实例与任意的数据联系在一起.

名称|类型|描述
:-|:-|:-
options | Object | *可选* 下面单独介绍option的属性.

option属性

名称|类型|默认|描述
:-|:-|:-|:-
start | JulianDate |new JulianDate()| **可选** 开始时间
stop | JulianDate |new JulianDate()| **可选** 结束时间
isStartIncluded | Boolean | true | **可选** 如果间隔中包含options.start，则为true，否则为false。
isStopIncluded | Boolean | true | **可选** 如果间隔中包含options.stop，则为true，否则为false。
data|Object|与之关联的任意数据

