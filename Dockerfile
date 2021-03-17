# build stage
# 基础的node环境为12.18.4
FROM node:12.18.4 as build-stage
# LABEL 谁在维护这个项目
LABEL maintainer=690313615@qq.com
# docker镜像内创建一个工作目录
WORKDIR /app
# 我们把项目中的所有文件都复制一份到镜像中就是 COPY . .
# 但是node_modules这样的文件咋弄/或者dist,我们就需要.dockerignore文件(只会复制我们项目相关的源代码文件,而不去把不需要的文件复制进来)
COPY . .
# 使用yarn安装会更加的快捷
RUN npm install --registry=https://registry.npm.taobao.org
# 进行build构建
RUN npm run build

# production stage 生产发布环境
FROM nginx:stable-alpine as production-stage
# 将项目的app/dist目录拷贝到nginx/html目录中去,html目录就是我们网站的目录
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
# CMD 将下面数组中的内容拼接起来运行,意思是 naginx -g daemon off,使用nginx运行我们的网站
CMD ["nginx", "-g", "daemon off;"]
