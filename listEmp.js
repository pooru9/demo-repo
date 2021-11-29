init.view.listEmp={
  setupUI: function () {
    const tableBodyElement = document.querySelector('table#atn_tbl>tbody');

    const employees = Employee.loadAll();

    const keys = Object.keys(employees);

    for (let i = 0; i < keys.length; i++) {
      Employee = keys[i];

      const row = tableBodyElement.insertRow();
      row.insertCell(-1).textContent = employees[Employee].empid;
      row.insertCell(-1).textContent = employees[Employee].ename;
      row.insertCell(-1).textContent = employees[Employee].edepartment;
      row.insertCell(-1).textContent = employees[Employee].edate;
      row.insertCell(-1).textContent = employees[Employee].status;
      row.insertCell(-1).textContent = employees[Employee].reason;
    }
  },
};