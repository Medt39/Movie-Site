const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=46a907563e82c04e0870483902fb4c7b&page=1'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=46a907563e82c04e0870483902fb4c7b&query="
const formDiv = document.querySelector('form')
const search = document.querySelector('#search-input')
const sectionDiv = document.querySelector('#section')


returnMovie(APILINK)
function returnMovie(url){
    fetch(url).then(res => res.json()).then((data)=>{
        data.results.forEach(element => {
            const row = document.createElement('div');
            row.setAttribute('class','row')
            const column = document.createElement('div');
            column.setAttribute('class','column')
            const card = document.createElement('div');
            card.setAttribute('class','card')
            const center = document.createElement('center');
            center.setAttribute('id','img-container')
            const img = document.createElement('img');
            img.setAttribute('id','img')
            const title = document.createElement('h3');
            title.setAttribute('id','title')

            card.appendChild(center)
            center.appendChild(img)
            card.appendChild(title)
            column.appendChild(card)
            row.appendChild(column)
            sectionDiv.appendChild(row)
            
            title.innerHTML = `${element.title}`
            img.src = IMGPATH + element.poster_path;
            if(element.poster_path == null){
                img.src = 'no-poster.png'
            }

            
        });
    })
}
formDiv.addEventListener('submit',e=>{
    e.preventDefault();
    sectionDiv.innerHTML = ''
    const searchItem = search.value
    if (searchItem){
        returnMovie(SEARCHAPI + searchItem);
        search.value = ''
    }
})
