// your code goes here
function makeLine() {

    var students = [];

    for (var i = 0; i < 10; i++) {
        var student = function() { // �������-������
            alert( i ); // ������ ���� �����
        };
        students.push(student);
    }

    return students;
}

var line = makeLine();

line[0](); // ������ ������ 10, � ������ 0