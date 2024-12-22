// I. Создание класса объектов
class Students {
    constructor(name, surname, group, age) {
        this.name = name;
        this.surname = surname;
        this.group = group;
        this.age = age;
    }

    // Общий метод для всех объектов класса
    information() {
        console.log(`Name: ${this.name}, Surname: ${this.surname}, Group: ${this.group}, Age: ${this.age}`);
    }
}

// Создаем 3 объекта класса Students
let student1 = new Students('Sergey', 'Ivanov', '27-KM', 20);
let student2 = new Students('Andrey', 'Petrov', '317-IS', 22);
let student3 = new Students('Elena', 'Sidorova', '18-B', 19);

// Вывод информации об объектах
student1.information();
student2.information();
student3.information();

// II. Наследование классов
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

// Создаем объект box1 класса Box
let box1 = new Box({
    selector: '#box1',
    width: 100,
    height: 50,
    color: 'blue'
});

// Проверяем методы класса Component для box1
box1.editColor('green'); // Изменение цвета
setTimeout(() => {
    box1.blockHide(); // Скрытие через 2 секунды
}, 2000);
