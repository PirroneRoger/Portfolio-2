$("document").ready(function(){
   $(".intro").css("background-color", "blue");
   
   $('p:last').css({"background-color": "purple", "color": "white"});
   
   $('#face').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h3').bind('click', mouseClick);
   
   $('#button1').bind('click', mouseClick);
   
   $('#button2').bind('click', mouseClick);
   
   $('#replaceWHtml').bind('click', replaceWHtml);
   
   $('#replaceWText').bind('click', replaceWHtml);
});

function mouseOverMe(){
    $("#alter").html("Smiley does not like the mouse on his face. STOP IT!!!!");
}

function mouseOutMe(){
    $("#alter").html("Go touch Smiley. He's nice...");
}

function mouseClick(){
    $('p').html('YOU BROKE IT!!!!!!!!!!!!!!');
}

function replaceWHtml(){
    $('#button1').html('TEST WORKED?!?!?!');
}

function replaceWText(){
    $('#button1').text('TEST WORKED?!?!?!');
}

function replaceWHtml(){
    $('#button2').html('');
}

function replaceWText(){
    $('#button2').text('');
}