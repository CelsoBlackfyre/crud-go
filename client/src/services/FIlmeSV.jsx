import axios from "axios";

const API_URL = "http://localhost:8080";

export const getFilmes = () => {
	return axios.get(`${API_URL}/filmes`);
};

export const getFilme = (id) => {
	return axios.get(`${API_URL}/filmes/${id}`);
};

export const criarFilme = (usuario) => {
	return axios.post(`${API_URL}/filmes`, usuario);
};

export const atualizarFilme = async (id, usuario) => {
	return axios.put(`${API_URL}/filmes/${id}`, usuario);
};

export const deletarFilme = async (id) => {
	return axios.delete(`${API_URL}/filmes/${id}`);
};
