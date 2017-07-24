# 新疆商城-思路乐购

> 思路乐购h5项目

开发环境

npm: 3.10.8 (npm > 3.0)

node: v6.9.1 (node > 6.0)

vue: 2.2.6

#步骤

1. 安装nvm

2. 用nvm安装node v6.9.1
   如果没有这个版本的node:
     $ nvm install v6.9.1
   如果有的话，可以直接在当前目录运行:
     $ nvm use 6.9.1
   切换版本．

3. 用npm安装vue, vue-cli, vue-router等等 ( vue-router > 2.0)

4. 安装sass:
     $ npm install sass
   注意:
     不要直接在queen_town.css中修改, 要使用sass
     新的sass要在queen_town.scss中import
     具体是想使用sass后缀还是scss后缀看个人编码习惯

5. clone 项目

6. 运行

```
  6.1 $ npm install
  6.2 $ npm run dev
  # 下面的命令，用于开发时，动态的生成最新的css
  6.3 $ sass --watch static/sass/queen_town.scss:static/css/queen_town.css

```
  第一次运行成功以后只需要6.2, 6.3, 运行在localhost:8080端口上

7. 打包代码
  $ npm run build

8. Capistrano（自动化部署） 访问地址：
  $ bundle exec cap deploy
