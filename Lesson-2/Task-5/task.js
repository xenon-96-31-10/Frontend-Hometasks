// your code goes here
function Spy(target, method) {
    var originFn = target[method];
    var result = {
        count: 0,

        arr: []
    }

    target[method] = function(){
        result.count++;
        originFn.apply(this, arguments);
        result.arr.push(arguments)
    }
    return result;
}

var spy = Spy(window, 'alert');
alert('����� �� ������, ��� � ������� ����');
alert('����� �� ������, ��� � ������� ����');
console.log('���������� ��������� �������:', spy.count, spy.arr);