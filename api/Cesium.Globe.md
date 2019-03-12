# Globe

> new Cesium.Globe(ellipsoid)

场景中渲染的球体，包括其地形（Globe#terrainProvider）和图像层（Globe#imageryLayers）。使用Scene#globe访问globe对象。

名称|类型|默认值|描述
:-|:-|:-|:-
ellipsoid | Ellipsoid |Ellipsoid.WGS84| **可选** 确定球体的大小和形状.


## 属性

> depthTestAgainstTerrain : Boolean

如果billboards, polylines, labels等primitives要针对地形表面进行深度测试，则为真；如果这些primitives应始终绘制在地形顶部，则为假，除非它们位于地球的另一侧。针对地形的深度测试primitives的缺点是，轻微的数字噪声或地形细节级别切换有时会使应该在表面上的primitives消失在其下面。