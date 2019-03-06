# HeadingPitchRange

> new Cesium.HeadingPitchRange(heading, pitch, range)

定义局部帧中的航向角、俯仰角和范围。航向是从正角度向东增加的局部北向旋转。螺距是从局部xy平面开始的旋转。正俯仰角在平面上方。负的螺距角在平面以下。范围是距框架中心的距离。

名称|类型|默认值|描述
:-|:-|:-|:-
heading | Number | 0.0 |*可选* 以弧度表示的航向角。
pitch | Number | 0.0 |*可选* 以弧度表示的俯仰角。
range | Number | 0.0 |*可选* 距中心的距离，单位为米。

## 属性

> heading : Number 
航向是从正角度向东增加的局部北向旋转。

> pitch : Number 
俯仰角是从局部xy平面开始的旋转。正俯仰角在平面上方。负的俯仰角在平面以下。

> range : Number 
范围是距本地帧中心的距离。

## 方法