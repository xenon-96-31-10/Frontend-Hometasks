// your code goes here
function Spy(target, method) {
    // SOLUTION GOES HERE
    count: 1;
}

var spy = Spy(window, 'alert');
//alert('����� �� ������, ��� � ������� ����');
console.log(spy.count);
//console.log('���������� ��������� �������:', spy.count);