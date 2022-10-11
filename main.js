let container = document.querySelector('.container')

async function getMusic(){
    
    let url = '/music.json'

    try{
        let res = await fetch(url);
        return await res.json();
    }catch(error){
        console.log(error)
    }
}

async function renderMusic(){

    let music = await getMusic();
    let html = "";

    music.forEach( track => {
        
        let htmlSegment = `<div class="track">
                    <h1 class="title">${track.title}</h1>
                    <h1 class="title">${track.artist}</h1>
                    <h1 class="title">${track.genre}</h1>
        </div>`

        html += htmlSegment
    });

    let MusicSection = document.querySelector('.music-section');
    MusicSection.innerHTML = html

}

renderMusic();