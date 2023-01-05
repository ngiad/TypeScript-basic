var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getIntroUser = function () {
        console.log("User name : ".concat(this.name, " , User age : ").concat(this.age));
    };
    return User;
}());
var Techer = /** @class */ (function (_super) {
    __extends(Techer, _super);
    function Techer(name, age, bangcap) {
        var _this = _super.call(this, name, age) || this;
        _this.bangcap = bangcap;
        return _this;
    }
    Techer.prototype.getIntroTecher = function () {
        console.log("Techer name : ".concat(this.name, " , age : ").concat(this.age, " , bang cap : ").concat(this.bangcap));
    };
    Techer.prototype.UpdateBangcap = function (update) {
        this.bangcap = update;
    };
    return Techer;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, Myclass) {
        var _this = _super.call(this, name, age) || this;
        _this.Myclass = Myclass;
        return _this;
    }
    Student.prototype.getIntroStudent = function () {
        console.log("Student name : ".concat(this.name, " , age : ").concat(this.age, " , Class : ").concat(this.Myclass));
    };
    Student.prototype.UpdateClass = function (update) {
        this.Myclass = update;
    };
    return Student;
}(User));
var School = /** @class */ (function () {
    function School() {
    }
    School.addTecher = function (techer) {
        this.TecherArr.push(techer);
    };
    School.RemoveTecher = function (name) {
        this.TecherArr = this.TecherArr.filter(function (techer) { return techer.name !== name; });
    };
    School.UpdateTecher = function (techerUpdate) {
        this.TecherArr = this.TecherArr.map(function (techer) { return techer.name === techerUpdate.name ? new Techer(techerUpdate.name, techerUpdate.age, techerUpdate.bangcap) : techer; });
    };
    School.ShowTecher = function () {
        this.TecherArr.forEach(function (ele) {
            ele.getIntroTecher();
        });
    };
    School.addStudent = function (std) {
        this.StudentArr.push(std);
    };
    School.updateStudent = function (stdUpdate) {
        this.StudentArr = this.StudentArr.map(function (item) { return item.name === stdUpdate.name ? new Student(stdUpdate.name, stdUpdate.age, stdUpdate.Myclass) : item; });
    };
    School.RemoveStd = function (stdName) {
        this.StudentArr = this.StudentArr.filter(function (item) { return item.name !== stdName; });
    };
    School.ShowStudent = function () {
        this.StudentArr.forEach(function (ele) {
            ele.getIntroStudent();
        });
    };
    School.StudentArr = [];
    School.TecherArr = [];
    return School;
}());
School.addStudent(new Student("nghia", 12, "6a"));
School.addStudent(new Student("hang", 13, "7a"));
School.addStudent(new Student("bun", 12, "6b"));
School.addStudent(new Student("nghia", 14, "8a"));
School.addTecher(new Techer("nghia", 12, "cao dang"));
School.addTecher(new Techer("hang", 13, "cu nhan"));
School.addTecher(new Techer("bun", 12, "thac si"));
School.addTecher(new Techer("nghia", 14, "cao dang"));
var Main = function () {
    console.log("Techer : ");
    School.addTecher(new Techer("Hama", 30, "tien si"));
    School.ShowTecher();
    console.log("\n");
    School.RemoveTecher("bun");
    School.ShowTecher();
    console.log("\n");
    School.UpdateTecher({ name: "Hama", age: 40, bangcap: "tien si" });
    School.ShowTecher();
    console.log("\n");
    console.log("Studunt : ");
    School.addStudent(new Student("khanh", 10, "5a"));
    School.ShowStudent();
    console.log("\n");
    School.updateStudent({ name: "khanh", age: 11, Myclass: "6b" });
    School.ShowStudent();
    console.log("\n");
    School.RemoveStd("bun");
    School.ShowStudent();
};
Main();
