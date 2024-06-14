import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAssinaturas = () => {
	return axios.get(`${API_URL}/assinaturas`);
};

export const getAssinatura = (id) => {
	return axios.get(`${API_URL}/assinaturas/${id}`);
};

export const criarAssinatura = (usuario) => {
	return axios.post(`${API_URL}/assinaturas`, usuario);
};

export const atualizarAssinatura = async (id, usuario) => {
	return axios.put(`${API_URL}/assinaturas/${id}`, usuario);
};

export const deletarAssinatura = async (id) => {
	return axios.delete(`${API_URL}/assinaturas/${id}`);
};
