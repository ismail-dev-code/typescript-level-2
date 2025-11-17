// const course: string = "pro level development"

// console.log(course);

const user = {
  id: 133234,
  name: {
    firstName: "Mohammad",
    middleName: "Ismail",
    lastName: "Hossain",
  },
  favoriteColor: "Black",
  gender: "Male"

}
// const favoriteColor = user.favoriteColor;
// console.log(favoriteColor);
const { favoriteColor } = user;

// console.log(favoriteColor);

const users = ["Rahim",
  "karim", "Baltu", "abdul"]
const [, , , bestFriend] = users
// console.log(bestFriend);