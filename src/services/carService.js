const CAR_MAKE_LIST_URL =
  "https://private-690441-carsapi1.apiary-mock.com/manufacturers";

const CAR_MODELS_LIST_URL =
  "https://private-anon-a2a3cc399e-carsapi1.apiary-mock.com/cars";

const sortMakeList = (makeList) => {
  let sortedMakes = [];
  makeList.map((make) => {
    sortedMakes.push(make.name.charAt(0).toUpperCase() + make.name.slice(1));
  });
  return sortedMakes.sort();
};

const getSortedCarMakeList = () => {
  return getCarMake().then(sortMakeList);
};

const getCarMake = () => {
  try {
    return fetch(CAR_MAKE_LIST_URL).then((resp) => resp.json());
  } catch (error) {
    console.log(error);
  }
};

const getListOfCarModels = () => {
  return fetch(CAR_MODELS_LIST_URL)
    .then((resp) => resp.json())
};

export default getSortedCarMakeList;
export {getListOfCarModels}