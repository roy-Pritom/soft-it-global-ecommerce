export const CategorySettings = {
  dots: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true, // Centers the current slide and adds spacing
  centerPadding: "10px",
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerPadding: "5px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "5px",
      },
    },
  ],
};
