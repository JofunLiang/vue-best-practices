# 模块化组织Vuex状态

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，建议使用模块化组织Vuex，将store分割成模块。文件结构如下：
```
├── store
│   ├── index.js
│   ├── state.js
│   ├── getters.js
│   ├── actions.js
│   ├── mutations.js
│   └── modules
│        ├── moduleA.js
│        ├── moduleB.js
```
然后在 store 的 index.js 文件中引入这些模块：
```js
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    moduleA,
    moduleB
  }
})
```
