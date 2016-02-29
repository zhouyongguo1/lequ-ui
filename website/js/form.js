$(function () {
    var form = (function () {
        var $currentFieldItem;
        var $form = $("#form form");
        var $fieldsDiv = $("#fieldsDiv");
        var $fieldAttDiv = $("#fieldAttDiv");
        var showFieldTab=function(){
            $("#fieldsTab").addClass("active").siblings().removeClass("active");
            $fieldsDiv.show();
            $fieldAttDiv.hide();
        };
        var showFieldAttTab=function(){
            $("#fieldAttTab").addClass("active").siblings().removeClass("active");
            $fieldsDiv.hide();
            $fieldAttDiv.show();

        };
        var init = function () {

            $(".custom-fields .btn").on("click", function(){

                var $field=$("#htmlField").find("div[data-field='text']").clone();
                $form.append($field);
                $field.find('[data-toggle="tooltip"]').tooltip();
            });

            $("#fieldsTab").on('click',function(){
                showFieldTab();
            });
            $("#fieldAttTab").on('click',function(){
                showFieldAttTab();
            });
            $("body").on("click",'.field-item',function(){
               $(this).addClass("active").siblings().removeClass("active");
               $currentFieldItem=$(this);
               showFieldAttTab();
            });
            $("body").on("click",'a[data-toggle="tooltip"]',function(event){
                event.stopPropagation();
                $(this).closest(".field-item").remove();
            });
        };
        return {
            init: init
        };
    })();
    $.form = form;
});