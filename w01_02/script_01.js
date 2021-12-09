const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

///////////// array nom prénom
/*
const firstLast = entrepreneurs.map(function (entrepreneur) {
    return entrepreneur.first +" "+ entrepreneur.last

});

console.log(firstLast)
*/

// avec arrow function
const firstLast = entrepreneurs.map(
  (entrepreneur) => entrepreneur.first + " " + entrepreneur.last
);
console.log(firstLast);

///////////// nom et âge aujourd'hui
// /!\AU SECOURS/!\
// const ageToday = entrepreneurs.map(
//   (entrepreneur, ageToday) => { return ageToday.((new Date().getFullYear()) - entrepreneur.year
// )};

///////////// first/last en firstName/lastName

const firstNamelastName = entrepreneurs.map((substituteKey) => {
  return { first_name: substituteKey.first, last_name: substituteKey.last };
});

console.log(firstNamelastName);

///////////// nés années 70

const seventiesBabies = entrepreneurs.filter(
  (entrepreneur) => entrepreneur.year <= 1979 && entrepreneur.year >= 1970
);

console.log(seventiesBabies);
