import axios from "axios";
const apiBaseUrl = "http://localhost:3000/api/task";

export async function getApiTasks() {
  try {
    const { data } = await axios.get(apiBaseUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postApiTask(content) {
  try {
    const { data } = await axios.post(apiBaseUrl, {
      content
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}