class Librito {
    constructor (title, author, year, genre){
        this.title=title;
        this.author=author;
        this.year=year;
        this.genre=genre;
    }
const libro1 = new Librito('la iliada', 'homero', '1000', 'terror');
libro2 = new Librito('la odisea', 'homero', '1000', 'accion');

console.log(libro1.year);
