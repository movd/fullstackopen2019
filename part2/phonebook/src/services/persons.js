import axios from "axios";
const url = "http://localhost:3001/persons";

const getData = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const create = async (newPerson) => {
  try {
    const response = await axios.post(url, newPerson);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getData: getData,
  create: create
};
