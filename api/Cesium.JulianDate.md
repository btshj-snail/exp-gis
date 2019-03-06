# JulianDate

> new Cesium.JulianDate(julianDayNumber, secondsOfDay, timeStandard)

Represents an astronomical Julian date, which is the number of days since noon on January 1, -4712 (4713 BC). For increased precision, this class stores the whole number part of the date and the seconds part of the date in separate components. In order to be safe for arithmetic and represent leap seconds, the date is always stored in the International Atomic Time standard TimeStandard.TAI.

名称|类型|默认值|描述
:-|:-|:-|:-
julianDayNumber | Number | 0.0 | optional The Julian Day Number representing the number of whole days. Fractional days will also be handled correctly.
secondsOfDay | Number | 0.0 | optional The number of seconds into the current Julian Day Number. Fractional seconds, negative seconds and seconds greater than a day will be handled correctly.
timeStandard | TimeStandard | TimeStandard.UTC | optional The time standard in which the first two parameters are defined.

## 属性


## 方法

> ***static*** Cesium.JulianDate.addSeconds(julianDate, seconds, result) → JulianDate

向提供的日期实例添加提供的秒数.

名称|类型|描述
:-|:-|:-
julianDate | JulianDate | JulianDate实例
seconds | Number | 加或减的秒数.
result | JulianDate | 将结果设置于该实例中

**返回**

修改后的result参数的julianDate实例

---

> ***static*** Cesium.JulianDate.fromDate(date, result) → JulianDate

向提供的日期实例添加提供的秒数.

名称|类型|描述
:-|:-|:-
date | Date | javaScript Date 实例
result | JulianDate | 将结果设置于该实例中

**返回**

修改后的result参数的julianDate实例.如果没有提供result参数,那么会返回一个新初始化的JulianDate用于承载结果,并且返回该实例.

---

> ***static*** Cesium.JulianDate.clone(julianDate, result) → JulianDate

复制Juliandate实例。

名称|类型|描述
:-|:-|:-
julianDate | JulianDate | 将要复制的JulianDate实例
result | JulianDate | *option* JulianDate实例,用于承载结果

**返回**

修改后的result参数或新实例（如果未提供result参数）。如果julianDate未定义(将要克隆的实例)，则返回undefined。