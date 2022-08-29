export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9017c02485mshb5a944787affd7fp111d56jsn317556eabccc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}