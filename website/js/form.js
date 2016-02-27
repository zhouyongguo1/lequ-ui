$(function () {
    var form = (function () {
        var completedCount = 0;
        var terms = [];
        var $form = $("#form form");
        var init = function () {

            $(".custom-fields .btn").on("click", function(){

                $field=$("#htmlField").find("div[data-field='text']").clone();
                $form.append($field);
                $field.find('[data-toggle="tooltip"]').tooltip();
            });
            $("body").on("click",'a[data-toggle="tooltip"]',function(){

                $(this).closest(".field-item").remove();

            });


        };
        return {
            init: init
        };
    })();
    $.form = form;
});