console.log('JQ');

$(document).ready(readyNow);

const employeeArray = [];
let totalSalary = 0;
let monthlyTotal = 20000;

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
    
    addToEmployee(employeeFormObject);
    resetInputs();  
}

function addToEmployee(employeeFormObject){
    employeeArray.push(employeeFormObject);
    render(); 
}

function deleteEntry() {
    const id = $(this).parent().data('id');
    employeeArray.splice(id,1);
    render();
}


function resetInputs(){
 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function findTotal(){
    totalSalary = 0;
    for ( let employee of employeeArray){
        totalSalary += (employee.employeeSalary / 12); 
    }
    overMonthly();
}

function render(){
    $('.js-employeeInfo').empty();
    findTotal();
    for ( let i = 0; i < employeeArray.length; i++){
        const employee = employeeArray[i];
        $('.js-employeeInfo').append(`
        <div data-id="${i}">
            <span>${employee.employeeFirst} ${employee.employeeLast} ${employee.employeeID} ${employee.employeeTitle} ${employee.employeeSalary}</span>
            <button class="js-btn-delete">Clear</button>
        </div>
        `); 
    }
    $('.js-monthly').text(`Total Monthly Salary : $${totalSalary.toFixed(2)}`)
}

function overMonthly() {
    if(monthlyTotal >= monthlyTotal) {
        console.log('Too Much!');
    }else {
    }
}

