import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { atualizarUsuario } from "../services/UsuarioSV";

function AtualizarUsuarios() {
	const { id } = useParams();
	const [dados, setDados] = useState({
		id: id,
		nome: "",
		email: "",
		nomeUsuario: "",
		senha: "",
	});

	// const atualizarUsuarios = async (id) => {
	// 	console.log("Botao pressionado", id);
	// 	try {
	// 		await atualizarUsuario(id);
	// 		setDados(dados.filter((dados) => dados.nome === id));
	// 	} catch (error) {
	// 		console.error("Erro ao tentar atualizar o usuario");
	// 	}
	// };

	const handleChange = (e) => {
		setDados(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await atualizarUsuario(id, dados);
			console.log("Usuario atualizado com sucesso");
		} catch (error) {
			console.error("Erro ao tentar atualizar o usuario", error);
		}
	};

	return (
		<>
			<div className="relative flex flex-col justify-center h-screen overflow-hidden">
				<div className=" p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 ">
					<h1 className="text-3xl font-semibold text-center text-gray-700">
						Golang Crud
					</h1>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="label">
								<span className="text-base label-text">Nome</span>
							</label>
							<input
								type="text"
								placeholder="Name"
								className="w-full input input-bordered"
								value={dados.nome}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="Email"
								className="w-full input input-bordered"
								value={dados.email}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Nome de Usuario</span>
							</label>
							<input
								type="text"
								placeholder="Nome de Usuario"
								className="w-full input input-bordered"
								value={dados.nomeUsuario}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Senha</span>
							</label>
							<input
								type="password"
								placeholder="Digite sua senha"
								className="w-full input input-bordered"
								value={dados.senha}
								onChange={handleChange}
							/>
						</div>

						<div>
							<button className="btn btn-block" type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default AtualizarUsuarios;
