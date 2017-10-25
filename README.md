# webpack-hot-demo
webpack自动刷新demo，开启了HMR 

# 查看效果
`npm start`

# 重要的事
入口的js文件中要加上下面这段

```
if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error("Cannot apply hot update", err);
    }
  });
}
```
