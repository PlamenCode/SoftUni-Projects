function gramophone(bandName, albumName, songName){
    let songDurationInSec = (albumName.length * bandName.length) * songName.length / 2;
    let rotation = Math.ceil(songDurationInSec / 2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}
gramophone('Black Sabbath', 'Paranoid','War Pigs')