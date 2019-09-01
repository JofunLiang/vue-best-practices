# 始终为列表渲染提供唯一的key值

key 的特殊属性主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

最常见的用例是结合 v-for 使用：
```html
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
```
它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用：
* 完整地触发组件的生命周期钩子
* 触发过渡

例如：
```html
<transition>
  <span :key="text">{{ text }}</span>
</transition>
```
当 text 发生改变时，<span> 会随时被更新，因此会触发过渡。

v-for可以使用索引index设置key值。在发生DOM插入和删除的列表中请始终提供唯一的key值。