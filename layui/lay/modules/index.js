/**
 项目JS主入口
 以依赖layui的layer和form模块为例
 **/
layui.define(['layer', 'form','element','laypage','jquery','layedit','util'], function(exports){
    var layer = layui.layer,
    element = layui.element,
    laypage = layui.laypage,
    form = layui.form,
    layedit = layui.layedit,
    util = layui.util,
    $ = layui.$;
    // ,layedit = layui.layedit
    //   ,laydate = layui.laydate;
  //日期
  // laydate.render({
  //   elem: '#date'
  // });
  // laydate.render({
  //   elem: '#date1'
  // });
  // form.render();
  //创建一个编辑器
  // var editIndex = layedit.build('LAY_demo_editor');

  exports('index',{}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});