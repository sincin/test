$(".content ul li").click(function () {
    var txt = $(this).html();
    $(".contain").html(txt);
    alert(txt);
})
