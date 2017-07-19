/**
 * Created by lorie on 2016/12/15.
 */
$(document).ready(function () {
    // 隐藏的顶部settings-pane开关
    $("a[data-toggle='settings-pane']").click(function () {
        $(".settings-pane").slideToggle(300)
    });

    // 子菜单开关
    $(".dropdown-toggle").click(function () {
        $(this).next("ul").slideToggle(300);//动画时长，1000毫秒即1秒
        $(this).siblings().next("ul").slideUp(300);
        $(this).toggleClass("turndown");
    });

    // 菜单栏Sidebar-collapsed 样式开关
    $("a[data-toggle='sidebar']").click(function () {
        $(".sidebar-menu").toggleClass("collapsed");
    });

    // 右上角用户信息toggle
    $("#user-profile").click(function () {
        $(this).next("ul").slideToggle(300);
        $(this).toggleClass("opened");//两种样式的开关
    });

    // 切换商铺弹出框toggle
    $("#shop_switch").click(function () {
        $(".theme-popover-mask").fadeIn(100);
        $(".theme-popover").slideDown(200)
    });
    $(".theme-popover-close").click(function () {
        $(".theme-popover-mask").fadeOut(100);
        $(".theme-popover").slideUp(200)
    });

    // go-top回到顶部
    $(window).scroll(function () {//滚动函数
        var _stop = $(window).scrollTop();//鼠标滚动的距离
        if(_stop>1) {//鼠标滚动的距离大于1
            $(".go-top").fadeIn();
        }else {
            $(".go-top").fadeOut();
        }
    });
    $(".go-top").click(function(event){
        $('html,body').animate({scrollTop:0}, 100);//点击时，滚动到距顶部为0的位置
        return false;//禁止向上冒泡：event.stopPropagation();禁止默认行为：event. preventDefault();
    });

    //goPage分页


});
