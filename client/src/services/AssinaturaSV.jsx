import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAssinaturas = () => {
	return axios.get(`${API_URL}/assinaturas`);
};

export const getAssinatura = (id) => {
	return axios.get(`${API_URL}/assinaturas/${id}`);
};

export const criarAssinatura = (cliente) => {
	return axios.post(`${API_URL}/assinaturas`, cliente);
};

export const atualizarAssinatura = async (id, cliente) => {
	return axios.put(`${API_URL}/assinaturas/${id}`, cliente);
};

export const deletarAssinatura = async (id) => {
	return axios.delete(`${API_URL}/assinaturas/${id}`);
};
