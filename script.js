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
const myProgressBar=document.getElementsByClassName('progress_in')[0]

video.addEventListener("timeupdate",function(event){
    // console.log(event)
    let mycurrentTime=video.currentTime
    let myDuration=video.duration
    // console.log(mycurrentTime)
    // console.log(myDuration)
    let progresspercent=(mycurrentTime/myDuration) *100
    console.log(progresspercent)
    myProgressBar.style.width = `${progresspercent}%`
})
