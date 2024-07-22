const video=document.querySelector('.video video')
const play=document.querySelector('.play i');
play.addEventListener('click', function(){
    if(video.paused){
        video.play();
        play.classList.replace('bi-play-fill', 'bi-pause-fill')
    }else{
        video.pause();
        play.classList.replace('bi-pause-fill', 'bi-play-fill')
    }
})
