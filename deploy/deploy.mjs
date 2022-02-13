#!/usr/bin/env zx 

const projectName = 'vowui-doc'

console.log("开始创建 docker 镜像")
await $ `docker build . --network=host -t  ${projectName}-image:latest`
console.log('创建 docker 镜像成功')

console.log("开始销毁 docker 容器")
await $ `docker ps -a -f "name=^${projectName}-container" --format="{{.Names}}" | xargs -r docker stop | xargs -r docker rm`
console.log("销毁docker镜像成功")

console.log("开始创建 docker 容器")
await $ `docker run -d -p 443:80 --name ${projectName}-container  ${projectName}-image:latest`
console.log("创建 docker 容器成功")

console.log('deploy success')