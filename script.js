class Students {
    constructor(parameter) {
        this.name = parameter.name;
        this.surname = parameter.surname;
        this.group = parameter.group;
    }
    information() {
        console.log(this.name);
    }
}

let student1 = new Students({ name: 'Sergey', surname: 'Ivanov', group: '27-KM' });
let student2 = new Students({ name: 'Andrey', surname: 'Petrov', group: '317-IS' });
let student3 = new Students({ name: 'Elena', surname: 'Sidorova', group: '18-B' });

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
