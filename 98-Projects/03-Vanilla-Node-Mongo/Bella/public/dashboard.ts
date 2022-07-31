// import Chartjs, { Chart } from 'chart.js';

let employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart');

const chart = new Chart(ctx, {
    // The type of chart
    type: 'bar',

    // The data for the dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData
        },
        {
          label: 'Employee Age',
          backgroundColor: 'pink',
          borderColor: 'rgb(255, 99, 132)',
          data: employeeAgeData
      }
      ]
    },

    // Configuration options
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

dummyChart()


//Fetch Data from API

async function getDummyData() {
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees"

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.data.map((obg) => obg.employee_salary)
  console.log(salary)
  const age = barChatData.data.map((obg) => obg.employee_age)
  const name = barChatData.data.map((obg) => obg.employee_name)

 employeeSalaryData = salary
 employeeAgeData = age
 employeeLabel = name
}

