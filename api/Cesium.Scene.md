# Scene

> new Cesium.Scene(options)

Cesium 虚拟场景中所有三维图形对象和状态的容器.通常,一个场景是不会被直接创建的,而是由 CesiumWidget 隐式创建的.

ContextOptions 参数详解:

默认值为:

```javaScript
{ webgl:{
            alpha : false,
            depth : true,
            stencil : false,
            antialias : true,
            premultipliedAlpha : true,
            preserveDrawingBuffer : false,
            failIfMajorPerformanceCaveat : false
        },
    allowTextureFilterAnisotropic : true
    }
```

webgl属性对应用于创建WebGL上下文的WebGLContextAttributes

webgl的alpha默认为false，与标准的webgl默认值true相比，它可以提高性能。如果应用程序需要使用alpha-blending,将Cesium混合在其他HTML元素之上，请将webgl.alpha设置为true。

其他的webgl属性值和WebGLContextAttributes一致.

allowTextureFilterAnisotropic默认为true，在支持WebGL扩展时启用各向异性纹理过滤。将此设置为“false”将提高性能，但会损害视觉质量，尤其是对于地平线视图。


名称|类型|描述
:-|:-|:-
option | Object | **可选** 下面单独介绍option的属性.

option属性

名称|类型|默认|描述
:-|:-|:-|:-
canvas | Canvas | |场景创建在html的canvas元素上.
contextOptions|Object||**可选** webGl的上下文属性值设置.详情见上面的描述.
creditContainer|Element||**可选** 显示信任网站名称的HTML元素。
creditViewport|Element||**可选** 显示信任网站名称弹出窗口的HTML元素。如果未指定，则视区将作为画布的同级添加。
mapProjection|MapProjection|new GeographicProjection()|**可选** 要在二维和哥伦布视图模式中使用的地图投影。
orderIndependentTranslucency|Boolean|true|**可选** 如果为true，并且配置支持它，则使用与顺序无关的半透明.
scene3DOnly|Boolean|false|**可选** 如果为真，则优化3D模式的内存使用和性能，但禁用使用二维或哥伦布视图的功能。
terrainExaggeration|Number|1.0|**可选**用于放大地形的标量。请注意，地形放大不会修改任何其primitive，因为它们是相对于椭球体定位的。
shadows|Boolean|false|**可选**确定阴影是否由太阳投射。
mapMode2D|MapMode2D|MapMode2D.INFINITE_SCROLL|**可选**确定二维地图是可旋转的还是可以沿水平方向无限滚动。
requestRenderMode|Boolean|false|**可选**如果为“true”，则仅在场景中的发生变化,决定需要时才会渲染帧。这会提升系统性能,但是在这个模式下,必须明确使用Scene#requestRender来渲染新帧.在许多情况下，必须在对API其他部分中的场景进行更改之后。
maximumRenderTimeChange|Number|0.0|如果requestRenderMode为true,那么该值是限定最多改变多少次,就必须进行渲染.


## 属性


## 方法

> sampleHeight(position, objectsToExclude, width) → Number

返回场景中给定制图位置处的几何体高度,如果没有要采样的场景几何体，则返回undefined.输入位置的高度被忽略。可用于将放置对象到场景中的globe、3D Tiles或primitives体上。
此函数仅对当前视图中渲染的globe tiles 和3D Tiles的高度进行采样。从所有其他primitives采样高度，而不考虑它们的可见性。

名称|类型|默认值|描述
:-|:-|:-|:-
position | Cartographic |要从中采样高度的地图位置。
objectsToExclude | Object | **可选** 不从中采样高度的 primitives、实体或3D Tiles 列表。
width|Number|0.1|**可选** 相交体的宽度,以米为单位。

**返回**

高度。如果没有要从中采样高度的场景几何图形，则返回undefined。

