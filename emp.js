  class Employee {
  constructor( empid,ename, edate,edepartment, status,reason) {
    this.ename = ename;
    this.empid = empid;
    this.edate = edate;
    this.edepartment=edepartment;
    this.status = status[0].checked?1:0;
    this.reason=reason;
    if(this.status){
    this.status="Present"}
    else{
    this.status="Absent"}
    
  }


  instances = {};

  static loadAll() {
    const employees = window.localStorage.getItem('employees');

    const parsedEmployees = JSON.parse(employees);

    this.instances = { ...parsedEmployees };

    return parsedEmployees;
  }
  static saveAll() {
    const employees = JSON.stringify(this.instances);

    try {
      window.localStorage.setItem('employees', employees);
    } catch {
      throw Error('Can not save Employees to local storage');
    }
  }

  static save() {
    const employees = JSON.parse(window.localStorage.getItem('employees'));
    const updatedEmployees = JSON.stringify({ ...employees, ...this.instances });

    try {
      window.localStorage.setItem('employees', updatedEmployees);
    } catch {
      throw Error('Can not save Employee to local storage');
    }
  }

  static create({ empid, ename, edate,edepartment, status,reason}) {
    const employee = new Employee(ename, empid, edate, edepartment,status,reason);

    const updatedInstances = { ...this.instances };

    updatedInstances[`${empid}`] = employee;

    this.instances = updatedInstances;

    Employee.save();
  }
}
