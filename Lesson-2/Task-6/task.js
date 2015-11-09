// your code goes here
function logger(namespace) {
    return console.log.bind(console, namespace);
}

var zeroFill = function (num) { return num < 10 ? '0' + num : num },
    currentTime = new Date(),
    logTime = '['
        + zeroFill(currentTime.getHours())
        + ':' + zeroFill(currentTime.getMinutes())
        + ':' + zeroFill(currentTime.getSeconds())
        + ']',
    log = logger(logTime);
log('Роман пришел на занятие'); // [18:00:01] Роман пришел на занятие