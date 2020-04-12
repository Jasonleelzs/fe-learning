var log = function() {
    console.log.apply(console, arguments)
}
// 浏览器提供了一些内置函数来让我们操作页面(增删改查) DOM API



// 查找元素
// ===
//
// 查找元素使用 document.querySelector() 函数
// 这个函数的参数是一个选择器(和 CSS 选择器一样)
// 选择器语法和 CSS 选择器一样, 现在只用 3 个基础选择器

// 元素(标签)选择器
var body = document.querySelector('body')
// class 选择器, 用的是   .类名
var form = document.querySelector('.login-form')
// id 选择器, 用的是   #id
var loginButton = document.querySelector('#id-button-login')



// 操作元素的默认属性
// ===
//
// 获得特定属性值
// 注意， getAttribute 只能得到默认值，而不是得到当前的值
// 当前的值可能是被改动后的值
var user = document.querySelector('#id-input-username')
var userValue = user.getAttribute('value')
log('user value', userValue)
// 不存在的属性会返回 null
//
// 设置特定属性值
// user.setAttribute('value', '新用户名')
//
// 查询属性是否存在
// log(user.hasAttributes())       // 查看元素是否有属性
// log(user.hasAttribute('value')) // 查看元素是否有特定属性
//
// 删除某个属性
user.removeAttribute('type')
//
// 获得所有属性
var attributes = user.attributes
log('所有属性', attributes)



// 操作元素(创建, 删除, 修改)
// ===
//
// 用 document.createElement 函数创建一个元素
var button = document.createElement('button');
// 用 innerHTML 设置属性
button.innerHTML = '注册用户'
//
// 修改
// 用 appendChild 给一个元素添加子元素
// 这里我们给 .login-form 添加刚才创建好的按钮
var form = document.querySelector('.login-form')
form.appendChild(button)
//
// 删除元素
var pwd = document.querySelector('#id-input-password')
// 以下两种方法都可以删除元素
// 一种是自毁
// 一种是父节点删除子元素
pwd.remove()
// form.removeChild(pwd)



// 事件
// ===
//
// 事件是用来处理响应的一个机制
// 这个响应可以来自于用户(点击, 鼠标移动, 滚动)
// 也可以来自于浏览器
//
// 下面的链接描述了所有事件, 不过我们先从最常用的事件学起, click 事件
// https://developer.mozilla.org/en-US/docs/Web/Events
//
// 常用例子, 给按钮添加一个点击的事件
// 1, 获得按钮
var loginButton = document.querySelector('#id-button-login')
// 2, 声明一个函数, 用于在按钮点击后执行
var clicked = function(event) {
    log('按钮被点击到了', event)
}

// 3, 添加事件, 使用 addEventListener 函数, 它有两个参数
// 第一个是事件的名字, 第二个是事件发生后会被自动调用的函数，应该会传 event 作为参数
// loginButton.addEventListener('click', function)
loginButton.addEventListener('click', clicked)


// 批量添加事件
var buttons = document.querySelectorAll('button')
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('click', function(event){
        var self = event.target
        if (self.innerHTML == '注册用户') {
            log('注册按钮')
        } else {
            log('登录按钮')
        }
        console.log('循环批量添加click事件', self.id)
    })
}

//
// 复杂的例子，添加选项卡效果
// 给多个元素挂上同一个事件
// 选择多个元素使用函数 querySelectorAll
var buttons = document.querySelectorAll('.radio-button')
// 循环遍历每个元素, 并且绑定点击事件
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i]
    button.addEventListener('click', function(aaa){
        // 注意, 这次我们直接定义了函数作为参数传递, 这样做是合法的
        // 另外, 我们增加了一个 event 参数
        // 浏览器会给事件响应函数传递一个参数, 它代表了事件本身
        // 我们可以用 event.target 取出响应事件的元素
        var self = aaa.target
        // clearActive 函数是我们自己定义的
        // 目的是删除其他元素的 active class
        clearActive()
        // add 可以增加一个 class
        self.classList.add('active')
    })
}
//
var clearActive = function() {
    var s = document.querySelector('.active')
    if (s != null) {
        // 使用 classList 可以访问一个元素的所有 class
        // remove 可以删除一个 class
        s.classList.remove("active")
    }
}
