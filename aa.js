function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((num) => num % 2 === 0);
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return evenNumbers.length > 0 ? sum / evenNumbers.length : 0;
}

function longestWord(words) {
  return words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

function averageNumberOfPages(books) {
  const totalPages = books
    .map((book) => book.pages)
    .reduce((acc, pages) => acc + pages, 0);
  return books.length > 0 ? totalPages / books.length : 0;
}

function stringFrequency(strings) {
  return strings.reduce((frequency, str) => {
    frequency[str] = (frequency[str] || 0) + 1;
    return frequency;
  }, {});
}

function countPeopleByCity(people) {
  return people.reduce((countByCity, person) => {
    countByCity[person.city] = (countByCity[person.city] || 0) + 1;
    return countByCity;
  }, {});
}

// Example
const numbers = [1, 2, 3, 4, 5, 6];
console.log(averageOfEvenNumbers(numbers));

const words = ["apple", "banana", "kiwi", "strawberry"];
console.log(longestWord(words));

const books = [
  { title: "Book1", pages: 100 },
  { title: "Book2", pages: 150 },
  { title: "Book3", pages: 120 },
];
console.log(averageNumberOfPages(books));

const strings = ["hello", "world", "hello"];
console.log(stringFrequency(strings));

const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];
console.log(countPeopleByCity(people));
