export const getRMdetails = async (path, id) => {
    const api = `https://rickandmortyapi.com/api/${path}/${id}`;
    const results = await fetch(api);
    const data = await results.json();
    return data;
  };
  