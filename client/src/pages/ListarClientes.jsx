import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getClientes, deletarCliente } from "../services/ClienteSV";
//----------------------------------------------------------------
const ListarClientes = () => {
	const [clientes, setClientes] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		buscarClientes();
	}, []);

	//FUNCAO QUE BUSCA OS CLIENTES CADASTRADOS
	const buscarClientes = async () => {
		try {
			const resposta = await getClientes();
			console.log("Reposta API:", resposta);

			const data = resposta.data;
			if (Array.isArray(data.clientes)) {
				setClientes(data.clientes);
			} else {
				console.error("Deu ruim");
				console.error(data.clientes);
				throw new Error("Error ao buscar os clientes");
			}
		} catch (error) {
			console.error("Erro ao buscar os clientes:", error);
			setError(error.message);
		}
	};

	//FUNCAO PARA DELETAR OS CLIENTES CADASTRADOS
	function deletarClientes(id) {
		deletarCliente(id)
			.then(() => {
				// Filmes atualizado após a exclusão
				buscarClientes();
			})
			.catch((error) => setError(error));
	}

	//FUNCAO PARA ATUALIZAR OS CLIENTES COM O CLICK DO BOTAO
	//CONDICAO PARA MOSTRAR ERROS
	if (error) {
		return <div>Erro: {error}</div>;
	}

	return (
		<div className="mt-16">
			<div className="px-4 sm:px-8 max-w-5xl m-auto">
				<h1 className="text-center font-semibold text-sm">Lista de filmes</h1>
				<p className="mt-2 text-center text-xs mb-4 text-gray-500">
					Puxados do Golang
				</p>
				<ul className="border border-gray-200 rounded overflow-hidden shadow-md">
					{clientes.map((cliente) => (
						<li
							className="px-4 py-2 bg-white hover:bg-sky-100 text-cyan-500 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
							key={cliente.id}>
							{cliente.nome}
							<br />
							{cliente.cpf}
							<br />
							{cliente.endereco}
							<br />
							{cliente.bairro}
							<br />
							{cliente.cidade}
							<br />
							{cliente.estado}
							<br />
							{cliente.cep}
							<br />
							{cliente.email}
							<br />
							{cliente.telefone}
							<br />
							{cliente.criadoem}
							<br />
							<Link to={`/Clientes/${cliente.id}`}>Update</Link>
							<button
								className="btn btn-primary"
								onClick={() => deletarClientes(cliente.id)}>
								Deletar
							</button>
						</li>
					))}
				</ul>
				<div className="botoes display flex m-5 gap-3">
					<div className="botao-volta">
						<Link to={`/`} className="btn btn-primary">
							Voltar
						</Link>
					</div>
					<div className="botao-criar">
						<Link to={`/clientes/criar`} className="btn btn-primary">
							Criar
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListarClientes;
