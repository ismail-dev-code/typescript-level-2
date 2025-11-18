// union 
type UserRole = "admin" | "user";
const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "admin dashboard"
  }
  else if (role === "user") {
    return "user dashboard"
  }
  else {
    return "guest dashboard"
  }
}
// console.log(getDashboard("admin"));


// intersection &
type Employee = {
  id: string;
  name: string;
  phoneNo: string;

}

type Manager = {
  designation: string;
  teamSize: number
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb: EmployeeManager = {
  id: "2523",
  name: "Chowdhury Shaheb",
  phoneNo: "2352135312",
  designation: "manager",
  teamSize: 2135
}

console.log(ChowdhuryShaheb);