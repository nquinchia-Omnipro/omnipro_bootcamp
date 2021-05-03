require(['jquery', 'jquery/ui'], function($){
    $(document).ready(function(){
        $("#tab-register-button").click(function() {
            $("#tab-register-button").addClass("current");
            $("#tab-login-button").removeClass("current");
            $("#tab-register").addClass("active");
            $("#tab-login").removeClass("active");
        })
        $("#tab-login-button").click(function() {
            $("#tab-login-button").addClass("current");
            $("#tab-register-button").removeClass("current");
            $("#tab-login").addClass("active");
            $("#tab-register").removeClass("active");
        })
        $("#register-button").click(function(){
            $(".container").addClass("inactive");
            $(".success").css("display", "flex" );
        })
    })
});