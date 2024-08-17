import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        //calls to api for list of breeds based on type of animal - @ `http://pets-v2.dev-apis.com/breeds?animal=${animal}`;
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      //if we call requestBreedList() then no breed existed and we want to then save to localCache; if json.breeds does not exist then we set localCache to an empty array;
      localCache[animal] = json.breeds || [];
      //Setting breedList to whatever value exists in localCache; ie. localCache[animal] || [];
      setBreedList(localCache[animal]);
      //once breedList is updated with data - Status state changes to "loaded";
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
