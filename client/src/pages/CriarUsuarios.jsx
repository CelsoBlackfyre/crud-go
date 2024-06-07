import React, { useState, useEffect } from "react";
import { criarUsuario } from "../services/UsuarioSV";

const CriarUsuario = () => {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [nomeUsuario, setNomeUsuario] = useState("");
	const [senha, setSenha] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ nome, email, nomeUsuario, senha });
		criarUsuario({ nome, email, nomeUsuario, senha });
	};

	// const handleChange = (e) => {
	// 	setUsuario({
	// 		...usuario,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

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
								value={nome}
								onChange={(e) => setNome(e.target.value)}
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
								value={email}
								onChange={(e) => setEmail(e.target.value)}
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
								value={nomeUsuario}
								onChange={(e) => setNomeUsuario(e.target.value)}
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
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
							/>
						</div>

						<div>
							<button className="btn btn-block" type="submit">
								Enviar
							</button>
						</div>
						<span>
							Already have an account ?
							<a
								href="#"
								className="text-blue-600 hover:text-blue-800 hover:underline">
								Login
							</a>
						</span>
					</form>
				</div>
			</div>
		</>
	);
};

export default CriarUsuario;

{
	/* <div classNameName="container mt-32">
				<div>
					<form onSubmit={handleSubmit}>
						<div classNameName="field">
							<label htmlFor="nome">Nome:</label>
							<input
								type="text"
								value={nome}
								name="nome"
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
						<div classNameName="field">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								value={email}
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div classNameName="field">
							<label htmlFor="nomusuario">Nome de Usuario:</label>
							<input
								type="text"
								value={nomeUsuario}
								name="nomeusuario"
								onChange={(e) => setNomeUsuario(e.target.value)}
							/>
						</div>
						<div classNameName="field">
							<label htmlFor="senha">Senha:</label>
							<input
								type="password"
								value={senha}
								name="senha"
								onChange={(e) => setSenha(e.target.value)}
							/>
						</div>
						<button type="submit">Criar</button>
					</form>
				</div>
			</div> */
}
