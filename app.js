
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})

let form = document.querySelector('.form-control');
// console.log(form)
let un = document.querySelector("#username")
let pass = document.querySelector("#password")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let username = un.value;
    let password = pass.value;
    console.log(username, password);
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        
    }
})


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = elem.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});