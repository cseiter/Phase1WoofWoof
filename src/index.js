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

function clickDogButton(e) {
    if(e.target.innerText.includes("Good"))
        {dogUpdate = false}
        else {dogUpdate = true}
    updateSingleDog(e.target.id, dogUpdate)
}

function updateSingleDog(dogId, dogUpdate) {
    const options = {
        method: "PATCH",
        headers: {
                "content-type": "application/json"
        },
        body: JSON.stringify({
            isGoodDog: dogUpdate
        })
    }
    return fetch(builtURL + `/${dogId}`, options)
        .then(r => r.json())
}

function createSpan(DogArray) {
    const dogBar = document.getElementById('dog-bar')
    DogArray.forEach(dogObj => {
        const dogSpan = document.createElement('span')
        dogSpan.innerText = dogObj.name
        dogSpan.id = dogObj.id
        dogSpan.addEventListener("click", clickDogSpan)
        dogBar.append(dogSpan)
    });
}

function clickDogSpan(e) {
    getSingleDog(e.target.id)
    .then(createDetails)
}

function createDetails(indDog) {
    const dogInfo = document.getElementById('dog-info');
    dogInfo.innerHTML = ""
    const dogInfoImage = document.createElement('img'),
    dogInfoH2 = document.createElement('h2'),
    dogInfoButton = document.createElement('button');
    dogInfoButton.id = indDog.id;
    dogInfoButton.addEventListener("click",clickDogButton);
    dogInfoImage.src = indDog.image;
    dogInfoH2.innerText = indDog.name;
    if (indDog.isGoodDog)
        {dogInfoButton.innerText = "Good Dog!"}
    else {dogInfoButton.innerText = "Bad Dog!"};
    dogInfo.append(dogInfoImage,dogInfoH2,dogInfoButton);
}

getAllDogs().then(createSpan);