class User {
    public name : string
    public age : number

    constructor(name : string,age:number){
        this.name = name
        this.age = age
    }

    getIntroUser (){
        console.log(`User name : ${this.name} , User age : ${this.age}`)
    }

}

class Techer extends User{
    private bangcap : string

    constructor(name: string,age:number,bangcap:string){
        super(name,age)
        this.bangcap = bangcap
    }

    getIntroTecher (){
        console.log(`Techer name : ${this.name} , age : ${this.age} , bang cap : ${this.bangcap}`)
    }

    UpdateBangcap(update : string){
        this.bangcap = update
    }
}

class Student extends User{
    public Myclass : string

    constructor(name : string,age :number,Myclass : string){
        super(name,age)
        this.Myclass = Myclass
    }

    getIntroStudent(): void {
        console.log(`Student name : ${this.name} , age : ${this.age} , Class : ${this.Myclass}`)
    }

    UpdateClass(update : string):void{
        this.Myclass = update
    }
}


let StudentArr : Array<Student> = []
let TecherArr : Array<Techer> = []


StudentArr.push(new Student("nghia",12,"6a"))
StudentArr.push(new Student("hang",13,"7a"))
StudentArr.push(new Student("bun",12,"6b"))
StudentArr.push(new Student("nghia",14,"8a"))


TecherArr.push(new Techer("nghia",12,"cao dang"))
TecherArr.push(new Techer("hang",13,"cu nhan"))
TecherArr.push(new Techer("bun",12,"thac si"))
TecherArr.push(new Techer("nghia",14,"cao dang"))


const Main = () : void =>{
    console.log("List Techer : ")
    TecherArr.forEach(item => {
        item.getIntroTecher()
    })

    console.log("\n")

    console.log("List Student : ")
    StudentArr.forEach(item => {
        item.getIntroStudent()
    })

    console.log("\n")

    console.log("Nang cap chat luong Techer cua truong : ")
    TecherArr.forEach((item,index) => {
        if(index %2===0){
            item.UpdateBangcap("Cu nhan")
        }else{
            item.UpdateBangcap("Thac si")
        }
        item.getIntroTecher()
    })

    console.log("\n")
    console.log("Cuoi namg hoc sinh len lop")
    StudentArr.forEach((item,index) => {
        if(index%2 !== 0){
            item.UpdateClass((Number(item.Myclass.charAt(0)) + 1) + item.Myclass.charAt(1))
        }
        item.getIntroStudent()
    })
}

Main()

