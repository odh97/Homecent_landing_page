/*main.js*/
$(document).ready(function(){
    //윈도우 시작하면 화면 맨위로 이동
    $("html,body").stop().animate({"scrollTop":0}, 1500, "swing");

/*
    var contht1 = $("#content1").height();
    var contht2 = $("#content2").height();
    var contht3 = $("#content3").height();
    var contht4 = $("#content4").height();
    var contht5 = $("#content5").height();
    var contht6 = $("#content6").height();
    var contht7 = $("#content7").height();
    var contht8 = $("#content8").height();
    var contht9 = $("#content9").height();
    var contht10 = $("#content10").height();
*/

    //브라우저의 높이값을 div의 높이값으로
    var ht = $(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("#container > div").height(ht);
    });

    var start = setTimeout(function(){
        $("#content1 > section").addClass("on");
    },500);

/*
#content1{min-height: 1080px;}
#content2{min-height: 952px;}
#content3{min-height: 811px;}
#content4{min-height: 890px;}
#content5{min-height: 1243px;}
#content6{min-height: 1243px;}
#content7{min-height: 1356px;}
#content8{min-height: 1022px;}
#content9{min-height: 1457px;}
#content10{min-height: 1080px;}
*/


    
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();//현재scroll위치값
        var ht = $(window).height();

       //content1 
        if(scroll >= 0*ht && scroll  < 1*ht){
            //내용물 움직임 시작
            $("#content1 > section").addClass("on");
        }else{
            //움직임 취소
            $("#content1 > section").removeClass("on");
        }
        
        //content2 
        if(scroll >= 1*ht && scroll  < 2*ht){
            $("#content2 > section").addClass("on");
        }else{
            $("#content2 > section").removeClass("on");
        }
        
        //content3 
        if(scroll >= 2*ht && scroll  < 3*ht){
            $("#content3 > section").addClass("on");
        }else{
            $("#content3 > section").removeClass("on");
        }

        //content4 
        if(scroll >= 3*ht && scroll  < 4*ht){
            $("#content4 > section").addClass("on");
        }else{
            $("#content4 > section").removeClass("on");
        }

        //content5
        if(scroll >= 4*ht && scroll  < 5*ht){
            $("#content5 > section").addClass("on");
        }else{
            $("#content5 > section").removeClass("on");
        }

        //content6 
        if(scroll >= 5*ht && scroll  < 6*ht){
            $("#content6 > section").addClass("on");
        }else{
            $("#content6 > section").removeClass("on");
        }
        
        //content7 
        if(scroll >= 6*ht && scroll  < 7*ht){
            $("#content7 > section").addClass("on");
        }else{
            $("#content7 > section").removeClass("on");
        }
        
        //content8 
        if(scroll >= 7*ht && scroll  < 8*ht){
            $("#content8 > section").addClass("on");
        }else{
            $("#content8 > section").removeClass("on");
        }

        //content9 
        if(scroll >= 8*ht && scroll  < 9*ht){
            $("#content9 > section").addClass("on");
        }else{
            $("#content9 > section").removeClass("on");
        }

        //content10 
        if(scroll >= (9*ht)+300 && scroll  < (10*ht)+500){
            $("#content10 > section").addClass("on");
        }else{
            $("#content10 > section").removeClass("on");
        }

    });//scroll


});