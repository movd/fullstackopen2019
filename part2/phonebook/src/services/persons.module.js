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

const createPerson = async newPerson => {
  try {
    const response = await axios.post(url, newPerson);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteId = async id => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

const updateId = async ({ name, number }, id) => {
  return await axios.put(`${url}/${id}`, { name, number, id });
};

export default { getData, createPerson, deleteId, updateId };
