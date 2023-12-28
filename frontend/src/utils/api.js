import axios from "axios";

const params = {
  headers: {
    Authorization:
      "bearer " +
      "90b018657d965bb28696cc08b943de3e3219f32da7680dfd81ef951b30af57738c9982b77c00927ff4cff5e89157255dc09b3eecde3dc53ba1a4ae00cd265d44474644c0beafb4922ac6d2993fa9ea4639f3f14454ef30a492fbeb16f246855e418959418222c914aadd8cd7d68d2b7450aba40dec7106a554858c50119ee16a",
  },
};

const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(`/${url}`, params);
    return data;
  } catch (error) {
    console.log("Error in Fetch Data", error);
    return error;
  }
};

export default fetchDataFromApi;
