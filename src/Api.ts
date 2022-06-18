import axios from "axios";
import { Assignment } from "./modules/assignment";
import { Lecture } from "./modules/lecture";
import { User } from "./modules/user";

type UserResponseProps = { results: User[] };

const CODEYOGI_API_BASE_URL = "https://api.codeyogi.io/";
const RANDOM_USER_API_URL = "https://randomuser.me/api/";

export const getLectures = async () => {
    const Response =   await axios.get<Lecture[]>(CODEYOGI_API_BASE_URL + 'batches/1/sessions', {
               withCredentials: true
           });

  return Response;
   };


   export const getAssignments = async () => {
    const Response = await axios.get<Assignment[]>(CODEYOGI_API_BASE_URL + 'batches/1/assignments', {
               withCredentials: true
           });

  return Response;
   }; 

   export const getUsers = async () => {
    const Response = await axios.get(RANDOM_USER_API_URL + '?results=10');
    
    return Response.data.results;
   };