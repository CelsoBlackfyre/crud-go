import axios from "axios";

const API_URL = "http://localhost:8080";

export const getFilmes = () => {
	return axios.get(`${API_URL}/filmes`);
};

export const getFilme = (id) => {
	return axios.get(`${API_URL}/filmes/${id}`);
};

export const criarFilme = (filme) => {
	return axios.post(`${API_URL}/filmes`, filme);
};

export const atualizarFilme = async (id, filme) => {
	return axios.put(`${API_URL}/filmes/${id}`, filme);
};

export const deletarFilme = async (id) => {
	return axios.delete(`${API_URL}/filmes/${id}`);
};
