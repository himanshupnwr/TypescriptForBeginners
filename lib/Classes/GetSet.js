"use strict";
class GetSet {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
var student = new GetSet();
student.name = "Himanshu";
console.log(student.name);
//use command tsc --target es5 getset.ts as accessors methods are only available in es5 and higher
