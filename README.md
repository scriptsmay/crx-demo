# React + Vite

## 目录结构设计

```
├─ /node_modules
├─ /public
|  ├─ /images            <--图片目录
|  |  └─ app.png         <--插件图标
|  ├─ favicon.ico        <--这个没有也行，用不到
|  ├─ insert.js          <--插入到目标页面执行的js（非必须，视业务需求而定）
|  └─ manifest.json      <--插件的配置文件
├─ /src
|  ├─ /api               <-- api目录
|  |  └─ index.jsx       <-- api库
|  ├─ /background        <--background script开发目录
|  |  └─ index.jsx       <--background script主文件
|  ├─ /common            <-- 全局公用目录
|  |  ├─ /fonts          <-- 字体文件目录
|  |  ├─ /images         <-- 图片文件目录
|  |  ├─ /js             <-- 公用js文件目录
|  |  └─ /styles         <-- 公用样式文件目录
|  ├─ /content           <--content script开发目录
|  |  ├─ /components     <--content 组件目录
|  |  ├─ /images         <--content 图片目录
|  |  ├─ content.scss    <--content 样式
|  |  └─ index.jsx       <--content script主文件
|  ├─ /popup             <--popup开发目录
|  |  ├─ /components     <--popup 组件目录
|  |  ├─ /pages          <--popup 页面目录
|  |  ├─ /router         <--popup 路由配置目录
|  |  |  └─ index.jsx    <--popup 路由配置文件
|  |  ├─ index.jsx       <--popup 主文件
|  |  └─ popup.scss      <--popup 样式文件
|  ├─ main.jsx           <-- 项目主文件，也是popup入口文件
|  └─ mock.jsx           <-- mock数据文件
├─ .eslintrc.cjs         <-- ESLint配置文件
├─.gitignore
├─ build.js              <-- 补充的build脚本文件
├─ globalConfig.js       <-- 全局配置文件
├─ index.html            <-- popup页面入口
├─ package.json
├─ vite.popup.config.js       <-- popup的Vite配置文件
├─ vite.content.config.js     <-- content的Vite配置文件
├─ vite.background.config.js  <-- background的Vite配置文件
└─ yarn.lock
```

## 使用方法：开发环境

> ※注：为方便演示接口请求，本 Demo 使用了 mock.js，也配置了反向代理。
> mock.js 便于直接调试，使用前请修改 src/api/index.jsx，将 import '@/mock'前的注释去掉，保证 mock.js 的正确引入。
> 如使用反向代理，需要自行在本地搭建 API 服务，接口返回数据可参考 src/mock.jsx 中的数据。

执行：

```
npm run dev
```

或

```
yarn dev
```

## 使用方法：build 项目

> ※注：
>
> 1. 执行 build 前一定检查是否取消 mock.js，即确认 src/api/index.jsx 中，将 import '@/mock'注释掉。这是因为 mock.js 使用 window 变量，而运行 background script 的 Service Worker 不支持 window，将导致插件运行失败。
> 2. 执行 build 前一定检查 src/main.jsx 代码中，注释掉 import '@/content'。这段代码是用于方便在开发环境调试 content script 的，否则 content script 会被集成到 popup 页面中。

执行：

```
npm run build
```

或

```
yarn build
```
