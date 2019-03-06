# TimeIntervalCollection

> new Cesium.TimeIntervalCollection(intervals)

按开始时间排序的TimeInterval实例的非重叠集合。

名称|类型|描述
:-|:-|:-
intervals | Array.<TimeInterval> | *可选* TimeInterval实例数组添加到该集合中


## 属性

> **readonly** changedEvent : Event 
获取在间隔集合更改时引发的事件。

> **readonly** isEmpty : Boolean 
获取集合是否为空。

> **readonly** isStartIncluded : Boolean 
获取集合中是否包含开始时间。

> **readonly** isStopIncluded : Boolean 
获取集合中是否包含结束时间。

> **readonly** length : Number 
获取集合长度

> **readonly** start : JulianDate 
获取集合开始时间

> **readonl** stop : JulianDate
获取集合结束时间

## 方法