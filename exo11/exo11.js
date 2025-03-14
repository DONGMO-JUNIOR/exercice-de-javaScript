class Student {

  constructor(name, sClass, rollNo) {
    this.name = name;
    this.sClass = sClass;
    this.rollNo = rollNo;
  }

  deleteProperty(property) {
    delete this[property];
    return this;
  }

  print() {
    console.log(this);
  }

}

const student = new Student('David', 'VI', 12);

student.print();
student.deleteProperty('rollNo').print();