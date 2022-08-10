import axios from "axios";

const base = "http://localhost:3006";

export function getPlayers() {
  return axios.get(`${base}/players`);
}

export function getPlayers2(id) {
  return axios.get(`${base}/players/${id}`);
}

export function deletePlayer(id) {
  return axios.delete(`${base}/players/${id}`);
}

export function createPlayer(data) {
  return axios.post(`${base}/players`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function editPlayer(id, data) {
  return axios.patch(`${base}/players/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
