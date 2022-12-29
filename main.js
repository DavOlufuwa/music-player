window.onload =()=>{
    const songImg = document.getElementById('song-image');
    const songTitle = document.getElementById('song-title');
    const artist = document.getElementById('song-artist');
    const songNextUp = document.getElementById('song-next-up');

    const play = document.getElementById('play-btn')
    const playBtnIcon= DocumentFragment.getElementById('play')
    const prevBtn= DocumentFragment.getElementById('prev-btn')
    const nextBtn= DocumentFragment.getElementById('next-btn')
    const audioPlayer = document.getElementById('music-player')



    let currentSong;
    let nextSongIndex;

    let songs = [

        {
            title: 'Asiwaju',
            artist: 'Ruger',
            song_path: './songs/asiwaju.mp3',
            cover:'./cover/ruger.jpg'
        },
        {
            title: 'Mama Maradona',
            artist: 'Vector ft Wande Coal',
            song_path: './ongs/mama-maradona.mp3',
            cover:'./cover/vector.jpeg'
        },
        {
            title: 'Sugar',
            artist: 'Wizkid ft Ayra Starr',
            song_path: './songs/wiz-ayra.mp3',
            cover:'./cover/weez.jpg'
        }
    ]


    play.addEventListener('click', togglePlaySong)
    InitialisePlayer()


    function initPlayer(){
        currentSong =0
        nextSongIndex = currentSong + 1

        updatePlayer()
    }

    function updatePlayer(){
        let song = songs[currentSong];
        songImg.style="background-image: url('" + songs.song_path + "')";
        songTitle.innerText= songs.title

        songNextUp.innerText = songs[nextSongIndex].title + " by " + songs[nextSongIndex].artist

        audioPlayer.src = songs.song_path
    }


    function togglePlaySong(){
        if(audioPlayer.paused){
            playBtnIcon.classList.remove('fa-play')
            playBtnIcon.classList.add("fa-pause")
        }else{
            audioPlayer.pause()
            playBtnIcon.classList.remove('fa-pause')
            playBtnIcon.classList.add("fa-play")

        }
    }

}