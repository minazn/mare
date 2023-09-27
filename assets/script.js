const HTML = {
    hamburger: document.getElementById('hamburger'),
    maracatuTitle: document.getElementById('maracatu'),
    renascenteTitle: document.getElementById('renascente'),
    videowrap: document.querySelector('.video-wrap'),
    video: document.querySelector('.video-wrap .video')
}

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

HTML.hamburger.addEventListener('click', ()=>{
    document.body.classList.toggle('navopen');
    
});

const animateTitle = (element) =>{
    for (let i = 0; i < element.children.length; i++) {
        element.children[i].style.animationDelay = (i*200).toString() + 'ms';
        
    }
}

animateTitle(HTML.maracatuTitle);
animateTitle(HTML.renascenteTitle);


window.addEventListener('scroll', ()=>{
    document.body.classList.add('scrolled');
    document.getElementById('logo').classList.add('shrink');
    document.getElementById('mare').classList.add('toleft');
    if (HTML.videowrap.getBoundingClientRect().top <= sizes.height*0.5) {
        HTML.video.classList.add('active')
    }
});

$(document).ready(function(){

    $('#year-list li').on('click', (e)=>{
        var thisElement = e.target.getAttribute('class');
        $('li.' + thisElement).addClass('active');
        $('li.' + thisElement).siblings().removeClass('active');
        $('#' + thisElement).siblings().removeClass('active');
        $('#' + thisElement).addClass('active');
    });

    setInterval(function () {
        
        if ($('#img-slider img.active').next().length) {
            $('#img-slider img.active').removeClass('active').next().addClass('active')
        } else {
            $('#img-slider img.active').removeClass('active')
            $('#img-slider img:first-child').addClass('active')
        }
    },1800);
  
}); 


