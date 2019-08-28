export default class Gif {


    constructor(data) {
        this.title = data.title
        this._id = data._id || data.id
        // this.myUrl = data.myUrl || `https://cors-anywhere.herokuapp.com//` + data.embed_url
        this.myUrl = data.myUrl || data.embed_url
    }

    get Template() {
        return `
        <div class ="col-3"
        <div class="card">
            <iframe src="${this.myUrl}" frameborder="0"></iframe>
            
        
        
        `
    }
}