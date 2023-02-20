const player = document.querySelector('.audio'),
      play = document.querySelector('.play'),
      pause = document.querySelector('.pause'),
      file = document.querySelector('.file'),
      next = document.querySelector('.next_btn')

const songs = ['1','2','3','4','5']
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let songIndex = getRandomInt(songs.length);
function Song(x) {
    file.src = x +'.mp3'  
}
Song(songs[songIndex])
document.addEventListener('DOMContentLoaded', () => {
    let audio = document.querySelector('audio');
    
    audio.volume = 0.6;
}, false);
function playSong() {
    file.play()
    play.classList.add('hidden')
    pause.classList.remove('hidden')

}
function pauseSong() {
    file.pause()
    play.classList.remove('hidden')
    pause.classList.add('hidden')
}
play.addEventListener('click', () => {
    file.currentTime = Math.random() * (file.duration - 1) + 1;
    playSong();
})
pause.addEventListener('click', () => {
    pauseSong()
})
function nextSong() {
    songIndex++
    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    Song(songs[songIndex])
    playSong()
}
 next.addEventListener('click', () => {
    nextSong()
    playSong()
})
file.addEventListener('ended', nextSong)