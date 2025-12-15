import axios from "axios";

export const getTestimonials = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/testemonials/GetAll`,
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getHomepage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/viedoAndAboutSection/get/1`,
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getAboutPage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/viedoAndAboutSection/get/2`,
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getAllActivities = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/activity/GetAll`,
      { method: "GET" }
    );
    console.log(response,"Found Images DATa");
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getFaqByPage = async (pageid) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/getByPage/${pageid}`,
      { method: "GET" }
    );
    const jsonData = await response?.json();

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getActivityByTitle = async (title) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/activity/getBytitle?Title=${title}`,
      { method: "GET" }
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPromoActivity = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/PramotionalActivity/GetAll`
    );
    
    // const jsonData = await response.json();

    return response;
  } catch (error) {
    console.log(error);
  }
};
