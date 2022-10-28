$('.owl-carousel').owlCarousel({
    items: 9,
    loop:true,
    lazyLoad: true,
    margin:16,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})