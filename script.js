class BaseClass {
    constructor (value) {
        this.value = value;
    }

}
//ES6
class IntBuilder extends BaseClass {

}

//ES5
function StringBuilder(value) {
    Object.assign(this, new BaseClass(value))

}
StringBuilder.prototype = Object.create(BaseClass.prototype);

