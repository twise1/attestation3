class Message {
    constructor(author, text) {
    this.author = author;
    let now = new Date();
    this.time = `${now.getHours()}:${now.getMinutes()}`;
    this.text = text;
    }
    convert() {
    return "<p>"+String(this.time) + String(this.name) +":" + String(this.text) + "</p>";
    }
}
class Messenger extends Message {
    constructor() {
    super()
    this.arr = [];
    }
    show_history() {
    let history = document.querySelector('.history');
    history.innerHTML = "";
    this.story.forEach((item) =>{ 
    let newa = document.createElement('p');
    newa.innerHTML = item.convert();
    history.append(newa);});
    }
    send(author, text) {;
    this.arr.push(new Message(author, text));
    }
}

let messenger = new Messenger();
let send = document.querySelector('.btn-send');
let show = document.querySelector('.btn-show');
let name = document.querySelector('.name');
let text = document.querySelector('.message');
send.addEventListener('click', (event) => {
    event.preventDefault();
    if(text.value !==  ""|| name.value !== "")
    messenger.send(name.value, text.value);
    text.value = "";
});

show.addEventListener('click', () => {
messenger.show_hstory();
})