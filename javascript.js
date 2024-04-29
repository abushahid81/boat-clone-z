$('#slider-2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:3,
            // nav:false
        },
        1300:{
            items:6,
            // nav:true,
            loop:true
        }
    }
})