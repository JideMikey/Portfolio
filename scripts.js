function subnmitFunction()
{
    var x=document.forms["contactForm"]["name"].value;
    var y=document.forms["contactForm"]["email"].value;
    var w=document.forms["contactForm"]["subject"].value;
    var z=document.forms["contactForm"]["body"].value;
    if(x==null || x=="" || y==null || y=="" || z==null || z=="" || w==null || w=="")
        {
            alert("Not all fields filled in correctly");
        }
        else{
            if(x!="webi")
            {
                if(y!="72626")
                {
                    alert("Email Sent!");
                }
                else{
                    alert("Something has gone terribly wrong!");
                }
            }
            else{
                alert("Email cannot be sent");
            }
        }
}
function initMap() {
    var mikeymedia = {lat: 52.629779, lng: -1.139284};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: mikeymedia
    });
    var marker = new google.maps.Marker({
      position: mikeymedia,
      map: map
    });
  }
  
  // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('mimis');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('sapphire');
  var modalImg = document.getElementById("img02");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('msJoycee');
  var modalImg = document.getElementById("img03");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('monique');
  var modalImg = document.getElementById("img04");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
  }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
