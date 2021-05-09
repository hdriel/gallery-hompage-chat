class Image {
    constructor({id, title, author, description, url}) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUri = url;
    }
}

export default Image;
