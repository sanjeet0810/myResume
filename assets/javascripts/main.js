$(document).ready(function()
{
    $("#main-nav a").click(function()
    {
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $(".types-effect").typed({
        strings: ["Full Stack Developer", "Designer"],
        typespeed: 100,
        backspeed: 60, 
        loop : true
    })
});