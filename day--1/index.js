var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var User = /** @class */ (function () {
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  User.prototype.getIntroUser = function () {
    console.log(
      "User name : ".concat(this.name, " , User age : ").concat(this.age)
    );
  };
  return User;
})();
var Techer = /** @class */ (function (_super) {
  __extends(Techer, _super);
  function Techer(name, age, bangcap) {
    var _this = _super.call(this, name, age) || this;
    _this.bangcap = bangcap;
    return _this;
  }
  Techer.prototype.getIntroTecher = function () {
    console.log(
      "Techer name : "
        .concat(this.name, " , age : ")
        .concat(this.age, " , bang cap : ")
        .concat(this.bangcap)
    );
  };
  Techer.prototype.UpdateBangcap = function (update) {
    this.bangcap = update;
  };
  return Techer;
})(User);
var Student = /** @class */ (function (_super) {
  __extends(Student, _super);
  function Student(name, age, Myclass) {
    var _this = _super.call(this, name, age) || this;
    _this.Myclass = Myclass;
    return _this;
  }
  Student.prototype.getIntroStudent = function () {
    console.log(
      "Student name : "
        .concat(this.name, " , age : ")
        .concat(this.age, " , Class : ")
        .concat(this.Myclass)
    );
  };
  Student.prototype.UpdateClass = function (update) {
    this.Myclass = update;
  };
  return Student;
})(User);
var StudentArr = [];
var TecherArr = [];
StudentArr.push(new Student("nghia", 12, "6a"));
StudentArr.push(new Student("hang", 13, "7a"));
StudentArr.push(new Student("bun", 12, "6b"));
StudentArr.push(new Student("nghia", 14, "8a"));
TecherArr.push(new Techer("nghia", 12, "cao dang"));
TecherArr.push(new Techer("hang", 13, "cu nhan"));
TecherArr.push(new Techer("bun", 12, "thac si"));
TecherArr.push(new Techer("nghia", 14, "cao dang"));
var Main = function () {
  console.log("List Techer : ");
  TecherArr.forEach(function (item) {
    item.getIntroTecher();
  });
  console.log("\n");
  console.log("List Student : ");
  StudentArr.forEach(function (item) {
    item.getIntroStudent();
  });
  console.log("\n");
  console.log("Nang cap chat luong Techer cua truong : ");
  TecherArr.forEach(function (item, index) {
    if (index % 2 === 0) {
      item.UpdateBangcap("Cu nhan");
    } else {
      item.UpdateBangcap("Thac si");
    }
    item.getIntroTecher();
  });
  console.log("\n");
  console.log("Cuoi namg hoc sinh len lop");
  StudentArr.forEach(function (item, index) {
    if (index % 2 !== 0) {
      item.UpdateClass(
        Number(item.Myclass.charAt(0)) + 1 + item.Myclass.charAt(1)
      );
    }
    item.getIntroStudent();
  });
};
Main();
