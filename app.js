$('#btn').click(function() {
    total = 440 * 80;
    total = total / 100;
    total = 440 - total;
    console.log(total);
    $("#temp-value").css("stroke-dashoffset", total);
})


$('#btn2').click(function() {
    $('#ex1').modal();
})