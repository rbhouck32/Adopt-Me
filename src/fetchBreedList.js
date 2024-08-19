//creating a custom hook in order to be able to import a fetchBreed function where needed.

const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  //using react-query: set up api response making call to our pets api - passing an "id" parameter to a query string.
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch was not successful`);
  }

  return apiRes.json();
};

export default fetchBreedList;
