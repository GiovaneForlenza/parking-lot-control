// import { DataTime } from "luxon";

const BASE_URL =
  "https://private-690441-carsapi1.apiary-mock.com/manufacturers";

const getCarData = async () => {
  return await fetch(BASE_URL).then((res) => res.json());
};

export default getCarData();
