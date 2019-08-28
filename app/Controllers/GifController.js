import GifService from "../Services/GifService.js";

//Private
let _gifService = new GifService()


function _drawApiGifs() {
    let template = ''

    _gifService.Gif.forEach(g => template += g.Template + `<button class="btn btn-primary" onclick="app.controllers.gifController.getOne('${g._id}')">Select</button> </div></div>`)

    document.getElementById("api-Gifs").innerHTML = template

}

//  let pokemon = _pokeService.ApiPokemon
//     let template = '<ol>'
//     pokemon.forEach(p => {
//         template += `<li onclick="app.controllers.pokeController.getOne('${p.name}')">${p.name}</li>`
//     })
//     document.getElementById('api-pokemon').innerHTML = template + "</ol>"

function _drawCurrentGif() {
    document.getElementById("current-Gif").innerHTML = _gifService.currentGif.Template + "</div></div>"
}
//Public
export default class GifController {
    constructor() {
        //NOTE Register all subscribers
        _gifService.addSubscriber('apiGifs', _drawApiGifs)
        _gifService.addSubscriber('currentGif', _drawCurrentGif)

        //NOTE Retrieve data
        _gifService.getApiGifs()

    }
    getOne(id) {
        _gifService.getOne(id)

    }

}   