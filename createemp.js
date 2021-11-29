init.view.createemp={
	setupUI:function(){
		const saveBtn=document.forms['Employee'].commit;

		Employee.loadAll();

		saveBtn.addEventListener('click',init.view.createemp.handleSaveButtonClick);
	},
	handleSaveButtonClick:function () {
		const formElement=document.forms['Employee'];
		var sts=formElement.attn;
		var dept=document.getElementById('t3');
		var result = dept.options[dept.selectedIndex].text;

		const employee={
			empid:formElement.eid.value,
			ename: formElement.ename.value,
			edate: formElement.dte.value,
			edepartment: result,
			status: sts,
			reason:formElement.abs.value

		};
		Employee.create(employee);
		formElement.reset();
	}
};