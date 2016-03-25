require.config({

    baseUrl: 'js',
    paths:{
                //"jquery" : ["https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min","jquery-1.8.3.min"]
        "jquery" : "jquery-1.8.3.min"
        //"underscore": "underscore.min",
        //"backbone": "backbone.min"

    },
    shim:{
        'underscore':{
            exports:'_'
        },
        'backbone':{
            deps:['underscore','jquery'],
            exports:'Backbone'
        },
        'jquery.scroll': {
            deps: ['jquery'],
            exports: 'jQuery.fn.scroll'
        }
    }
});

require(["jquery","math","a"],function($,math){
    $(function(){
        alert("11234");
        alert(math.add(1,1));
    })
});
/*

 防止js加载阻塞页面渲染
 使用程序调用的方式加载js，防出现如下丑陋的场景

 require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，
 上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；
 第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。
 加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。
    require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
 　　　　// some code here
 　　});

 在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
 上面例子中的callback函数中发现有$参数，这个就是依赖的jquery模块的输出变量，
 如果你依赖多个模块，可以依次写入多个参数来使用
 如果某个模块不输出变量值，则没有，所以尽量将输出的模块写在前面，防止位置错乱引发误解

 */