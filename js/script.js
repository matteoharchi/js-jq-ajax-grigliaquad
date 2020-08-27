$(document).ready(function(){
    $(".square").click(function(){
        var selected = $(this);
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(randomNumber){
                    $(selected).text(randomNumber.response);
                    if (randomNumber.response <= 5) {
                        selected.addClass("yellow");
                    }else if (randomNumber.response > 5) {
                        selected.addClass("green");
                    }
                }
            }
        )
    })
})
