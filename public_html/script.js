$("document").ready(function(){
   $(".intro").css("background-color", "blue");
   
   $('p:last').css({"background-color": "purple", "color": "white"});
   
   $('#face').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   
   $('h3').bind('click', mouseClick);
         
   $('#replaceWText').bind('click', replaceWText);
  
   $('#randPara').bind('click', addAPara);
   
   $('#removePara').bind('click', removeAPara);
   
   $('#hidePic').bind('click', hideTheImage);
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


function removeAPara(){
    $('#randPara p:last').remove();
}

function addAPara(){
    $('#randPara').append('<p>Added</p>');
}

function replaceWText(){
    $('#randPara').append('<p>Yay. So exciting.</p>');
}

function hideTheImage(){
    $('#face').hide('puff', {}, 2500);
}