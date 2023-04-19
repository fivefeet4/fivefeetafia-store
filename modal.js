
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  let closeBtn = document.getElementsByClassName("close")[0];

  // When the user clicks on a product item
  let productItems = document.getElementsByClassName("product-item");
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].addEventListener("click", function() {
      var imgSrc = this.getElementsByTagName("img")[0].src;
      let price = this.getElementsByTagName("p")[0].textContent;
      let name = this.getElementsByTagName("h3")[0].textContent;
      document.getElementById("modal-image").src = imgSrc;
      document.getElementById("modal-details").innerHTML = "<h2>" + name + "</h2><p>" + price + "</p>";
      modal.style.display = "block";
    });
  }

  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // var video = document.getElementById("myVideo");
  // video.removeAttribute("controls");
  
  // var playButton = document.getElementById("playButton");
  // playButton.addEventListener("click", function() {
  //     video.play();
  // });
  
  // video.addEventListener('ended', function() {
  //     video.currentTime = 0;
  //     video.play();
  // }, false);
  