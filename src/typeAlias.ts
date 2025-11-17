type User = {
  id: number,
  name: {
    firstName: string,
    lastName: string,
  },
  gender: "Male" | "Female",
  contactNo: string,
  address: {
    district: string,
    city: string,
  }
}

const user1: User = {
  id: 12345,
  name: {
    firstName: "Mr",
    lastName: "X",
  },
  gender: "Male",
  contactNo: "01700000000",
  address: {
    district: "Noakhali",
    city: "Maijdee",
  }
}

const user2: User = {
  id: 25425,
  name: {
    firstName: "Mr",
    lastName: "Y",
  },
  gender: "Female",
  contactNo: "01800000000",
  address: {
    district: "Dhaka",
    city: "Uttara",
  }
}

console.log(user1);
