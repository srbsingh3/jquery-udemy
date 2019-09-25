$("document").ready(function(){

// $("h1").css("border", "2px solid blue");

$("h1:last").css("border", "2px solid blue");

$("#3").css("border", "2px solid red");

$(".2").css("border", "2px dotted green")

var newPara = $("<p>");

newPara.append("<i>Hello Rock n Roll!</i>");

newPara.css("font-size", "60px");

$("#bonobo").html(newPara);

$("#box").on("mouseover", whenMouseisClicked);
$("#box").on("mouseleave", whenMouseLeaves);

function whenMouseisClicked(){
    $("#box").html("<h4>Hey you clicked!</h4>");
}

function whenMouseLeaves(){
    $("#box").html("<h4>Hey where are you going?</h4>");
}

});