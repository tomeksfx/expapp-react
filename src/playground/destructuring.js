// OBJECT DESTRUCTURING

// const person = {
//     name: 'Tomek',
//     age: 30,
//     location: {
//         city: 'Warsaw',
//         temp: 17
//     }
// }

// const { name: firstname = 'Anonymous', age } = person;

// console.log(`${firstname} is ${age}`)

// const { city, temp: temperature } = person.location;


// if (city && temperature ) {
//     console.log(`It's ${temperature} in ${city}`)
// };

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName) // Penguin, Self-Published

// ARRAY DESTRUCTURING

const address = ['34 Warszawska', 'Warsaw', 'Masovian', '00-000'];
const [street, city, state = 'Masovian'] = address;
console.log(`You are in ${street} ${city}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [position, , priceMedium] = item;
console.log(`Medium ${position} costs ${priceMedium}`)