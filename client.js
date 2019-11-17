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

function findTotal(){
    totalSalary = 0;
    for ( let employee of employeeArray){
        totalSalary += (employee.employeeSalary / 12); 
    }
    overMonthly();
}

function resetInputs(){
 
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

function deleteEntry() {
    const id = $(this).parent().data('id');
    employeeArray.splice(id,1);
    render();
}

function overMonthly() {
    if(totalSalary >= monthlyTotal) {
        $(".js-monthly").css("color","red")
        console.log('Too Much!');
    }else {
        $(".js-monthly").css("color","black")
        console.log('Keep Going!')
    }
}

function render(){
    $('.js-employeeInfo').empty();
    findTotal();

    for ( let i = 0; i < employeeArray.length; i++){
        const employee = employeeArray[i];
        
        $('.js-employeeInfo').append(`
            <tr data-id="${i}">
                <td>${employee.employeeFirst}</td>
                <td>${employee.employeeLast}</td>
                <td>${employee.employeeID}</td>
                <td>${employee.employeeTitle}</td>
                <td>${employee.employeeSalary}</td>
                <td><button class="js-btn-delete">Clear</button></td>
            </tr>
        `); 
    }
    $('.js-monthly').text(`Total Monthly Salary : $${totalSalary.toFixed(2)}`)
}


