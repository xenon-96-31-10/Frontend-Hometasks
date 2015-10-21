// your code goes here
function makeLine() {

    var students = [];

    for (var i = 0; i < 10; i++) {
        var student = function() { // функция-ученик
            alert( i ); // кричит свой номер
        };
        students.push(student);
    }

    return students;
}

var line = makeLine();

line[0](); // ученик кричит 10, а должен 0