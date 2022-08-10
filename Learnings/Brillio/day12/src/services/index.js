import axios from "axios";

const base = "http://localhost:3008";

export function getPlayers() {
  return axios.get(`${base}/players`);
}

export function getPlayers2(id) {
  // return axios.get(`${base}/players/${id}`);
  return axios.get(`${base}/players/${id}`);
}

export function deletePlayer(id) {
  return axios.delete(`${base}/players/${id}`);

}

export function createPlayer(player) {
  return axios.post(`${base}/players`, player, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function editPlayer(id, player) {
  return axios.patch(`${base}/players/${id}`, player, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
