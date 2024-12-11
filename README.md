<h1 id="SQVGZ">总结</h1>
这是一个学习服务器端网站编程的node小项目，使用了Express Web 框架，学习参考主要来源于MDN文档：[https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs)



后续计划:使用原生node写，锻炼使用promise, async, await

<h1 id="nYVIF">学习笔记</h1>
下面为学习过程中的笔记，比较杂乱，仅供参考..

<h2 id="ox24N">需求</h2>
有个图书管理列表，根据书名更新，先查照书名对应的id。在用id更新书名，用node写个服务。提供两个接口一个查书一个更新，数据放内存里

<h2 id="R6PXn">服务器端网站编程</h2>
<h3 id="s2Hpy">常用知识</h3>
使用 `nodemon` 自动重启服务

查看端口号占用情况：lsof -i :端口号

杀死占用某端口的进程：kill -9 进程号

<h3 id="fyPmo">原生node方法</h3>
1.创建项目文件夹+添加package.json

```bash
npm init -y
```

2.安装必要依赖

npm install express body-parser

3.创建项目基本结构

my-book-management/

├── index.js        # 主入口文件

├── books.js        # 模拟的书籍数据

├── services.js     # 核心功能逻辑

└── package.json

4.在books.js中添加数据

5.在service.js中编写查书和更新功能



测试方法：

1.浏览器地址栏测试GET 请求(浏览器仅支持测试GET 请求)

[http://localhost:3000/getBookById?id=1](http://localhost:3000/getBookById?id=1)

更新接口 `/updateBookById` 是通过 **POST 方法** 实现的，所以你需要使用工具或代码来发送 POST 请求

2.post测试方法：

Postman 

或 Curl 

```sql
使用 Curl 查看响应：
curl -X POST http://localhost:3000/updateBookById \
-H "Content-Type: application/json" \
-d '{"id":1,"newName":"新-人月神话"}'

添加 -v 可以显示更多的请求和响应信息：
curl -v -X POST http://localhost:3000/updateBookById \
-H "Content-Type: application/json" \
-d '{"id":1,"newName":"新-人月神话"}'

如果只关心响应的状态码和内容，可以使用 -i 参数：
curl -i -X POST http://localhost:3000/updateBookById \
-H "Content-Type: application/json" \
-d '{"id":1,"newName":"新-人月神话"}'

```

<h2 id="sdRGm">Express</h2>
<h3 id="tkxs7">什么是express</h3>
> **Express** 是一个基于 **Node.js** 的 **Web应用框架**，它用于快速构建网络应用程序和 API（应用程序接口）。它是 **Node.js** 平台上最流行的框架之一，因为它简洁、灵活且易于使用。
>
> 通俗地讲，Express 就像是 Node.js 的一个助手，它帮你处理与创建 Web 服务器相关的复杂操作，比如：
>
> 1. **接收和响应用户的请求**（例如，用户访问网页或提交表单）。
> 2. **路由管理**：不同 URL 请求对应不同的处理逻辑。
> 3. **中间件支持**：在请求和响应之间加入额外的功能（如身份验证、日志记录等）。
> 4. **模板引擎支持**：动态生成 HTML 页面。
> 5. **静态文件服务**：托管 HTML、CSS、JavaScript、图片等静态资源。
>



<h3 id="y0d5w">路由的含义</h3>
> 当数据包到达 Web 服务器后，服务器会根据 URL 路径（如 `/about`）找到相应的处理逻辑，这就是 Express 的路由功能。
>
> 
>
> + **计算机网络的路由** 负责将请求传输到正确的服务器。
> + **Express 的路由** 负责在服务器内部处理不同路径的请求并返回响应。
>
> 
>
> **类比**：想象你在一家大型公司有很多部门：
>
> + **网络路由** 就像是前台负责把外部访客带到正确的部门（比如财务部、市场部）。
> + **Express 路由** 就像是各个部门内部的接待员，根据访客的需求提供具体的服务。
>



<h3 id="wI4Zt">package.json中的内容解释</h3>
> 依赖包括 _express_ 包，和选用的视图引擎包（_pug_）。还有以下一些实用的包：
>
> + [cookie-parser](https://www.npmjs.com/package/cookie-parser)：用于解析 cookie 头来填充 `req.cookies`（提供了访问 cookie 信息的便捷方法）。
> + [debug](https://www.npmjs.com/package/debug)：一个小型 node 调试程序，仿照 node 核心的调试技术建立。
> + [http-errors](https://www.npmjs.com/package/http-errors)：处理错误中间件。
> + [morgan](https://www.npmjs.com/package/morgan)：node 专用 HTTP 请求记录器中间件。
>
> 
>
> "`scripts`" 部分，定义了一个 "`start`" 脚本，当运行 `npm start` 时会调用它来启动服务器。在脚本定义中可以看到 `start` 实际上运行了 "node **./bin/www"**。还有一个 "`devstart`" 脚本，可以通过运行 `npm run devstart` 来运行 "nodemon **./bin/www**"。
>
> 
>
> <h3 id="www_文件">[www 文件](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#www_文件)</h3>
> 文件 **/bin/www** 是应用入口！它做的第一件事是 `require()` “真实”的应用入口（即项目根目录中的 **app.js** ），**app.js** 会设置并返回 [express()](http://expressjs.com/en/api.html)应用对象。
>
> <h3 id="app.js">[app.js](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website#app.js)</h3>
> 此文件创建一个 `express` 应用对象（依照惯例命名为 `app`），通过各种设置选项和中间件来设置这个应用，然后从该模块中导出。
>
> 
>
> 请求处理链与中间件
>
> <h3 id="609471a9">1. 什么是请求处理链？</h3>
> 在 **Express** 中，请求处理链（Middleware Chain 或 Request Handling Chain）是一系列按顺序执行的函数，这些函数在处理用户的 HTTP 请求时会被依次调用。每个函数都可以对请求进行处理、修改或拦截，并决定是否将请求传递给下一个函数。
>
> **简单理解**：  
当一个请求（如访问网站上的某个页面）到达服务器时，它会依次经过一系列的“检查站”或“环节”。这些环节就是中间件，每个中间件都可以对请求或响应做一些操作。
>
> <h3 id="S0Ncv">2. `app.use()` 的作用</h3>
> + `**app.use()**` 用于在 Express 中注册一个中间件函数。
> + 当请求到达服务器时，会依次执行通过 `app.use()` 注册的中间件。
> + **中间件可以**：
>     1. 处理请求数据（如解析 JSON、表单数据）。
>     2. 执行安全检查（如身份验证）。
>     3. 记录日志。
>     4. 返回响应或将请求交给下一个中间件。
>

<h3 id="MbbvV">路由</h3>
如何理解这句话：正确模式即导入模块时指定的路由（'/users'）加该模块（'/'）中定义的任何内容。换句话说，在收到 /users/ URL 时使用此路由。

```sql
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

```

`**router.get("/", ...)**`：  
这里的 `/` 路径是相对于该路由模块的基础路径而言的，**意味着当这个模块挂载到主应用的某个路径（例如 **`**/users**`**）时，它会处理 **`**/users**`** 路径下的请求。**

**重点：理解挂载路径**

```sql
var express = require("express");
var app = express();
var usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

```

`**app.use("/users", usersRouter)**`：  
这里的 `app.use("/users", usersRouter)` 表示将 `usersRouter` 路由模块挂载到 `/users` 路径上。换句话说，所有访问 `/users` 路径的请求都将由 `usersRouter` 来处理。



因此，整个路由链条是这样的：

1. **访问 URL：**`/users/`  
请求会首先到达主应用的 `/users` 路径。
2. **进入 **`**usersRouter**`** 模块**：  
由于你通过 `app.use("/users", usersRouter)` 将 `usersRouter` 路由模块挂载到 `/users` 路径下，所以请求进入了 `usersRouter` 模块。
3. **执行 **`**router.get("/")**`：  
在 `usersRouter` 模块中，`router.get("/")` 定义了对 `/users/` 路径的响应。当访问 `/users/` 时，这个 GET 请求被处理，响应返回 `"respond with a resource"`。

---

总结

+ **导入模块时指定的路由（**`**/users**`**）**：**这是主应用中挂载路由模块的路径。即，所有以 **`**/users**`** 开头的请求都会被传递给 **`**usersRouter**`** 模块。**
+ **该模块中的路由（**`**/**`**）**：在 `usersRouter` 模块内部，`router.get("/")` 定义了对 `/users/` 请求的处理。这里的 `/` 是相对于 `usersRouter` 模块的基础路径来说的。
+ **实际行为**：当收到 `/users/` 的请求时，最终会调用 `router.get("/")` 里的处理逻辑，并返回 `"respond with a resource"`。



<h3 id="UKKCI">路由和控制器</h3>
假设Models部分是_Mongoose_ 模型

+ “路由”：把需要支持的请求（以及请求 URL 中编码的任何信息）转发到适当的控制器函数。
+ 控制器函数：从模型中获取请求的数据，创建一个显示数据的 HTML 页面，并将页面返回给用户，以便在浏览器中查看。
+ 视图（模板）：供控制器用来渲染数据。



![](https://cdn.nlark.com/yuque/0/2024/png/26307378/1733811360307-21477bb2-eaac-4851-88bf-0767bfadb412.png)

<h4 id="V1tFa">路由入门</h4>
> 路由是一段 Express 代码，它将 HTTP 动词（`GET`、`POST`、`PUT`、`DELETE` 等）、URL 路径/模式和处理函数三者关联起来。
>
> 创建路由有多种方法。在本教程中，我们将使用 [express.Router](https://expressjs.com/en/guide/routing.html#express-router) 中间件
>

<h4 id="F1n7C">定义和使用单独的路由模块</h4>
<h4 id="jXfMh">路由函数</h4>
> 此处的回调对响应对象调用 [send()](https://expressjs.com/en/4x/api.html#res.send): 当收到带有路径（`/about`）的 GET 请求时将返回字符串“关于此维基”。
>
>  [res.json()](https://expressjs.com/en/4x/api.html#res.json) :发送 JSON 响应
>
>  [res.sendFile()](https://expressjs.com/en/4x/api.html#res.sendFile) :发送文件。
>
> 构建本地图书馆最常使用的响应方法是 [render()](https://expressjs.com/en/4x/api.html#res.render): 它使用模板和数据创建并返回 HTML 文件
>



<h4 id="shLlI">HTTP动词</h4>
> Router 还为所有其他 HTTP 动词提供路由方法，大都用法相同：post()、put()、delete()、options()、trace()、copy()、lock()、mkcol()、move()、purge()、propfind()、proppatch()、unlock()、report()、mkactivity()、checkout()、merge()、m-search()、notify()、subscribe()、unsubscribe()、patch()、search() 和 connect()。
>

<h4 id="hCVJg">路由路径</h4>
可以匹配字符串模式

> 语法：
>
> + `?`：问号之前的一个字符只能出现零次或一次。例如，路由路径 `'/ab?cd'` 路径匹配端点 `acd` 或 `abcd`。
> + `+`：加号之前的一个字符至少出现一次。例如，路径路径 `'/ab+cd'` 匹配端点 `abcd`、`abbcd`、`abbbcd`，等。
> + `*`：星号可以替换为任意字符串。例如，路由路径 `'/ab*cd'` 匹配端点 `abcd`、`abXcd`、`abSOMErandomTEXTcd`，等。
> + `()`：将一个字符串视为一体以执行 `?`、`+`、`*` 操作。例如。 `'/ab(cd)?e'` 将对 `(cd)` 进行匹配，将匹配到 `abe` 和 `abcde`。
>

或者使用正则表达式

<h4 id="SmkMV">路由参数</h4>
> 路径参数是_具名 URL 片段_，用于捕获在 URL 中的位置指定的值。具名段以冒号为前缀并紧接着名称（如 `/:your_parameter_name/`）。捕获的值保存在 `req.params` 对象中，其中参数名对应对象的键（例如 `req.params.your_parameter_name`）。
>
> 比如，我们考虑一个包含用户和图书信息的 URL：`http://localhost:3000/users/34/books/8989`。我们可以这样提取信息（使用 `userId` 和 `bookId` 路径参数）：
>

```sql
app.get("/users/:userId/books/:bookId", (req, res) => {
  // 通过 req.params.userId 访问 userId
  // 通过 req.params.bookId 访问 bookId
  res.send(req.params);
});

```

路由参数名必须由“单词字符”（A-Z、a-z、0-9 以及 _）组成。

<h4 id="VpAzD">处理路由函数中的错误</h4>
<h4 id="hQkE4">处理路由函数中的异常</h4>
> 每个函数都需要添加大量的样板代码。在本教程中，我们将使用 express-async-handler 模块。它定义了一个包装器函数，隐藏了 try...catch 块和用于转发错误的代码。现在，相同的示例将变得非常简单，因为我们只需要为假设成功的情况编写代码
>

<h3 id="gdbBn">本地图书馆所需路由</h3>
以下是站点页面的完整 URL 列表，其中 object 是模型名称（book、bookinstance、genre、author），objects 是一组模型，id 是每个 Mongoose 模型实例默认的标识字段（_id）。



其实只需要34就行了吧

1.catalog/：主页。

2.catalog/bookquery

4.catalog/bookupdate



其他 URL 是用于处理特定文档/模型实例的，它们会将项目的标识嵌入 URL（上文的 `<id>`）。可以用路径参数来提取嵌入的信息，并传递给路由处理器（后续章节中用于动态获取数据库中的信息）。通过在 URL 中嵌入信息，使得每种类型的所有资源只需要一个路由（例如，所有图书副本的显示操作只需要一个路由）。

