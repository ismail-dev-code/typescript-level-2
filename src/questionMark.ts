// ?: ternary operator : decision making
// ??: nullish coalescing operator // null ar undefined er khetre kaj kore
// ?. optional chaining 

const biyerJonnoEligible = (age: number) => {
  if (age >= 21) {
    console.log("you are eligible for marriage");
  }
  else {
    console.log("you are not eligible for marriage");
  }
}
// biyerJonnoEligible(20)

const userTheme = null;
const selectedTheme = userTheme ?? "Light theme"
// console.log(selectedTheme);

const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest !"
const resultWithNullish = isAuthenticated ?? "you are guest"

console.log({ resultWithTernary }, { resultWithNullish });
