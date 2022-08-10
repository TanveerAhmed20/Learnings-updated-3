import axios from "axios";

const baseUrl = "http://localhost:3001/trainings";

export function getTrainings(id) {
  if (!id) {
    return axios.get(baseUrl);
  }
  return axios.get(baseUrl + "/" + id);
}
export function deleteTraining(id){
  return axios.delete(baseUrl+"/"+id);
}

export function createTraining(training){
  return axios.post(baseUrl, {id: training.trainingId, ...training}, {headers: {"content-type": "application/json"}});
}

export function editTraining(id, training){
  return axios.patch(baseUrl+"/"+id, training, {headers: {"content-type": "application/json"}});
}
