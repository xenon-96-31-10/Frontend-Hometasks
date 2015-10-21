// your code goes here
function makeLine() {

    var students = [];

    for (var i = 0; i <10; i++) {
        var student = function fun() { // функция-ученик
            alert( fun.i ); // кричит свой номер
        };
        student.i=i;
        students.push(student);
    }

    return students;
}

var line = makeLine();

line[0](); // ученик кричит 10, а должен 0
line[5](); // ученик по-прежнему кричит 10..., а должен 5