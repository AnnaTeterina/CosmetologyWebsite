$(document).ready(function() {
    $(".slider").slick({
      arrows: true, //стрелки
      dots: false, //точки снизу слайдера
      slidesToShow: 3, //сколько слайдов показыват
      slidesToScroll: 1, //сколько слайдов перелистывает при нажатии на стрелку
      autoplay: false, //автоперелистывание
      speed: 900, //скорость перелистывания

      responsive: [{
          breakpoint: 550, //адаптация под мобильное устройство
          settings: {
          slidesToShow: 1, 
          slidesToScroll: 1
          }
      }]
    });
});