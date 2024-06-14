import React, { useState, useEffect } from "react";
import { criarFilme } from "../services/FIlmeSV";
const CriarFilme = () => {
	const [titulo, setTitulo] = useState("");
	const [descricao, setDescricao] = useState("");
	const [anoLancamento, setAnoLancamento] = useState("");
	const [genero, setGenero] = useState("");
	const [classificacao, setClassificacao] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ titulo, descricao, anoLancamento, genero, classificacao });
		criarFilme({ titulo, descricao, anoLancamento, genero, classificacao });
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
								<span className="text-base label-text">Titulo</span>
							</label>
							<input
								type="text"
								placeholder="Titulo"
								className="w-full input input-bordered"
								value={titulo}
								onChange={(e) => setTitulo(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Descricao</span>
							</label>
							<input
								type="text"
								placeholder="Descricao"
								className="w-full input input-bordered"
								value={descricao}
								onChange={(e) => setDescricao(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Ano de Lancamento</span>
							</label>
							<input
								type="text"
								placeholder="Ano de Lancamento"
								className="w-full input input-bordered"
								value={anoLancamento}
								onChange={(e) => setAnoLancamento(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Genero</span>
							</label>
							<input
								type="text"
								placeholder="Genero"
								className="w-full input input-bordered"
								value={genero}
								onChange={(e) => setGenero(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Classificacao</span>
							</label>
							<input
								type="text"
								placeholder="Classificacao"
								className="w-full input input-bordered"
								value={classificacao}
								onChange={(e) => setClassificacao(e.target.value)}
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
};

export default CriarFilme;

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
