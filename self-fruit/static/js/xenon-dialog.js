/**
 * Created by Lorie on 2017/4/26.
 */
//常用函数
function reloadPage(){
    window.location.reload()
}
//确认对话框
function ConfirmWarning(head,msg, togopagefun){
    easyDialog.open({
        container : {
            header : head,                              //header：包含弹出层的标题和关闭按钮
            content : msg,                              //content：包含弹出层的内容
            yesFn : togopagefun,                        //弹出层的脚：确定按钮及回调函数
            noFn : true                                 //取消按钮，为false时将不显示按钮
        }
        //fixed : false                                  //fixed：该参数为true时，弹出窗口为固定定位（跟随页面的滚动而滚动）
        //overlay : false                                //overlay：该参数为false时，将不显示遮罩层，默认为true
        //autoClose : 3000                               //autoClose：自动关闭窗口，单位为毫秒(ms)
        // drag : false                                  //drag：该参数为false时将关闭拖拽的功能
    });
    $('#easyDialogYesBtn').focus();                   //将光标聚焦到弹出框的确定按钮上
}
// 错误对话框
function ErrorWarning(msg, togopagefun){
    easyDialog.open({
        container : {
            header : gettext("操作失败"),               //gettext("")——js中的翻译
            content : msg,
            yesFn : togopagefun
        }
    });
    $('#easyDialogYesBtn').focus()
}
//成功对话框
function SuccessWarning(msg, togopagefun){
    easyDialog.open({
        container : {
            header : gettext("操作成功"),
            content : msg,
            yesFn : togopagefun
        }
    });
    $('#easyDialogYesBtn').focus()
}
//提示对话框
function AlarmWarning(msg, togopagefun){
    easyDialog.open({
        container : {
            header : gettext("告警"),
            content : msg,
            yesFn : togopagefun
        }
    });
    $('#easyDialogYesBtn').focus()
}
