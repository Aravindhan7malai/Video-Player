const video = document.querySelector('.video video');
const play = document.querySelector('.play i');
const durationTotal = document.querySelector('.total_timer');
const currentTimeTotal = document.querySelector('.current_time');
const myProgressBar = document.querySelector('.progress_in');
const progressOut = document.querySelector('.progress_out');
const volumeProgressOut = document.querySelector('.volumebar_out');
const volumeProgressIn = document.querySelector('.volumebar_in');
const volumeIcon = document.querySelector('#volume');
const Speed = document.querySelector('#speed');
const fullScreenButton = document.querySelector('#full_time');
const icon = fullScreenButton.querySelector('i');

play.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        play.classList.replace('bi-play-fill', 'bi-pause-fill');
    } else {
        video.pause();
        play.classList.replace('bi-pause-fill', 'bi-play-fill');
    }
});
video.addEventListener("click", function(){
    if (video.paused) {
        video.play();
    } else{
        video.pause();
    }
})

video.addEventListener("timeupdate", function () {
    let myCurrentTime = video.currentTime;
    let myDuration = video.duration;

    let progressPercent = (myCurrentTime / myDuration) * 100;
    myProgressBar.style.width = `${progressPercent}%`;

    // Duration
    const durationInMinutes = Math.floor(myDuration / 60);
    let durationInSeconds = Math.floor(myDuration % 60);
    if (durationInSeconds < 10) {
        durationInSeconds = `0${durationInSeconds}`;
    }
    durationTotal.innerText = `${durationInMinutes}:${durationInSeconds}`;

    // Current Time
    const currentInMinutes = Math.floor(myCurrentTime / 60);
    let currentInSeconds = Math.floor(myCurrentTime % 60);
    if (currentInSeconds < 10) {
        currentInSeconds = `0${currentInSeconds}`;
    }
    currentTimeTotal.innerText = `${currentInMinutes}:${currentInSeconds}/`;
});

progressOut.addEventListener('click', function (event) {
    const progressBarWidth = progressOut.offsetWidth;
    const clickX = event.offsetX;
    const duration = video.duration;
    const newTime = (clickX / progressBarWidth) * duration;
    video.currentTime = newTime;
});

volumeProgressOut.addEventListener('click', function (event) {
    const volumeProgressWidth = volumeProgressOut.offsetWidth;
    const volumeClickX = event.offsetX;
    const volumePercent = (volumeClickX / volumeProgressWidth) * 100;
    volumeProgressIn.style.width = `${volumePercent}%`;

    let volumeChanger = volumeClickX / volumeProgressWidth;
    video.volume = volumeChanger;
    
    if (video.volume === 0) {
        volumeIcon.classList.remove('bi-volume-up-fill', 'bi-volume-down-fill');
        volumeIcon.classList.add('bi-volume-mute-fill');
    } else if (video.volume < 0.5) {
        volumeIcon.classList.remove('bi-volume-up-fill', 'bi-volume-mute-fill');
        volumeIcon.classList.add('bi-volume-down-fill');
    } else {
        volumeIcon.classList.remove('bi-volume-mute-fill', 'bi-volume-down-fill');
        volumeIcon.classList.add('bi-volume-up-fill');
    }
    
});

volumeIcon.addEventListener('click', function () {
    if (volumeIcon.classList.contains('bi-volume-mute-fill')) {
        volumeIcon.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill');
        video.volume = 1;
        volumeProgressIn.style.width = `${100}%`;
    } else {
        volumeIcon.classList.replace('bi-volume-up-fill', 'bi-volume-mute-fill');
        video.volume = 0;
        volumeProgressIn.style.width = `${0}%`;
    }

    
});

Speed.addEventListener('change', function () {
    video.playbackRate = Speed.value;
});

fullScreenButton.addEventListener('click', function () {
    if (!document.fullscreenElement) {
        // Enter full-screen mode for the video element
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } 
        
        // icon.classList.remove('bi-fullscreen');
        // icon.classList.add('bi-fullscreen-exit');
    } else {
        // Exit full-screen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } 
      
        // icon.classList.remove('bi-fullscreen-exit');
        // icon.classList.add('bi-fullscreen');
    }
});


