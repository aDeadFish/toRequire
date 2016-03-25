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

 ��ֹjs��������ҳ����Ⱦ
 ʹ�ó�����õķ�ʽ����js�����������³�ª�ĳ���

 require()��������������������һ��������һ�����飬��ʾ��������ģ�飬
 ��������['moduleA', 'moduleB', 'moduleC']������ģ������������ģ�飻
 �ڶ���������һ���ص���������ǰ��ָ����ģ�鶼���سɹ������������á�
 ���ص�ģ����Բ�����ʽ����ú������Ӷ��ڻص������ڲ��Ϳ���ʹ����Щģ�顣
    require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
 ��������// some code here
 ����});

 ��ʹ��requirejsʱ������ģ��ʱ����д.js��׺�ģ���ȻҲ�ǲ���д��׺
 ���������е�callback�����з�����$�������������������jqueryģ������������
 ������������ģ�飬��������д����������ʹ��
 ���ĳ��ģ�鲻�������ֵ����û�У����Ծ����������ģ��д��ǰ�棬��ֹλ�ô����������

 */