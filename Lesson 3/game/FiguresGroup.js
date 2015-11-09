var FiguresGroup = function FiguresGroup(figures_limit_length) {
    this._figures_limit_length = figures_limit_length;
    this._figures = [];
};

/**
 * @description Добавляет фигуру в коллекцию фигур на поле.
 * @param figure
 */
FiguresGroup.prototype.add = function (figure) {
    if(this._figures.length < this._figures_limit_length){
        this._figures.push(figure);
    }
    else{
        throw new Error('Warning! The limit of count is exceeded!');
    }

};

/**
 * @description Возвращает фигуры, который в данный момент на поле.
 * @returns {Figure[]} figures
 */
FiguresGroup.prototype.getFigures = function () {
    return this._figures;
};

/**
 * @description Удаляет все фигуры с поля
 */
FiguresGroup.prototype.clear = function () {
    this._figures = [];
};

/**
 * @description Удаляет заданную фигуру с поля по ее ID.
 * @param {Figure} figure
 */
FiguresGroup.prototype.remove = function (figure) {
    for( var i = 0; i < this._figures.length; i++){
        if( this._figures[i].id = figure.id){
            this._figures.slice(i,1);
        }
    }
};