
import { useState } from "react";

const SearchParams = () => {
    const Animals = ["Bird", "Cat", "Dog", "Dump"]

    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("")
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location:
            <input onChange={(e) => setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
          </label>
          <label htmlFor="animal">
            Select Animal:
            <select id="animal" onChange={(e) => {setAnimal(e.target)}}>
                    {Animals.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                    ))}
            </select>

          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;