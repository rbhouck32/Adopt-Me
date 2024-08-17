import { useState, useEffect } from "react";

import Pet from "./Pet";
import useBreedList from "./useBreedList.js";

const SearchParams = () => {
  //Created an Array for our preset list of available breeds.
  const ANIMALS = ["bird", "cat", "dog", "reptile", "rabbit"];

  //setting state for form data - (searchParams include location, animal, breed) pets is storing JSON data returned from our api @ http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    requestPets();
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    //fetching our response
    const res = await fetch(
      //making a fetch call to pets api endpoint
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    //setting variable json ro res.json
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      {/* onSubmit = preventDefault to disable formData submission - trigger action = requestPets() is invoked */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location:
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breeds}
            disabled={breeds.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
