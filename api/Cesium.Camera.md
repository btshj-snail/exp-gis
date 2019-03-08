# Camera

> new Cesium.Camera(scene)
相机由位置、方向和视图截锥定义。

方向形成了一个具有视图的正交基，向上和向右=视图x向上单位向量。

视锥由6个平面定义。每个平面由cartesian4对象表示，其中x、y和z组件定义垂直于平面的单位向量，w组件是平面与原点/相机位置之间的距离

名称|类型|描述
:-|:-|:-
scene | Scene | 场景

## 属性


## 方法

> zoomIn(amount)

沿相机的视图向量缩放数量

名称|类型|描述
:-|:-|:-
amount | Number | **可选** 要移动的多少。默认为DefaultZoomAmount。

> zoomOut(amount)

沿相机视图向量的相反方向缩放数量。

名称|类型|描述
:-|:-|:-
amount | Number | **可选** 要移动的多少。默认为DefaultZoomAmount。


