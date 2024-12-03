
document.addEventListener('DOMContentLoaded', function () {
    var dropdownButton = document.getElementById("dropbtn");
    var dropdownContent = document.getElementById("dropdownContent");
  
    if (dropdownButton && dropdownContent) {
      dropdownButton.addEventListener('click', function () {
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  });

var prevScrollpos = window.pageYOffset;
var isHidden = false;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 500) {
        isHidden = true
        if (isHidden == true) {
            document.getElementById("topnav").style.top = "-150px";
        }
    } else {
        document.getElementById("topnav").style.top = "0";
        isHidden = false;
    }

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("topnav").style.top = "0";
        isHidden = false;
    }

    prevScrollpos = currentScrollPos;
};

function backtoTop() {
    document.getElementById("topnav").style.top = "0";
    isHidden = false;
}
