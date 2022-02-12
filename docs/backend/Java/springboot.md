---
title: 快速创建SpringBoot项目
date: 2020-04-18 19:25:07
permalink: /pages/666d1f33ac4bf708
---

# 快速创建 SpringBoot 项目

### 通过 `spring initializr` 创建

配置的网址：`https://start.spring.io/`

配置好了之后会生成一个压缩包，里面已经初始化了基本的项目结构。

### 通过 `IDEA` 来创建项目

`File` -> `New` -> `Project` -> `Spring Initializr` -> 一步步往下配置就行。

### 基本目录结构

```
|-- fengxiu-service
    |-- .gitignore
    |-- fengxiu-service.iml  // 忽略，Idea自己生成的
    |-- pom.xml  // maven配置文件
    |-- .idea  // 忽略 Idea自己生成的
    |-- .mvn   // 忽略 Idea自己生成的
    |-- src   // 源码目录
    |   |-- main
    |   |   |-- java
    |   |   |   |-- com
    |   |   |       |-- zgf
    |   |   |           |-- fengxiu //前面几级可以理解为域名或者组织名反写
    |   |   |               |-- FengxiuApplication.java   // 项目入口文件
    |   |   |-- resources   // 存放静态目录的文件
    |   |       |-- application.properties    // 项目配置文件
    |   |       |-- static
    |   |       |-- templates
    |   |-- test   //测试文件夹
    |       |-- java
    |           |-- com
    |               |-- zgf
    |                   |-- fengxiu
    |                       |-- FengxiuApplicationTests.java
    |-- target   //编译后的代码存放位置
        |-- classes
        |   |-- application.properties
        |   |-- com
        |       |-- zgf
        |           |-- fengxiu
        |               |-- FengxiuApplication.class
        |-- generated-sources
        |   |-- annotations
        |-- generated-test-sources
        |   |-- test-annotations
        |-- test-classes
            |-- com
                |-- zgf
                    |-- fengxiu
                        |-- FengxiuApplicationTests.class
```

### 如何更改 JDK 版本

`File` -> `Project Structure` -> `Project`

### 如何更改默认 maven 地址

`File` -> `settings` -> `Build,Execution,Deployment` -> `Maven`

### Idea 如何设置热重启

- 安装`spring-boot-devtools`包

```
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-devtools</artifactId>
      <scope>runtime</scope>
      <optional>true</optional>
  </dependency>
```

- `dev-tools`工具是监听`target`目录下的文件，改变了，自动重启`tomcat`服务器，所以要先编译。

- 监听文件变化，自动编译

  `File` -> `Settings` -> `Build,Execution,Deployment` -> `Compiler` -> 勾选`Build project automatically`
