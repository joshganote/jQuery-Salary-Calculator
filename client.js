console.log('JS');

$(document).ready(readyNow);

const employeeArray = [];
let totalSalary = 0;

function readyNow(){
    $('#employeeAction').on('submit', submitEmployeeAction);
    $('.js-btn-clear').on('click', resetInputs);
    //$('.js-employeeInfo').on('click', '.js-btn-delete', deleteEntry)
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
    
    employeeArray.push(employeeFormObject);

    $('.js-employeeInfo').append(`
    <div>
        <span>${employeeFormObject.employeeFirst} ${employeeFormObject.employeeLast} ${employeeFormObject.employeeID} ${employeeFormObject.employeeTitle} ${employeeFormObject.employeeSalary}</span>
        <button>Clear</button>
    </div>
    `);
    //addToEmployee(employeeFormObject);
    totalSalary += employeeFormObject.employeeSalary;
    $('.js-monthly').text(`Total Monthly Salary : $${totalSalary}`)
    //resetInputs();    
}

/*
function addToEmployee(employeeFormObject){
    employeeArray.push(employeeFormObject);
    render();
}
*/

function deleteEntry() {
    $(this).parent().remove();
}


function resetInputs(){
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

/*
function render(){
    
}
*/

// let employeeFirst = $('#firstName').val();
    // let employeeLast = $('#lastName').val();
    // let employeeID = $('#iDNumber').val();
    // let employeeTitle = $('#jobTitle').val();
    // let employeeSalary = parseInt($('#annualSalary').val());