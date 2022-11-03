function createPetList() {
    const pets = [];
    return function addPets(newPet){
        if(!newPet){
            return pets;
        }else{
            pets.push(newPet);
            return pets;
        }
    }
  }

const myPets = createPetList();
console.log(myPets);
console.log(myPets('ArteMimi'));

