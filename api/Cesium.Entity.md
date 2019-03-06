# Entity 

> new Cesium.Entity(options)

entity实例将多种形式的可视化聚合为单个高级对象。它们可以手动创建并添加到Viewer#entities中，也可以由数据源（如czmldatasource和geojsondatasource）生成。

名称|类型|描述
:-|:-|:-
option | Object | **可选** 下面单独介绍option的属性.


option属性

名称|类型|描述
:-|:-|:-
id | String | **可选** 此对象的唯一标识符。如果没有提供，将生成一个guid。
name|String|**可选** 显示给用户的可读名称。它不一定是独一无二的。
availability|TimeIntervalCollection|**可选**与此对象关联的可用性（如果有）。
show|Boolean|**可选**实体是否显示
description|Property|**可选**指定此实体的HTML描述的字符串属性。
position|PositionProperty|**可选**指定实体位置的属性。
orientation|Property|**可选**指定实体方向的属性。
viewFrom|Property|**可选**用于查看此对象的建议初始偏移量
parent|Entity	|**可选**实体关联的父实体。
billboard|BillboardGraphics|**可选**实体关联的BillboardGraphics实例
box|BoxGraphics|**可选**与此实体关联的信息框。
corridor|CorridorGraphics|**可选**要与此实体关联的CorridorGraphics实例。
cylinder|CylinderGraphics|**可选**要与此实体关联的CylinderGraphics实例。
ellipse|EllipseGraphics|**可选**要与此实体关联的EllipseGraphics实例。
ellipsoid|EllipsoidGraphics|**可选**要与此实体关联的EllipsoidGraphics实例。
label|LabelGraphics|**可选**文本信息
model|ModelGraphics|**可选**要与此实体关联的ModelGraphics实例。
path|PathGraphics|**可选**要与此实体关联的PathGraphics实例。
plane|PlaneGraphics|**可选**要与此实体关联的PlaneGraphics实例。
point|PointGraphics|**可选**要与此实体关联的PointGraphics实例。
polygon|PolygonGraphics|**可选**要与此实体关联的PolygonGraphics实例。
polyline|PolylineGraphics|**可选**要与此实体关联的PolylineGraphics实例。
properties|PropertyBag|**可选**要与此实体关联的任意属性。
polylineVolume|PolylineVolumeGraphics|**可选**要与此实体关联的PolylineVolumeGraphics实例。
rectangle|RectangleGraphics|**可选**要与此实体关联的RectangleGraphics实例。
wall|WallGraphics|**可选**要与此实体关联的WallGraphics实例。
