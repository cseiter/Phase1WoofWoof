const testDog = {
    "id": 1,
    "name": "Mr. Bonkers",
    "isGoodDog": true,
    "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
}

const testDogArray = [
    {
      "id": 1,
      "name": "Mr. Bonkers",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    },
    {
      "id": 2,
      "name": "Nugget",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      "id": 3,
      "name": "Skittles",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
    }
]

const rootURL = "http://localhost:3000/pups";

function getAllDogs() {
    builtURL = `${rootURL}`
    return fetch(builtURL)
    .then(r => r.json())
}

function getSingleDog(dogId) {
    return fetch(builtURL + `/${dogId}`)
    .then (r => r.json())
}

function createSpan(testDog) {
    const dogBar = document.getElementById('dog-bar')
    const dogSpan = document.createElement('span')
    dogSpan.innerText = testDog.name
    dogBar.append(dogSpan)
}

getAllDogs().then(console.log);

getSingleDog(3).then(console.log);

createSpan(testDog);