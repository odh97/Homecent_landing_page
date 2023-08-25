/*main.js*/
$(document).ready(function(){
    //윈도우 시작하면 화면 맨위로 이동
    $("html,body").stop().animate({"scrollTop":0}, 1500, "swing");


let ht1 = 1080;
let ht2 = 952 + ht1;
let ht3 = 811 + ht2;
let ht4 = 890 + ht3;
let ht5 = 1243 + ht4;
let ht6 = 1243 + ht5;
let ht7 = 1356 + ht6;
let ht8 = 1022 + ht7;
let ht9 = 1457 + ht8;
let ht10 = 1080 + ht9;

    $("#content1 > section").addClass("on");

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();//현재scroll위치값
        var ht = $(window).height();

       //content1 
        if(scroll >= 0*ht1 && scroll  < ht1){
            //내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{
            //움직임 취소
            $("#content1 > section").removeClass("on");
        }
        
        //content2 
        if(scroll >= ht1 && scroll  < ht2){
            $("#content2 > section").addClass("on");
        }else{
            $("#content2 > section").removeClass("on");
        }
        
        //content3 
        if(scroll >= ht2-400 && scroll  < ht3){
            $("#content3 > section").addClass("on");
        }else{
            $("#content3 > section").removeClass("on");
        }

        //content4 
        if(scroll >= ht3-300 && scroll  < ht4){
            $("#content4 > section").addClass("on");
        }else{
            $("#content4 > section").removeClass("on");
        }

        //content5
        if(scroll >= ht4-500 && scroll  < ht5){
            $("#content5 > section").addClass("on");
        }else{
            $("#content5 > section").removeClass("on");
        }

        //content6 
        if(scroll >= ht5-200 && scroll  < ht6){
            $("#content6 > section").addClass("on");
        }else{
            $("#content6 > section").removeClass("on");
        }
        
        //content7 
        if(scroll >= ht6-200 && scroll  < ht7){
            $("#content7 > section").addClass("on");
        }else{
            $("#content7 > section").removeClass("on");
        }
        
        //content8 
        if(scroll >= ht7 && scroll  < ht8){
            $("#content8 > section").addClass("on");
        }else{
            $("#content8 > section").removeClass("on");
        }

        //content9 
        if(scroll >= ht8 && scroll  < ht9){
            $("#content9 > section").addClass("on");
        }else{
            $("#content9 > section").removeClass("on");
        }

        //content10 
        if(scroll >= ht9 && scroll  < ht10){
            $("#content10 > section").addClass("on");
        }else{
            $("#content10 > section").removeClass("on");
        }

    });//scroll


});