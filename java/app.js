// let ageNumber = 32;
// alert (ageNumber);
// let greetingText = "Hi my name is Max"
// alert(greetingText);
// alert(greetingText);
// greetingText = 'Hi,I am really Max!';
// alert (greetingText);
// alert (age);
// alert (age);
// let jobPlace = 'New York'
// let jobSalary = 5000;
// let jobTitle = 'Developer'

let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);

age = 45;

totalAdultYears = calculateAdultYears(age);
alert(totalAdultYears);
