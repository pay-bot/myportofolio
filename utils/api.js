import axios from "axios";

export const getDetailPost = async (slug) => {
  try {
    const data = await axios.get(
      `${process.env.API_URL}/blog?slug=${slug}`
    );
    return data.data[0];
  } catch (error) {
    return [];
  }
};

export const getPost = async () => {
  try {
    const data = await axios.get(`${process.env.API_URL}/blog?_sort=id:desc`)
    return data.data
  } catch (error) {
    return [];
  }
};

export const getProject = async () => {
  try {
    const data = await axios.get(`${process.env.API_URL}/project?_sort=id:desc`)
    return data.data
  } catch (error) {
    return [];
  }
};

export const getProjectByCategory = async (id) => {
  try {
    const data = await axios.get(
      `${process.env.API_URL}/project/categories?category_id=${id}`
    );
    return data.data[0];
  } catch (error) {
    return [];
  }
};