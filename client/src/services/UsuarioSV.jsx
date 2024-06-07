import axios from "axios";

const API_URL = "http://localhost:8080";

export const getUsuarios = () => {
	return axios.get(`${API_URL}/usuarios`);
};

export const getUsuario = (id) => {
	return axios.get(`${API_URL}/usuarios/${id}`);
};

export const criarUsuario = (usuario) => {
	return axios.post(`${API_URL}/usuarios`, usuario);
};

export const atualizarUsuario = (id, usuario) => {
	return axios.put(`${API_URL}/usuarios/${id}`, usuario);
};

export const deletarUsuario = (id) => {
	return axios.delete(`${API_URL}/usuarios/${id}`);
};
