// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// function ExerciseDataFetching() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     ApiDataGetter();
//   }, []);
//   const ApiDataGetter = async () => {
//     const response = await axios.get("http://localhost:3200/exerciseData");
//     try {
//       if (response.status === 200) {
//         dispatch({
//           type: "apiDataSetting",
//           package: response.data,
//         });
//       }
//     } catch (err) {
//       alert("something went wrong please refresh");
//     }
//   };
// }

// export default ExerciseDataFetching;

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: {
    limit: "1400",
    offset: "0",
  },
  headers: {
    "x-rapidapi-key": "37522f0213msha43adc865d7be3fp11fdacjsn8427d45dc574",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};
function ExerciseDataFetching() {
  const dispatch = useDispatch();
  useEffect(() => {
    ApiDataGetter();
  }, []);
  const ApiDataGetter = async () => {
    try {
      const response = await axios.request(options);
      if (response.status === 200) {
        dispatch({
          type: "apiDataSetting",
          package: response.data,
        });
      } else {
        alert("something went wrong ! please refresh the page");
      }
    } catch (error) {
      console.error(error);
      alert("something went wrong ! please refresh the page");
    }
  };
}

export default ExerciseDataFetching;
// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises",
//   params: {
//     limit: "1400",
//     offset: "0",
//   },
//   headers: {
//     "x-rapidapi-key": "37522f0213msha43adc865d7be3fp11fdacjsn8427d45dc574",
//     "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//   },
// };
