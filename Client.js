
let employee = [];

$(document).ready(function () {
    console.log('ready, we ready?');
    //#todo: add listeners
});

//#ToDO: Make employee constructor --> this is making an new object out of an previous one.
// Keyword New, is what constructs the function. 
function Employee (firstName, lastName, employeeID, jobTitle, annualSalary) {
    this.firstname= firstName;
    this.lastname= lastName;
    this.employeeID= employeeID;
    this.jobTitle= jobTitle;
    this.annualSalary= annualSalary;
}

console.log(new Employee('Kong', 'Yang', '1234', 'developer', '12345' ));

// #ToDO: Add Page APIs
let firstName= function() {
    return $('#firstname').val();
}
let lastName= function() {
    return $('#lastname').val();
}
let idNumber= function() {
    return $('#idnumber').val();
}
let jobTitle= function() {
    return $('#').val();
}
let empSalary= function() {
    return $('#').val();
}
// $('#firstname')...

// #Todo: Clear form
$('#firstname').val('');
$('#lastname').val('');
$('#idnumber').val('');
$('#jobtitle').val('');
$('#salary').val('');


//#todo: add employee data to the table


//#todo: empty table
//#todo: handler to add new employee
// #todo: handler to delete an employee
// #todo: add salary