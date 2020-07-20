### 部署

每次改完代码，必须运行这一行，才能正确的请求 JS 和 CSS：

```
npm install --save-dev cssnano    //只在第一次打包时执行一次
parcel build src/index.html --public-url .
```
