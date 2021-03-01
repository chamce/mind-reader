function View(top, next, bottom, go) {
    this.top = top;
    this.next = next;
    this.bottom = bottom;
    this.go = go;
}

let view1 = new View('I can read your mind', '', '', 'Go');
let view2 = new View('Pick a number from 1 - 99', 'Next', 'When you have your number click next', 'Reset');
let view3 = new View('Add both digits together to get a new number', 'Next', 'Ex: 14 is 1 + 4 = 5. Click next to proceed', 'Reset');
let view4 = new View('Subtract your new number from the original number', 'Next', 'Ex: 14 - 5 = 9. Click next to proceed', 'Reset');
let view5 = new View('', 'Reveal', 'Find your new number. Note the symbol beside the number', 'Reset');
let view6 = new View('', '', '', 'Reset');

let views = [view1, view2, view3, view4, view5, view6];

function getList() {
    let symbols = '~!@#$%^&*()_+{}|":<>?';
    let symbol = symbols[Math.floor(Math.random() * 21)];
    let list = '0. ' + symbol + ' ';
    symbols = symbols.replace(symbol, '');
    for (let i = 1; i <= 99; i++) {
        if (i % 9 === 0) {
            list += i + '. ' + symbol + ' ';
        } else {
            list += i + '. ' + symbols[Math.floor(Math.random() * 20)] + ' ';
        }
    }
    view5.top = list;
    view6.top = list[3];
    view6.bottom = 'Your symbol is : ' + list[3];
}

const topHeading = document.querySelector('.top');
const nextButton = document.querySelector('.next');
const bottomHeading = document.querySelector('.bottom');
const goButton = document.querySelector('.go');

function render(view) {
    topHeading.textContent = view.top;
    nextButton.textContent = view.next;
    bottomHeading.textContent = view.bottom;
    goButton.textContent = view.go;
}

let nextView;

function load() {
    nextView = 0;
    render(views[nextView]);
}

nextButton.onclick = function () {
    if (nextButton.textContent === 'Reveal') {
        nextView = 5;
        render(views[nextView]);
    } else {
        nextView = nextView + 1;
        render(views[nextView]);
    }
}

goButton.onclick = function () {
    if (goButton.textContent === 'Go') {
        nextView = 1;
        render(views[nextView]);
        getList();
    } else {
        load();
    }
}

load();