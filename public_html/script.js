$("document").ready(function(){
   $(".intro").css("background-color", "blue");
   
   $('p:last').css({"background-color": "purple", "color": "white"});
   
   $('#face').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   
   
});

function mouseOverMe(){
    console.log("mouseover");
    $("#alter").html("You put the mouse over the smiley face.");
}

function mouseOutMe(){
    console.log("mouseout");
    $("#alter").html("You do not have the mouse over the smiley face.");
}