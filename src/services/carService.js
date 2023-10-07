const BASE_URL =
  "https://private-690441-carsapi1.apiary-mock.com/manufacturers";

const getCarMake =  () => {

  try {
    const resp =  fetch(BASE_URL).then((resp)=>resp.json());
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default getCarMake();
