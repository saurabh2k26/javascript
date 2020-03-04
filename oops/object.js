var employee = {
  "dept" : "tech",
  "company" : "twitter"
}

var emp1 = employee
console.log(emp1.dept)   // dot notation
console.log(emp1["company"])   // bracket notation
emp1.company = "google"
console.log(emp1["company"]) 
emp1.name = "Saurabh" //adding new property
console.log(emp1)  // can print whole object
delete employee.dept   // deleting an objects property
console.log(emp1) 

// checking if property exists
console.log(emp1.hasOwnProperty("company"))
console.log(emp1.hasOwnProperty("dept"))
