---
title: flutter基础
date: 2020-05-14 23:01:07
permalink: /pages/3655851b45ea004c
---`
# `flutter`基础

### 如何快速新建`flutter`项目

- 安装好开发环境
- `flutter create project_name`
- `flutter run`

### `statelessWidget`、`StatefulWidget`

- `StatelessWidget`用于不需要维护状态的场景

- `StatefulWidget`则相反,它通常用来需要改变状态的场景，当调用`setState`方法时，会重新渲染`widget`.

### Scaffold

`scafflod`是指一个路由页的骨架，包括：导航栏、抽屉组件以及底部的`Tab`菜单栏等。它是`flutter Material`组件库提供的现成组件。

### PageView

`PageView`是`Material`组件库提供的用来完成整体滑动的组件，类似于轮播图的滑动效果。

### Stack、Postioned

这两个组件是用来实现定位效果的。

`Stack`允许子组件堆叠;而`Positioned`用于根据`Stack`的四个角来确定子组件的位置。

###  MediaQuery.removePadding

用来移除组件中的安全区域的padding

### NotificationListener

父组件通过其用来监听子组件的滚动，其原理类似于`web`中的事件冒泡。

### ListView

可滚动的列表组件;

### ExpansionTile

可折叠列表

### GridView

网格布局

### 下拉刷新 上拉加载更多

下拉刷新：RefreshIndicator

上拉加载更多：ScrollController

### BoxDecoration

用来设置背景，边框，渐变等。

### flutter网络相关

- `dart:convert`包将内容响应转化为一个`json Map`;http请求获取的数据为`JSON`格式的,但`flutter`是识别不了的，因此要转换为对应的Map对象。

- `Future`类似于`Promise`,是`dart:async`中的一个类。`then`,`onError`,`catchError`等方法。

- `Future.whenCompelete`，当执行完成时调用，类似于`finally`

- `FutureBuilder`:是一个将异步操作和异步UI更新结合在一起的类（组件），通过它可以将网络请求，数据库读取等的结果更新到页面上。

### `JSON`解析与复杂模型转换

- JSON序列化方式：插件：json_serializable和built_value

- 如何序列化：JSON.decode(jsonstr)得到Map格式，Map在映射到对应的Model对象。

- json_to_dart在线转换工具

### shared_preferences 本地存储


### Flutter混合开发

### Offstage

通过一个参数，来控制`child`是否显示,当`offstage`为`true`时,`child`不会绘制。

### SafeArea

`SafeArea`主要用于做适配,比如刘海屏,`iphoneX`底部的`bottom`,如果发现`widget`渲染在了这些区域,可以选择使用。

### Align

在其他端的开发，`Align`一般都是当做一个控件的属性，并没有拿出来当做一个单独的控件。`Align`本身实现的功能并不复杂，设置`child`的对齐方式，例如居中、居左居右等，并根据`child`尺寸调节自身尺寸。

### Center

`Center`继承自`Align`，只不过是将`alignment`设置为`Alignment.center`

### 顶部导航TabBar,TabBarView，DefaultTabController

`BottomNavagationBar`:底部导航组件

`TabBar`:顶部导航组件

`TabBar`选项卡一般位于`AppBar`下放,通常和`TabBar`一起使用的有`TabBarView`和`TabController`.

`TabBar`：`Ta`b页的选项组件，默认为水平排列。

`TabBarView`：`Tab`页的内容容器，`Tab`页内容一般处理为随选项卡的改变而改变。

`TabController`：`TabBar`和`TabBarView`的控制器，它是关联这两个组件的桥梁,与其并列的还有`DefaultTabController`,两者的区别是`TabController`一般放在有状态组件中使用，而`DefaultTabController`一般放在无状态组件中使用。

### NestedScrollView,ScrollView,RecyclerView

参考链接：

`https://www.cnblogs.com/mengqd/p/12847528.html`

`https://blog.csdn.net/yechaoa/article/details/90701321`

`https://www.jianshu.com/p/a844df66e72f`



