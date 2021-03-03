// view constructor to create view instances

function View(top, next, bottom, go) {
    this.top = top;
    this.next = next;
    this.bottom = bottom;
    this.go = go;
}

// creating view instances

let view1 = new View('I can read your mind!', '', '', 'Go');
let view2 = new View('Pick a number from 1 to 99.', 'Next', 'When you have your number, click next.', 'Reset');
let view3 = new View('Add both digits together to get a new number.', 'Next', 'Ex: 14 is 1 + 4 = 5. Click next to proceed.', 'Reset');
let view4 = new View('Subtract your new number from the original number.', 'Next', 'Ex: 14 - 5 = 9. Click next to proceed.', 'Reset');
let view5 = new View('', 'Reveal', 'Find your new number. Note the symbol beside the number.', 'Reset');
let view6 = new View('', '', '', 'Reset');

// creating array of view instances to iterate on

let views = [view1, view2, view3, view4, view5, view6];

// function to create the symbol and list when game starts

function getList() {
    let symbols = '~!@#$%^&*()_+{}|"<>?';
    let symbol = symbols[Math.floor(Math.random() * 20)];
    let list = '';
    symbols = symbols.replace(symbol, '');
    for (let i = 0; i <= 99; i++) {
        list += i + ': ';
        if (i % 9 === 0) {
            list += symbol;
        } else {
            list += symbols[Math.floor(Math.random() * 19)];
        }
        list += '<br>';
    }
    view5.top = list;
    view6.top = 'Your symbol is:';
    view6.bottom = list[3];
}

// creating constants to reference html elements

const topHeading = document.querySelector('.top');
const nextButton = document.querySelector('.next');
const bottomHeading = document.querySelector('.bottom');
const goButton = document.querySelector('.go');

// function that will be called when a new view is loaded

function render(view) {
    topHeading.innerHTML = view.top;
    nextButton.textContent = view.next;
    if (nextButton.textContent === '') {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
    bottomHeading.textContent = view.bottom;
    goButton.textContent = view.go;
}

// initializing variable that defines the index of the view being loaded

let nextView;

// function called when program loads; loads view 1

function load() {
    nextView = 0;
    render(views[nextView]);
}

// function called when next or reveal button is clicked

nextButton.onclick = function () {
    if (nextButton.textContent === 'Reveal') {
        nextView = 5;
        render(views[nextView]);
    } else {
        nextView = nextView + 1;
        render(views[nextView]);
    }
}

// function called when go or reset button is clicked

goButton.onclick = function () {
    if (goButton.textContent === 'Go') {
        nextView = 1;
        render(views[nextView]);
        getList();
    } else {
        load();
    }
}

// starting program; load view 1

load();