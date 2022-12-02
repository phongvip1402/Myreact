//tạo class animal co constructor name và age
//có hành động hát và nhảy
// tạo class cat kế thừa class animal và thêm thuộc tính màu sắc
// thêm hành động lấy màu sắc
//tạo đối mèo
// console.log hành động hát của mèo 

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} có thể hát`
    }
    dance() {
        return `${this.name} có thể nhảy`
    }
}

class Cats extends Animals {
    constructor(name,age,color) {
        super(name,age);
        this.color = color;
    }
    getColor() {
        return `${this.name} có màu ${this.color}`
    }
   static sing(){
        return `${this.name} không thể hát`
    }
    getInfor(){
        return `${this.name} có màu ${this.color} và bé được ${this.age}`
    }
}
class luxuryCat extends Cats{
    constructor(name,age,brand){
        super(name,age);
        this.brand= brand;
    }
   static showbrand(){
        return `${this.name} ${this.age} tuổi là ${this.brand}`
    }
}

// const meo = new Cats('david', 5, 'red');
// console.log(meo.getColor())
// console.log(meo.sing())
// console.log(meo.getInfor())

// const meo2 = new luxuryCat('Jonh',4,'vàng');
// console.log(meo2.showbrand())
// console.log(meo2.sing())
console.log(luxuryCat.sing())

