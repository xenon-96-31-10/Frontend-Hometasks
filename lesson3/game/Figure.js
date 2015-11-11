/**
 * @description Конструктор класса Figure. Это базовый класс для всех фигур.
 * @param width
 * @param height
 * @param velocity - Скорость
 * @constructor
 */
var Figure = function Figure(width, height, velocity) {
    width = width || 24;
    height = height || 24;
    velocity = velocity || 1;

    Figure.AUTO_INCREMENT++;

    this.id = Figure.AUTO_INCREMENT;
    this.name = 'Неопознаная фигура';
    this.width = width;
    this.height = height;
    this.velocity = velocity;

    this.init();
};

Figure.prototype.init = function () {
    this.element = this.createElement();

    this.element.style.hight = this.hight + 'px';
    this.element.style.width = this.width + 'px';
    this.element.title = this.name;

    this.insertElement(this.element);

};

/* статическое поле */
Figure.AUTO_INCREMENT = 0;

Figure.prototype.element = null;

Figure.prototype.coords = { x: 0, y: 0 };


Figure.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base';

    return element;
};
/**
 * @description Вставляет DOM элемент в поле.
 * @param element
 */
Figure.prototype.insertElement = function (element) {
    var field = document.querySelector('.field');
    field.appendChild(element);
};

/**
 * @description Функция, которая должна вызываться из класса Game всякий раз, когда нужно изменить координаты для фигуры.
 */
Figure.prototype.go = function () {
    if (!this.element) {
        throw new Error('The element not set');
    }
    /* Тут должна быть логика изменения координат для объекта */

    if (this.coords.x < screen.width && this.coords.x > 0 && this.coords.y < screen.height && this.coords.y > 0) {
        if(getRandom(0,1)) {
            this.coords.x += getRandom(0, 1) * this.velocity;
            this.coords.y += getRandom(0, 1) * this.velocity;
        } else {
            this.coords.y -= getRandom(0, 1) * this.velocity;
            this.coords.x -= getRandom(0, 1) * this.velocity;
        }
    }
    else {
        if (this.coords.x >= screen.width) {
            this.coords.x -= getRandom(0, 1) * this.velocity;
        }
        if (this.coords.x <= 0) {
            this.coords.x += getRandom(0, 1) * this.velocity;
        }
        if (this.coords.y >= screen.height) {
            this.coords.y -= getRandom(0, 1) * this.velocity;
        }
        if (this.coords.y <= 0) {
            this.coords.y += getRandom(0, 1) * this.velocity;
        }
    }

   this.element.style.left =  this.coords.x + 'px';
   this.element.style.top =  this.coords.y + 'px';

};

/**
 * @description Конструктор класса Ellipse. Класс наследуется от Figure и создает элемент "Эллипс".
 * @constructor
 */
var Ellipse = function Ellipse(width, height, velocity) {
    Figure.apply(this, arguments);
};

Ellipse.prototype = Object.create(Figure.prototype);

Ellipse.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base figure-ellipse';


    return element;
};
/**
 * @description Конструктор класса Circle. Класс наследуется от Ellipse и создает элемент "Круг".
 * @constructor
 */
var Circle = function Circle(radius, velocity) {
    radius = radius || 12;

    this.radius = radius;
    Ellipse.call(this, radius, radius, velocity);
};

Circle.prototype = Object.create(Ellipse.prototype);

Circle.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base figure-circle';

    return element;
};


/**
 * @description Конструктор класса Rectangle. Класс наследуется от Figure и создает элемент "Прямоугольник".
 * @constructor
 */
var Rectangle = function Rectangle(width, height, velocity) {
    Figure.apply(this, arguments);
};

Rectangle.prototype = Object.create(Figure.prototype);

Rectangle.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base figure-rectangle';

    return element;
};
/**
 * @description Конструктор класса Square. Класс наследуется от Rectangle и создает элемент "Квадрат".
 * @constructor
 */
var Square = function Square(size, velocity) {
    size = size || 24;

    this.size = size;
    Rectangle.call(this, size, size, velocity);
};

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base figure-square';

    return element;
};

var Picture = function Picture(size, velocity) {
    size = size || 24;

    this.size = size;
    Figure.call(this, size, size, velocity);
};

Picture.prototype = Object.create(Figure.prototype);

Picture.prototype.createElement = function () {
    var element = document.createElement('div');
    element.className = 'figure figure-base figure-picture';

    return element;
};