//document ready calls every following function for the document.
$("document").ready(function(){
    //This .intro changes the background color to blue without changing CSS.
   $(".intro").css("background-color", "blue");
   //p last allows you to chnage the anything on the last p without CSS.
   $('p:last').css({"background-color": "purple", "color": "white"});
   //mouseover is pretty much hovering your mouse over whatever is specified. In this case it's the image.
   $('img').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
   //
   $('h2').bind('click', mouseClick);
         
   $('#replaceWText').bind('click', replaceWText);
  
   $('#randPara').bind('click', addAPara);
   
   $('#removePara').bind('click', removeAPara);
   
   $('#hidePic').bind('click', hideTheImage);
   
   $('#superHumans').accordion({header: "h3"});
   
   $('#tabs').tabs();
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
    $('img').hide('explode', {}, 2500);
}