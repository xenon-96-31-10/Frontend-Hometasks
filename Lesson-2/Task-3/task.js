// your code goes here
function User(title, name) {
    this.title = title;
    this.name = name;
    console.info('NEW USER: ' + this);
}
User.prototype.displayName = function() {
    return this.title + ' ' + this.name;
}
User.prototype.toString = function() {
    return '[User:'+this.displayName()+']';
}
//var joe = new User('Mrs','Joe');
//console.log('Hello ' + joe); // 'Hello [BetterUser: Mr. Joe Smith]'


function upgradeUser(User) {
    // EDIT THESE AS NECESSARY


    function BetterUser() {
        User.apply(this, arguments);
    }

    function C() {}
    C.prototype = User.prototype
    BetterUser.prototype = new C()
    BetterUser.prototype.constructor = User;
    BetterUser.prototype.toString = function (){
        return '[BetterUser:'+this.displayName()+']';
    }

    return BetterUser;
}

var BetterUser = upgradeUser(User);
var joe = new BetterUser('Mr.', 'Joe');
console.log('Hello ' + joe); // 'Hello [BetterUser: Mr. Joe Smith]'



