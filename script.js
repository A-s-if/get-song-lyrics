function search(){
    const inp=document.getElementById('search-inp').value;
    const url=`https://api.lyrics.ovh/suggest/${inp}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>song(data.data))
    const song=(para)=>{
        
        const container=document.getElementById('audio-div');
        container.innerHTML='';
        para.map(song=>{
            const div=document.createElement('div');
            div.id='main'
            div.innerHTML=`
                <img src="${song.album.cover}"
                <br>
                <h1>Title:${song.album.title}</h1><button id='lyrics-btn' onclick="getLyrics('${song.artist.name}','${song.album.title}')">lyrics</button>
                <h1>Artist name:${song.artist.name}</h1>
                    <audio src="${song.preview}" controls>
            `

            container.appendChild(div)
        })

        
        
    }
}




const getLyrics=(artist,title)=>{
    const url=`https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(response=>response.json())
    .then(data=>result (data))

const result=(para)=>{
    const container=document.getElementById('audio-div');
    container.innerHTML='';
    const div=document.createElement('div');
    div.id='main';
    div.innerHTML=`
    <h1>${title} songs lyrics:</h1>
    <h3>${para.lyrics}</h3>
    `
    container.appendChild(div)
}



}




document.getElementById('search-inp').addEventListener('keypress',function(){
    if(event.keyCode===13){
        document.getElementById('search-btn').click()
    }
})