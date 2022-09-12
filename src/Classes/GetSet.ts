class GetSet {
    private _name!: string;

    get name():string{
        return this._name;
    }

    set name(value:string){
        this._name = value;
    }
}

var student = new GetSet();
student.name = "Himanshu";
console.log(student.name);

//use command tsc --target es5 getset.ts as accessors methods are only available in es5 and higher