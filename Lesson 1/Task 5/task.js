// your code goes here
function makeLine() {

    var students = [];

    /*for (var i = 0; i <10; i++) {
     var student = function fun() { // функция-ученик
     alert( fun.i ); // кричит свой номер
     };
     student.i=i;
     students.push(student);
     }*/
    /*for (var i = 0; i <10; i++) {
     var student = (function (i) { // функция-ученик
     return function() {alert( i )}; // кричит свой номер
     })(i);
     students.push(student);
     }; */
    for (var i = 0; i < 10; i++) {
        var student = function (i) { // функция-ученик
            alert(i); // кричит свой номер
        }.bind(this, i);
        students.push(student);
    }
    return students;
}

var line = makeLine();

line[0](); // ученик кричит 10, а должен 0
line[5](); // ученик по-прежнему кричит 10..., а должен 5