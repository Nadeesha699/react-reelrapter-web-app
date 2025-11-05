import axios from "axios";

export const getDownloadUrl = async ({ urlText }: { urlText: string }) => {
  try {
    const reslut = await axios.post(`http://127.0.0.1:5000/api/download`, {
      url: urlText,
    });
    return reslut.data;
  } catch (error) {
    throw error;
  }
};
