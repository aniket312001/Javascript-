// Object Oriented Programming 

class emp{

    constructor(name,salary){
        this.name = name
        this.salary = salary
    }

    getdetail = ()=>{  // arrow function
        console.log(this.name, this.salary)
    }
    
    setName = (name) => {    // Encapsulation
        this.name = name
    }

    setSalary = (sal) => {
        this.salary
    }
}

e1 = new emp("aniket",12000)

e1.getdetail()
e1.setName("Sam")
e1.getdetail()

// =---------------------------------------------------------------------------------------------------
// Inheritance example
class person{
    constructor(name){
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of person: ${this.name}`);
    }

}
class student extends person{
    constructor(name,id){
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString(){
        return (`${super.toString()},Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul',22);
console.log(student1.toString());
