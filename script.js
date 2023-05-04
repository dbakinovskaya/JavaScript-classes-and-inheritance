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

StringBuilder.prototype.minus = function(n) {
    this.value = this.value.slice(0, this.value.length-n)
    return this;
}

StringBuilder.prototype.multiply = function(int) {
    this.value = this.value.repeat(int)
    return this;
}

StringBuilder.prototype.divide = function(n) {
    this.value = this.value.slice(0, Math.floor(this.value.length / n))
    return this;
}

StringBuilder.prototype.remove = function(str) {
    while (this.value.includes(str)) {
        this.value = this.value.substring(0, this.value.indexOf(str)) + this.value.substring(this.value.indexOf(str) + str.length);
    }
    return this;
}

StringBuilder.prototype.sub = function(from, n) {
    this.value = this.value.substring(from, n+1);
    return this;
}