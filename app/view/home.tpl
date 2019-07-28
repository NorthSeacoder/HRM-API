<html>
<head>
<title>基于eggjs导入导出excel表格</title>
</head>
<body>
<h1>基于eggjs导入导出excel表格</h1>
<div style="position:absolute;left:35%;top:40%">
{# 导出 #}
<button onclick="simple()">导出简单表格</button>
<button onclick="complex()">导出复杂表格</button>
{# 导入 #}
<br />
<br />
<br />
{# fetch 方式 #}
<input type="file" id="file"/>
<button type="submit" onclick="submit()">提交</button>
{#  #}
<br />
<br />
<br />
{# form表单提交方式 #}
<form method="POST" action="/import" enctype="multipart/form-data"  name="_csrf" value="{{ctx.csrf}}">
  title: <input name="title" />
  file: <input name="file" type="file" />
  <button type="submit">upload</button>
</form>
{# 测试数据库#}
<button type="submit" onclick="dbtest()">测试数据库</button>
{#  #}
</div>
</body>
<script>
function simple(){
    window.open('http://127.0.0.1:7001/simple')
}
function complex(){
    window.open('http://127.0.0.1:7001/complex')
}
function submit(){
let excel = document.getElementById("file").files[0]
const data = new FormData();
data.append('file',excel);
fetch('http://localhost:7001/import',{
    method:"post",
    body:data,
})
}
function dbtest(){
    const data={
        userName: 'mp',
        password: '123',
        sex: '男', //性别
        name: '哈哈', //姓名
        isAdmin: true, //是否是管理员
    }
    fetch('http://localhost:7001/api/employee/create',{
    method:"post",
    headers: {
            'Content-Type': 'application/json',
      },
    body:JSON.stringify(data),
    
})
}
</script>
</html>
