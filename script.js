console.log("Welcome to Spotify")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'))
let songs = [
{songName : "Tera Fitoor" ,filePath: "Songs/1.mp3", coverPath: "covers/1.jpg"},
{songName : "SubhanAllah" ,filePath: "Songs/2.mp3", coverPath: "covers/2.jpg"},
{songName : "Zalima" ,filePath: "Songs/3.mp3", coverPath: "covers/3.jpg"},
{songName : "Tu jo mila" ,filePath: "Songs/4.mp3", coverPath: "covers/4.jpg"},
{songName : "tera hone laga hoon" ,filePath: "Songs/5.mp3", coverPath: "covers/5.jpg"},
{songName : "surili ankhiyo wale" ,filePath: "Songs/6.mp3", coverPath: "covers/6.jpg"},
{songName : "Channa Ve" ,filePath: "Songs/7.mp3", coverPath: "covers/7.jpg"},
{songName : "Khamoshiya" ,filePath: "Songs/8.mp3", coverPath: "covers/8.jpg"},
{songName : "Aayat" ,filePath: "Songs/9.mp3", coverPath: "covers/9.jpg"},
{songName : "Kun Faya Kun" ,filePath: "Songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();
// Handle play/pause click
masterplay.addEventListener('click',()=>{
   if (audioElement.paused || audioElement.currentTime<=0) {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1
   } 
    else {
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0
   }
    
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //updates seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})
})
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex = 0
    }
    else{
      songIndex +=1;
    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
     audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex = 0
    }
    else{
      songIndex -=1;
    }
    audioElement.src =`Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})