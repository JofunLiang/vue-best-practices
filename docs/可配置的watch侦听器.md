# 可配置的watch侦听器

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。vue 侦听器 watch 监听属性时可以使用函数或一个包含handler处理函数的配置对象：
```js
export default {
  watch: {
    user (val, oldVal) {
      // do something
    }
  }
}
```
等价于：
```js
export default {
  watch: {
    user: {
      handler (val, oldVal) {
        // do something
      }
    }
  }
}
```
建议使用配置对象是因为它能更好的适应需求的变化，更方便声明immediate和deep属性:
```js
export default {
  watch: {
    user: {
      handler () {
        // do something
      },
      deep: true,
      immediate: true
    }
  }
}
```
如下实例，组件创建的时候我们获取一次列表，同时监听input框，每当发生变化的时候重新获取一次筛选后的列表：
```js
export default {
  created () {
    this.fetchPostList()
  },
  watch: {
    searchInputValue () {
      this.fetchPostList()
    }
  }
}
```
改成配置对象，并声明immediate: true表示创建组件时立马执行一次：
```js
export default {
  watch: {
    searchInputValue: {
      handler () {
        this.fetchPostList()
      },
      immediate: true
    }
  }
}
```
如果一开始设置为配置对象，那么只需声明immediate: true即可。