
let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
const song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")




console.log(song_play)

let songs_list = [
    {
        name : 'Donu Donu',
        Image : 'images/donu_donu.png',
        Song : 'music/donu-donu.mp3',
        Singer : 'Aniruth'
    },
    {
        name : 'Love Story',
        Image : 'images/taylor_swift_love_story.jpg',
        Song : 'music/Taylor-Swift-Love-Story.mp3',
        Singer : 'Taylor Swift'
    },
    {
        name : 'Nejamellam',
        Image : 'images/ethir.jpg',
        Song : 'music/nejamela-maranthu-pochu.mp3',
        Singer : 'Aniruth'
    },
    {
        name : 'Wildest Dreams',
        Image : 'images/wildest_dreams_taylor.jfif',
        Song : 'music/Taylor-Swift-Wildest-Dreams.mp3',
        Singer : 'Taylor Swift'
    },
    {
        name : 'Mnneikal koothadum',
        Image : 'images/minelkasl.jpg',
        Song : 'music/minalkal-koothadum.mp3',
        Singer : 'G.V. Prakash Kumar.'
    }
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        song_play.classList.add('pau');
        flag=true;
        console.log(flag)
       
    }
    else{
        audio.pause()
        song_play.classList.add('play');
        flag=false;
        console.log(flag)
       
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
}
)




