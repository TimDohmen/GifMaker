import Gif from "../models/Gif.js";


let _gifApi = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs/trending?api_key=GKVvQKzGg46Nc9BfWt7GyJ5GJJlfK49i"
    // baseURL: "bcw-sandbox.herokuapp.com/api/Timm/gifs"
})

let _sandBox = axios.create({
    baseURL: "sandbox:bcw-sandbox.herokuapp.com/api/Timm/gifs"
})


//Private
let _state = {
    apiGifs: [],
    currentGif: {},
    myGifs: []

}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiGifs: [],
    currentGif: [],
    myGifs: []

}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class ValuesService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    get Gif() {
        return _state.apiGifs.map(g => new Gif(g))
    }

    getApiGifs() {
        _gifApi.get()
            .then(res => {
                let apiData = res.data.data.map(g => new Gif(g))
                _setState('apiGifs', apiData)
            })
    }
    get currentGif() {
        return new Gif(_state.currentGif)
    }
    getOne(id) {
        //TODO 
        // find the gif from your array of gifs in the state that has this id
        let gif = _state.apiGifs.find(g => g._id == id)
        _setState('currentGif', gif)
    }
}
