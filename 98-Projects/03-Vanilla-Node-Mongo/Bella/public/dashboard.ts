// import Chartjs, { Chart } from 'chart.js';

let employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart');
// @ts-ignore
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

async function secondChart() {
  await getDummyData()

const ctx = document.getElementById('myChart2');
// @ts-ignore
const chart = new Chart(ctx, {
    // The type of chart
    type: 'bar',

    // The data for the dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'green',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData
        },
        {
          label: 'Employee Age',
          backgroundColor: 'purple',
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

async function thirdChart() {
  await getDummyData()

const ctx = document.getElementById('myChart3');
// @ts-ignore
const chart = new Chart(ctx, {
    // The type of chart
    type: 'bubble',

    // The data for the dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'magenta',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData
        },
        {
          label: 'Employee Age',
          backgroundColor: 'orange',
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


async function forthChart() {
  await getDummyData()

const ctx = document.getElementById('myChart4');
// @ts-ignore
const chart = new Chart(ctx, {
    // The type of chart
    type: 'line',

    // The data for the dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: employeeSalaryData
        },
        {
          label: 'Employee Age',
          backgroundColor: 'yellow',
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


secondChart()
thirdChart()
forthChart()
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

