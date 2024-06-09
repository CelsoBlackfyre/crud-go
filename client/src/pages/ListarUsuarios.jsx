import React, { useState, useEffect } from "react";
import { criarUsuario, getUsuarios } from "../services/UsuarioSV";
import { deletarUsuario } from "../services/UsuarioSV";
import { Link } from "react-router-dom";
import { atualizarUsuario } from "../services/UsuarioSV";
import CriarUsuario from "./CriarUsuarios";
//----------------------------------------------------------------
const ListarUsuarios = () => {
	const [usuarios, setUsuarios] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		buscarUsuarios();
	}, []);

	//FUNCAO QUE BUSCA OS USUARIOS CADASTRADOS
	const buscarUsuarios = async () => {
		try {
			const resposta = await getUsuarios();
			console.log("Reposta API:", resposta);

			// Access the usuarios array from the resposta object
			const data = resposta.data;
			if (Array.isArray(data.usuarios)) {
				setUsuarios(data.usuarios);
			} else {
				console.error("Deu ruim");
				console.error(data.usuarios);
				throw new Error("Error ao buscar os usuarios");
			}
		} catch (error) {
			console.error("Erro ao buscar os usuarios:", error);
			setError(error.message);
		}
	};

	//FUNCAO PARA DELETAR OS USUARIOS COM O CLICK DO BOTAO
	const deletarUsuarios = async (id) => {
		console.log("Botao pressionado", id);
		try {
			await deletarUsuario(id);
			setUsuarios(usuarios.filter((usuario) => usuario.id !== usuario));
			alert("Usuario deletado com sucesso");
		} catch (error) {
			console.error("Erro ao deletar o usuario:", error);
			setError(error.message);
		}
	};

	//CONDICAO PARA MOSTRAR ERROS
	if (error) {
		return <div>Erro: {error}</div>;
	}

	return (
		<div className="mt-16">
			<div className="px-4 sm:px-8 max-w-5xl m-auto">
				<h1 className="text-center font-semibold text-sm">Lista de Usuarios</h1>
				<p className="mt-2 text-center text-xs mb-4 text-gray-500">
					Puxados do Golang
				</p>
				<ul className="border border-gray-200 rounded overflow-hidden shadow-md">
					{usuarios.map((usuario) => (
						<li
							className="px-4 py-2 bg-white hover:bg-sky-100 text-cyan-500 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
							key={usuario.id}>
							{usuario.nome}
							<br />
							{usuario.email}
							<br />
							<Link to={`/atualizar/${usuario.id}`}>Atualizar</Link>
							<button
								className="btn btn-primary"
								onClick={() => deletarUsuarios(usuario.id)}>
								Deletar
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ListarUsuarios;
