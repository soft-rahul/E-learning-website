function changeImage() {
  const imageOne = document.querySelectorAll(".img1").style;

  const imageTwo = document.querySelectorAll(".img2").style;
  const imageThree = document.querySelectorAll(".img3").style;
  if (imageOne.display === "block") {
    imageOne.display = "none";
    imageTwo.display = "block";
    imageThree.display = "none";
  } else if (imageTwo.display === "block") {
    imageOne.display = "none";
    imageTwo.display = "none";
    imageThree.display = "block";
  } else if (imageThree.display === "block") {
    imageOne.display = "block";
    imageTwo.display = "none";
    imageThree.display = "none";
  }
  console.log("working");
}

setInterval(1000,changeImage());
