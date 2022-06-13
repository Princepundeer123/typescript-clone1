import axios from "axios";

export const getLectures = () => {
    return  axios.get('https://api.codeyogi.io/batches/1/sessions', {
               withCredentials: true
           });
   };


   export const getAssignments = () => {
    return  axios.get('https://api.codeyogi.io/batches/1/assignments', {
               withCredentials: true
           });
   }; 