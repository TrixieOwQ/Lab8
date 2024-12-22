class Students {
    constructor(name, surname, group, age) {
        this.name = name;
        this.surname = surname;
        this.group = group;
        this.age = age;
    }

    information() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Group: ${this.group}, Age: ${this.age}`);
    }
}

let student1 = new Students('Sergey', 'Ivanov', '27-KM', 20);
let student2 = new Students('Andrey', 'Petrov', '317-IS', 22);
let student3 = new Students('Elena', 'Sidorova', '18-B', 19);

student1.information();
student2.information();
student3.information();

class Component {
    constructor(selector) {
        this.el = document.querySelector(selector);
    }

    blockHide() {
        this.el.style.display = 'none';
    }

    editColor(color) {
        this.el.style.background = color;
    }

    editBorder(border) {
        this.el.style.border = border;
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.el.style.width = options.width + 'px';
        this.el.style.height = options.height + 'px';
        this.el.style.background = options.color;
    }
}

let box1 = new Box({
    selector: '#box1',
    width: 100,
    height: 50,
    color: 'blue'
});

box1.editColor('red');

box1.editBorder('2px solid black');
