# EntityCollection

> new Cesium.EntityCollection(owner)

Entity实例的集合，其中每个实体都有唯一的ID。

名称|类型|描述
:-|:-|:-
owner | DataSource/CompositeEntityCollection | *可选* 创建该集合的DataSource(或者CompositeEntityCollection)

## 属性


## 方法

> add(entity) → Entity

向集合中添加一个实体

:-|:-|:-
entity | Entity | 将要被添加的Entity实例

**返回**

被添加的Entity实例

**异常**:

DeveloperError : 实体实例已经存在集合中.


---

> removeAll()

从集合中移除所有的实体

---