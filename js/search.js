$(document).ready(function () {

$("#search-filter-icon").click(function () {


$(".filter-column").slideToggle("slow");

});

$("input:checkbox").click(function () {
    var $box = $(this); 

    // إذا كان تم إلغاء الخاصية لا تفعل شيئاً , وإلا نفذ الكود التالي
    if ($box.is(":checked")) {
        /**
         * نلاحظ أن كل صناديق التأشير ضمن العمود الواحد ,  تحوي نفس الاسم 
         * لذلك يمكن استخدام الاسم لتحديد جميع صناديق التأشير ضمن العمود الواحد 
         */
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false); // نقوم بجعل جميع صناديق التأشير ضمن العمود غير مفعّلة
        $box.prop("checked", true); // تفعيل الصندوق الذي تم الضغط عليه 
    }
});


});