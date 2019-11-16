console.log('JQ');

$(document).ready(readyNow);

const employeeArray = [];
let totalSalary = 0;

function readyNow(){
    $('#employeeAction').on('submit', submitEmployeeAction);
    $('.js-btn-clear').on('click', resetInputs);
    $('.js-employeeInfo').on('click', '.js-btn-delete', deleteEntry)
}

function submitEmployeeAction(event) {
    event.preventDefault();

    const employeeFormObject = {
        employeeFirst: $('#firstName').val(),
        employeeLast: $('#lastName').val(),
        employeeID: $('#iDNumber').val(),
        employeeTitle: $('#jobTitle').val(),
        employeeSalary: parseInt($('#annualSalary').val()),
    }
    // I get an error message when trying to add lines 26-33 in my render function. It says my employeeFormObject is  
    // undefined. Works fine I guess if it's in here.
    $('.js-employeeInfo').append(`
    <div>
        <span>${employeeFormObject.employeeFirst} ${employeeFormObject.employeeLast} ${employeeFormObject.employeeID} ${employeeFormObject.employeeTitle} ${employeeFormObject.employeeSalary}</span>
        <button class="js-btn-delete">Clear</button>
    </div>
    `); 

    $('.js-monthly').text(`Total Monthly Salary : $${totalSalary}`)

    addToEmployee(employeeFormObject);
    resetInputs();    
}


function addToEmployee(employeeFormObject){
    employeeArray.push(employeeFormObject);
    render(); 
}

function deleteEntry() {
    $(this).parent().remove();
    render(); 
}


function resetInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function addSalary(){
    totalSalary = 0;
    totalSalary += employeeFormObject.employeeSalary;
}
function render(){

}
