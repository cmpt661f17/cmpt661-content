class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get fullname() {
        return `${this.name} ${this.age}`;
    }

    saySalam() {
        console.log("Salamou Aleikoum! I am " + this.name + ". I am " + this.age + " years old");
    }
}

Student.prototype.toUpper = function() {
    return String.toUpper(this.name);
}
 
let juha = new Student("Juha Nasreddin", 22);
let abbas = new Student("Abbas Ibn Firnas", 25);
let samir = new Student("Samir Saghir", 17);

juha.toUpper();

console.log(`juha.name: ${juha.name}`);
console.log(`juha.fullname: ${juha.fullname}`);
juha.fullname = "Test me";
juha.saySalam();
abbas.saySalam();
samir.saySalam();