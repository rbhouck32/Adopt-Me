import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
    const { id } = useParams();
    // calling useQuery from react-query- Param 1 = array: 2 Params (Passing Key "details" to useQuery as well as the "id" we want to query.) Param 2 = function fetchPet (if "details" is not stored in the cache run fetchPet method in order to obtain data) 
    const results = useQuery(["details", id], fetchPet);

    //if fetchPet function is running - Provide user with a conditionally rendered loading screen withdog emoji - Until Data is Fetched.
    if(results.isLoading) {
      return (
        <div className="loading-pane">
          <h2 className="loader">🐶</h2>
        </div>
      )
    }

    const pet = results.data.pets[0]

    return (
            <div className="details">
              <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
              </div> 
            </div>
        
      );
  };
  
  export default Details;