import axios from "axios";

const GET_RESOURCES =
  "https://media-content.ccbp.in/website/react-assignment/resources.json";

const ADD_RESOURCES =
  "https://media-content.ccbp.in/website/react-assignment/add_resource.json";

export const getAllResources = async () => {
  try {
    const res = await axios.get(GET_RESOURCES);
    return { success: res.status, data: res.data };
  } catch (error: unknown) {
    return { success: false, data: null, error: error };
  }
};

export const addResource = async () => {
  try {
    const res = await axios.get(ADD_RESOURCES);
    return { success: true, data: res };
  } catch (error: unknown) {
    return { success: false, data: null, error: error };
  }
};
