// your code goes here
function makeLine() {

    var students = [];

    for (var i = 0; i <10; i++) {
        var student = function fun() { // �������-������
            alert( fun.i ); // ������ ���� �����
        };
        student.i=i;
        students.push(student);
    }

    return students;
}

var line = makeLine();

line[0](); // ������ ������ 10, � ������ 0
line[5](); // ������ ��-�������� ������ 10..., � ������ 5