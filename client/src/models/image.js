class Image {
    constructor({id, title, author, description, url, metadata}) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUri = url;
        this.metadata = metadata;
    }
}

export default Image;
