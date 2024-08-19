//creating a custom hook in order to be able to import a fetchPet function where needed.

const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  //using react-query: set up api response making call to our pets api - passing an "id" parameter to a query string.
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch was not successful`);
  }

  return apiRes.json();
};

export default fetchPet;
