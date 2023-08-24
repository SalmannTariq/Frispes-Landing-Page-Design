let Time = document.getElementById("carouselExampleAutoplaying");
const carousel = new bootstrap.Carousel(Time, {
  interval: 2000,
});
function changeImage() {
  const images = document.querySelectorAll(".check-arrow");
  images[1].src = "./images/checkAvailability.svg"; // Change this to the new arrow image
}
//  Space Slider
$(".space-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".slide-prev-image").click(function (e) {
  $(".space-slider").slick("slickPrev");
  updateBackgroundIndex();
  $(".slide-prev-img").attr("src", "./images/redArrow.svg");
  $(".slide-next-img").attr("src", "./images/rightArrow.svg");
});
$(".slide-next-image").click(function (e) {
  $(".space-slider").slick("slickNext");
  updateBackgroundIndex();
  $(".slide-next-img").attr("src", "./images/rightredArrow.svg");
  $(".slide-prev-img").attr("src", "./images/slickArrows.svg");
});
function changeArrowSpace(direction) {
  const prevButton = document.querySelector(".slide-prev-image img");
  const nextButton = document.querySelector(".slide-next-image img");

  if (direction === "prev") {
    prevButton.src = "./images/redArrow.svg";
    prevButton.style.transform = "rotate(180deg)";
    nextButton.src = "./images/rightArrow.png";
  } else if (direction === "next") {
    nextButton.src = "./images/rightredArrow.png";
    prevButton.src = "./images/leftArrow.svg";
    prevButton.style.transform = "rotate(0deg)";
  }
}
// Our Space image change on mouse over
function resetImage(event) {
  const parentElement = event.currentTarget;
  const secondImage = parentElement.querySelector(".check-arrow");
  secondImage.src = "./images/arrow.svg";
  secondImage.style.width = ""; // Reset width to default
}

function changeImage(event) {
  const parentElement = event.currentTarget;
  const secondImage = parentElement.querySelector(".check-arrow");
  secondImage.src = "./images/checkAvailability.svg";
  secondImage.style.width = "70%";
}

const imageContainers = document.querySelectorAll(".our-space-carousel");
imageContainers.forEach((container) => {
  container.addEventListener("mouseover", changeImage);
  container.addEventListener("mouseout", resetImage);
});
// ------------------------------
function imageChange1() {
  var image = document.querySelector(".image-change");
  image.src = "./images/cafe.svg";
}

function imageChange2() {
  var image = document.querySelector(".image-change");
  image.src = "./images/minimalSpace.svg";
}

function imageChange3() {
  var image = document.querySelector(".image-change");
  image.src = "./images/productivity.svg";
}

function imageChange4() {
  var image = document.querySelector(".image-change");
  image.src = "./images/minimalSpace.svg";
}

function imageChange5() {
  var image = document.querySelector(".image-change");
  image.src = "./images/productivity.svg";
}
// -------------------------------
// Space gallery Slider Center Mode
$(".space-gallery-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,

  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".space-gallery-slider").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    // Reset height of all images
    $(".space-gallery-slider .slick-slide img").css("transform", "scaleY(1)");

    // Increase the height of the left-center image
    const centerSlide = $(".space-gallery-slider .slick-center img");
    const leftSlide = $(".space-gallery-slider .slick-slide:not(.slick-center)")
      .eq(nextSlide)
      .find("img");
    if (leftSlide.length > 0) {
      leftSlide.css("transform", "scaleY(5)");
    }
  }
);
// Previous image click handler
$(".space-prev-image").click(function (e) {
  $(".space-gallery-slider").slick("slickPrev");
  // Update index or do other necessary actions
  $(".space-prev-image").attr("src", "./images/redArrow.svg");
  $(".space-next-image").attr("src", "./images/rightArrow.svg");
});

// Next image click handler
$(".space-next-image").click(function (e) {
  $(".space-gallery-slider").slick("slickNext");
  // Update index or do other necessary actions
  $(".space-next-image").attr("src", "./images/rightredArrow.svg");
  $(".space-prev-image").attr("src", "./images/slickArrows.svg");
});

function changeArrow(direction) {
  const prevButton = document.querySelector(".space-prev-image img");
  const nextButton = document.querySelector(".space-next-image img");

  if (direction === "prev") {
    prevButton.src = "./images/redArrow.svg";
    prevButton.style.transform = "rotate(180deg)";
    nextButton.src = "./images/rightArrow.png";
  } else if (direction === "next") {
    nextButton.src = "./images/rightredArrow.png";
    prevButton.src = "./images/leftArrow.svg";
    prevButton.style.transform = "rotate(0deg)";
  }
}
// Who USe frispes Slider
$(".logos-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Reviews Card Slider
$(".cards-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: null,
  nextArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".slide-prev-cards").click(function (e) {
  $(".cards-slider").slick("slickPrev");
  updateBackgroundIndex();
  $(".slide-prev-img").attr("src", "./images/redArrow.svg");
  $(".slide-next-img").attr("src", "./images/rightArrow.svg");
});
$(".slide-next-cards").click(function (e) {
  $(".cards-slider").slick("slickNext");
  updateBackgroundIndex();
  $(".slide-next-img").attr("src", "./images/rightredArrow.svg");
  $(".slide-prev-img").attr("src", "./images/slickArrows.svg");
});
// function Prev() {
//   let prev = document.querySelector(".slide-prev-img");
//   prev.src = "./images/rightArrow.png";
// }
// Answers Portion
function toggleCard(card, isHovered) {
  const cardBody = card.querySelector(".card-body");
  const arrowImage = card.querySelector(".downward-arrow");

  if (isHovered) {
    card.style.backgroundColor = "#FF5722";
    cardBody.style.color = "white";
    arrowImage.src = "./images/CTA.svg";
  } else {
    card.style.backgroundColor = "";
    cardBody.style.color = "";
    arrowImage.src = "./images/downwardArrow.svg";
  }
}
