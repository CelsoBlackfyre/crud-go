import axios from "axios";

const API_URL = "http://localhost:8080";

export const getClientes = () => {
	return axios.get(`${API_URL}/clientes`);
};

export const getCliente = (id) => {
	return axios.get(`${API_URL}/clientes/${id}`);
};

export const criarCliente = (cliente) => {
	return axios.post(`${API_URL}/clientes`, cliente);
};

export const atualizarCliente = async (id, cliente) => {
	return axios.put(`${API_URL}/clientes/${id}`, cliente);
};

export const deletarCliente = async (id) => {
	return axios.delete(`${API_URL}/clientes/${id}`);
};
