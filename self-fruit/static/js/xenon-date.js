/**
 * Created by Administrator on 2017/5/8.
 */

<!--日期datepicker（中文版需要js插件，来定义中文dates）-->

//选择日期
$(function() {
    $("#date").datepicker({
        format:'yyyy-mm-dd',
        todayBtn:'linked',                          //今天按钮，点击即选中
        todayHighlight:true,                       //高亮今天按钮
        autoclose: true,                            //当选择一个日期之后是否立即关闭此日期时间选择器
        daysOfWeekHighlighted: "0"                //指定星期日高亮显示（0-6分别代表星期日-星期六）
    });
});

//选择月份
$(function() {
    $("#date1").datepicker({
        language:'zh-CN',                           //语言设置成中文
        format:'yyyy年mm月',
        autoclose: true,
        clearBtn:true,                              //清除按钮
        startView: 'year',                          //日期时间选择器打开之后首先显示的视图:0,1,2,3,4分别代表day,month,year,decade,century
        minViewMode: 'year',                        //最精确视图（默认最小0：day）
        maxViewMode: 'century'                     //最高范围视图（默认最大4：century）
    });
});


<!--年月Date Time Picker（中文版需要js插件，来定义中文dates）-->

//选择月份
$(function() {
    $("#datetime").datetimepicker({
        language:'zh-CN',
        format:'yyyy-mm',
        todayBtn:true,
        todayHighlight:true,
        autoclose: true,
        startView:'year',                     //首先显示的视图:0,1,2,3,4分别代表hour,day,month,year,decade
        minView: 'year',                      //最精确视图（默认最小0：hour）
        maxView: 'decade'                     //最高范围视图（默认最大4：decade）
    });
});

//选择具体时刻
$(function() {
    $("#datetime1").datetimepicker({
        language:'zh-CN',
        format:'yyyy-mm-dd HH:ii P',        //HH代表12小时制，hh代表24小时制；P代表上午下午
        autoclose: true,
        clearBtn:true,                        //清除按钮
        minuteStep:1,                         //分钟增长步数，默认为5分钟
        showMeridian:true                    //区分显示上午下午,
    });
});


<!--日期范围Date Range Picker（在locale中改成中文版）-->

// Single Date Picker
$(function() {
    $("#daterange").daterangepicker({
        singleDatePicker:true,                      //单个日历
        showDropdowns:true,                         //年月下拉框
        locale:{
            format:'YYYY-MM-DD',                    //指定格式，需要大写
            daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],//中文名称
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]//中文名称
        }
    });
});

//Date Range Picker(Input Initially Empty)
$(function() {
    var daterange1=$("#daterange1");
    daterange1.daterangepicker({
        autoUpdateInput: false,                       //关掉自动更新设置【注意：关掉后需要重新设置apply和concel事件】
        locale: {                                       //可以改button、label，日期的format，日历上星期的开始
            format:'YYYY/MM/DD',
            applyLabel: '确定',                        //apply标签改为确定
            cancelLabel: '清除',                       //cancel标签改为清除
            daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
            monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
        }
    });
    daterange1.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
    });                                                  //apply事件，格式如2017/05/04 - 2017/06/03
    daterange1.on('cancel.daterangepicker', function() {
        $(this).val('');                                //清除事件
    });
});

//Date and Time(Input Initially Empty)
$(function() {
    var daterange2=$("#daterange2");
    daterange2.daterangepicker({
        timePicker:true,                                //是否显示时间
        timePicker24Hour:true,                         //24h制
        timePickerIncrement:10,                         //时间增长幅度，默认是一分钟
        autoUpdateInput: false,
        showDropdowns:true,
        locale: {
            format:'YYYY/MM/DD hh:mm A',            //hh代表12小时制，HH代表24小时制,a和A代表上午下午
            cancelLabel: 'Clear'
        }
    });
    daterange2.on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('YYYY/MM/DD HH:mm A') + ' - ' + picker.endDate.format('YYYY/MM/DD HH:mm A'));
    });                                                   //格式如2017/05/03 12:30 AM - 2017/06/06 11:00 PM
    daterange2.on('cancel.daterangepicker', function() {
        $(this).val('');
    });
});






