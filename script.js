class BaseClass {
    constructor (value) {
        this.value = value;
    }

    get() {
        return this.value;
    }

    plus(...values) {
        this.value = values.reduce((a,b) => a+b, this.value);
        return this;
    }
}

//ES6
class IntBuilder extends BaseClass {
    constructor(value) {
        super(value);
        if (typeof(this.value) != 'number') {
            this.value = 0;
        }
    }

    minus(...values) {
        this.value = values.reduce((a,b) => a-b, this.value);
        return this;
    }

    multiply(n) {
        this.value *= n;
        return this;
    }

    divide(n) {
        this.value = Math.trunc(this.value/n);
        return this;
    }

    mod(n) {
        this.value %= n;
        return this;
    }
}

//ES5
function StringBuilder(value) {
    Object.assign(this, new BaseClass(value));
    if (typeof(this.value) != 'string') {
        this.value = '';
    }
}

StringBuilder.prototype = Object.create(BaseClass.prototype);