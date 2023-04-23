$(document).ready(function(){
  $('.center').slick({
    centerMode: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
        
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
        
      }
      
    ]
  });
});


const btn = document.querySelector('.footer__btn');
const btn2 = document.querySelector('.btn-black');
const btn3 = document.querySelector('.double');
   

    btn.addEventListener('click', (e) => {
    e.preventDefault();
    const header = document.querySelector('header');
    header.scrollIntoView({behavior: "smooth"}); });  

    btn2.addEventListener('click', (e) => {
    e.preventDefault();
    const information = document.querySelector('#information');
    information.scrollIntoView({behavior: "smooth"});});

    btn3.addEventListener('click', (e) => {
    e.preventDefault();
    const information = document.querySelector('#information');
    information.scrollIntoView({behavior: "smooth"});});
    


