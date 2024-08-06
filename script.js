const video = document.querySelector('.video video');
const play = document.querySelector('.play i');
const durationTotal = document.querySelector('.total_timer');
const currentTimeTotal = document.querySelector('.current_time');
const myProgressBar = document.querySelector('.progress_in');
const progressOut = document.querySelector('.progress_out');
const volumeProgressOut = document.querySelector('.volumebar_out');
const volumeProgressIn= document.querySelector('.volumebar_in');
const volumeIcon=document.querySelector('#volume');


play.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        play.classList.replace('bi-play-fill', 'bi-pause-fill');
    } else {
        video.pause();
        play.classList.replace('bi-pause-fill', 'bi-play-fill');
    }
});

video.addEventListener("timeupdate", function() {
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

progressOut.addEventListener('click', function(event) {
    const progressBarWidth = progressOut.offsetWidth;
    const clickX = event.offsetX;
    const duration = video.duration;
    const newTime = (clickX / progressBarWidth) * duration;
    video.currentTime = newTime;
    
});
volumeProgressOut.addEventListener('click', function(event){
    // console.log(event)
    const volumeProgressWidth=volumeProgressOut.offsetWidth;
    const volumeClickX=event.offsetX;
    const volumePercent=(volumeClickX/volumeProgressWidth)*100;
    volumeProgressIn.style.width=`${volumePercent}%`

    let volumeChanger=volumeClickX/volumeProgressWidth
    video.volume=volumeChanger

})
volumeIcon.addEventListener('click', function(){
    video.volume=0;
    // bi-volume-up-fill
    volumeIcon.classList.replace('bi-volume-up-fill', 'bi-volume-mute-fill')
    // volumeIcon.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill')
}
)
