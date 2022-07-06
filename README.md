通过express初始化一个项目，就叫express-session。
不凑巧地是，我们测试的模块名称也是express-session，不要紧，通过npm install  express-session --save进行安装。
在app.js骨架文件中声明使用cookie-parser，并且做好session的初始化工作，通过app.use搞定。
在demo中，首先在index.js中将样例用户写入req.session.user，然后在users.js中判断，决定是否是授权用户访问该页。

参考：https://blog.csdn.net/qq_43602416/article/details/83717790