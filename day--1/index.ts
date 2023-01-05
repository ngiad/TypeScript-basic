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

type UpdateTecher = {
    name : string,
    age : number,
    bangcap : string
}

type UpdateStudent = {
    name : string,
    age : number,
    Myclass : string
}


class School {
    private static StudentArr : Array<Student> = []
    private static TecherArr : Array<Techer> = []

    static addTecher (techer : Techer): void {
        this.TecherArr.push(techer)
    }

    static RemoveTecher (name : string) : void{
        this.TecherArr = this.TecherArr.filter((techer) => techer.name !== name)
    }

    static UpdateTecher (techerUpdate : UpdateTecher) :void{
        this.TecherArr = this.TecherArr.map((techer) => techer.name === techerUpdate.name ? new Techer(techerUpdate.name,techerUpdate.age,techerUpdate.bangcap) : techer)
    }

    static ShowTecher () :void{
        this.TecherArr.forEach(ele => {
            ele.getIntroTecher()
        })
    }

    static addStudent (std : Student) : void{
        this.StudentArr.push(std)
    }

    static updateStudent(stdUpdate : UpdateStudent) : void{
        this.StudentArr = this.StudentArr .map((item) => item.name === stdUpdate.name ? new Student(stdUpdate.name,stdUpdate.age,stdUpdate.Myclass) : item)
    }

    static RemoveStd (stdName : string) : void{
        this.StudentArr = this.StudentArr.filter(item => item.name !== stdName)
    }

    static ShowStudent ():void {
        this.StudentArr.forEach(ele => {
            ele.getIntroStudent()
        })
    }
}


School.addStudent(new Student("nghia",12,"6a"))
School.addStudent(new Student("hang",13,"7a"))
School.addStudent(new Student("bun",12,"6b"))
School.addStudent(new Student("nghia",14,"8a"))


School.addTecher(new Techer("nghia",12,"cao dang"))
School.addTecher(new Techer("hang",13,"cu nhan"))
School.addTecher(new Techer("bun",12,"thac si"))
School.addTecher(new Techer("nghia",14,"cao dang"))


const Main = () : void =>{
    console.log("Techer : ")

    School.addTecher(new Techer("Hama",30,"tien si"))
    School.ShowTecher()

    console.log("\n")

    School.RemoveTecher("bun")
    School.ShowTecher()

    console.log("\n")

    School.UpdateTecher({name : "Hama",age : 40,bangcap :"tien si"})
    School.ShowTecher()

    console.log("\n")

    console.log("Studunt : ")
    School.addStudent(new Student("khanh",10,"5a"))
    School.ShowStudent()

    console.log("\n")

    School.updateStudent({name: "khanh",age : 11,Myclass :"6b"})
    School.ShowStudent()

    console.log("\n")

    School.RemoveStd("bun")
    School.ShowStudent()
}

Main()

