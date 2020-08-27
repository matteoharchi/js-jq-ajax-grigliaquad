$(document).ready(function(){
    for (var i = 0; i < 35; i++) {
        $(".container").append('<div class="square"></div>')
    }

    $(".square").click(function(){
        var selected = $(this);
        var newSquare = $(".square").clone();
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function(randomNumber){
                    $(selected).text(randomNumber.response);
                    if (randomNumber.response <= 5) {
                        selected.removeClass("green");
                        selected.addClass("yellow");
                    }else if (randomNumber.response > 5) {
                        selected.removeClass("yellow");
                        selected.addClass("green");
                    }

                }
            }
        )

    })
})
