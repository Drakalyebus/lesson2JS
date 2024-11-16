class MyString extends String{
    reverse() {
        return this.split('').reverse().join('');
    }
    ucFirst() {
        return this[0].toUpperCase() + this.slice(1);
    }
    ucWords() {
        return this.split(' ').map((el) => {
            return el[0].toUpperCase() + el.slice(1);
        }).join(' ');
    }
}
let string = new MyString('abcde');
console.log(string.reverse());
console.log(string.ucFirst());
string = new MyString('abcde abcde abcde');
console.log(string.ucWords());