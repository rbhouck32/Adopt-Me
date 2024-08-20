import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


import Results from "./Results.jsx"
import useBreedList from "./useBreedList.js";
import fetchSearch from "./fetchSearch.js";



const SearchParams = () => {
  //Created an Array for our preset list of available breeds.
  const ANIMALS = ["bird", "cat", "dog", "reptile", "rabbit"];

  //setting state for form data - (searchParams include location, animal, breed) pets is storing JSON data returned from our api @ http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: ""
  });

  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? []

  return (
    <div className="search-params">
      {/* onSubmit = preventDefault to disable formData submission - trigger action = requestPets() is invoked */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? ""
            
          }
          setRequestParams(obj)
        }}
      >
        <label htmlFor="location">
          Location:
          <input
            id="location"
            name="location"
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
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
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
            name="breed"
            disabled={breeds.length === 0}
          >
            <option />
            {breeds.map((breed) => (
              <option id={`breed_option_${breed.id}`} key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
