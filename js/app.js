var modal = document.getElementById("myModal1");
  
  var img = document.getElementById("myImg1");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() { 
    modal.style.display = "none";
  }

///////////////////////////////////////////////////////////  

var modal = document.getElementById("myModal2");
  
  var img = document.getElementById("myImg2");
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  var span = document.getElementsByClassName("close")[1];
  
  span.onclick = function() { 
    modal.style.display = "none";
  }

  ///////////////////////////////////////////////////////////  

var modal = document.getElementById("myModal3");
  
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[2];

span.onclick = function() { 
  modal.style.display = "none";
}

 ///////////////////////////////////////////////////////////  

 var modal = document.getElementById("myModal4");
  
 var img = document.getElementById("myImg4");
 var modalImg = document.getElementById("img04");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 
 var span = document.getElementsByClassName("close")[3];
 
 span.onclick = function() { 
   modal.style.display = "none";
 }

  ///////////////////////////////////////////////////////////  

var modal = document.getElementById("myModal5");
  
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[4];

span.onclick = function() { 
  modal.style.display = "none";
}

 ///////////////////////////////////////////////////////////  

 var modal = document.getElementById("myModal6");
  
 var img = document.getElementById("myImg6");
 var modalImg = document.getElementById("img06");
 var captionText = document.getElementById("caption");
 img.onclick = function(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }
 
 var span = document.getElementsByClassName("close")[5];
 
 span.onclick = function() { 
   modal.style.display = "none";
 }

//  carousel

$(".left").click(function () { 
	var leftPos = $('.carousel').scrollLeft();
	$(".carousel").animate({scrollLeft: leftPos - 300}, 800);
  });
  
  $(".right").click(function () { 
	var leftPos = $('.carousel').scrollLeft();
	$(".carousel").animate({scrollLeft: leftPos + 300}, 800);
  });