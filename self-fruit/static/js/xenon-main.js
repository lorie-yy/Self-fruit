/**
 * Created by lorie on 2016/12/15.
 */
$(document).ready(function () {
    //js日期格式化,对Date的扩展，将 Date 转化为指定格式的String
    // 月(M)、日(d)、12小时(H)、24小时(h)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符
    // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
    Date.prototype.format=function(format) {
        var date = {
            "M+" : this.getMonth()+1, //月份
            "d+" : this.getDate(), //日
            "H+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //12小时制（需要加上上午下午）
            "h+" : this.getHours(), //24小时制
            "m+" : this.getMinutes(), //分
            "s+" : this.getSeconds(), //秒
            "q+" : Math.floor((this.getMonth()+3)/3), //季度
            "S" : this.getMilliseconds() //毫秒
        };
        var week = {
            "0" : "日",
            "1" : "一",
            "2" : "二",
            "3" : "三",
            "4" : "四",
            "5" : "五",
            "6" : "六"
        };
        //年(y)可以选择用 1-4 个占位符（如：17,2017）
        if(/(y+)/.test(format)){
            format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
        }
        //周(E)可以选择用 1-3 个占位符（如：一，周一，星期一）
        if(/(E+)/.test(format)){
            format=format.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);
        }
        //date中的其他月/日/小时/分钟/秒等可以选择用 1-2 个占位符（如：7，07）
        for(var i in date){
            if(new RegExp("("+ i +")").test(format)){
                format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (date[i]) : (("00"+ date[i]).substr((""+ date[i]).length)));
            }
        }
        return format;
    };

    //调用startTime函数
    setTimeout("startTime()",10);

    // 隐藏的顶部settings-pane开关
    $("a[data-toggle='settings-pane']").click(function () {
        $(".settings-pane").slideToggle(300)
    });

    // menu
    $('#main-menu').metisMenu();
    // 菜单点击切换到新页面后，依旧是选中时的高亮状态
    var urlstr = location.href;
    // alert(urlstr);
    var urlstatus=false;
    $(".main-menu a").each(function () {
        if ((urlstr + '/').indexOf($(this).attr('href'))>-1 && $(this).attr('href')!=='') {
            $(this).addClass('active'); urlstatus = true;
        } else {
            $(this).removeClass('active');
        }
    });
    if (!urlstatus) {$(".main-menu a").eq(0).addClass('active'); }

    // 菜单栏收缩到左侧，Sidebar-collapsed 样式开关
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
//获取实时当前时间
function startTime() {
    //计时，每0.1秒调用一次，放在函数内部无限循环
    setTimeout("startTime()",1000);
    var today=(new Date()).format('yyyy年MM月dd日 星期E hh:mm:ss');
    $("#date").html(today);
    //实时监控获取输入框内容
    var content = $('#search_name').val();
    $('#result').html(content);
}
