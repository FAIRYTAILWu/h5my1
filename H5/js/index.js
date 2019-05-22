let $audio = $('#audio');
let $music_pic = $('.music_pic')


let isRunning = false;


$music_pic.on('touchend', function () {
    if (isRunning) {
        $(this).css({
            animationPlayState: 'running'
        });
        isRunning = false;


        $audio[0].play();

    } else {
        $(this).css({
            animationPlayState: 'paused'
        })
        isRunning = true;

        $audio[0].pause();


    }
})

$audio[0].addEventListener('canplay', function () {

})

function QR() {
    let code = document.getElementById('QR_code')

    let code_bg = document.getElementById('QR_code_bg')
    code.onmouseenter = function () {
        code_bg.style.display = 'block'

    }
    code.onmouseleave = function () {
        code_bg.style.display = 'none'

    }
}
QR()

let $show = $('.swiper-slide')

var swiper = new Swiper('.swiper-container', {
    speed: 1400,

    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChangeTransitionStart: function () {
            // console.log(this.activeIndex)
            slideshow(this.activeIndex)





        },
      },


    
   

});




function slideshow(index){
    console.log(index)
    $show.eq(index - 1).addClass('cur').siblings().removeClass('cur');


    let one = $('.one')
    let oneA = $(one[1]);

        
    let three = $('.three')

    
    if(index == 4){
        oneA.addClass('cur')
    }else{
        oneA.removeClass('cur')
    }

    
    if(index == 0 ){
        three.addClass('cur')
    }else if(index == 3){
        three.addClass('cur')
    }else{
        three.removeClass('cur')
    }


        

}

