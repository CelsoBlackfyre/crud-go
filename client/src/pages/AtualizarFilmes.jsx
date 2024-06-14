import { useState } from "react";
import React, { useState } from "react";
import { render } from "react-dom";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AtualizarFilme() {
	const { id } = useParams();
	const [titulo, setTitulo] = useState("");
	const [descricao, setDescricao] = useState("");
	const [anoLancamento, setAnoLancamento] = useState("");
	const [genero, setGenero] = useState("");
	const [classificacao, setClassificacao] = useState("");

	useEffect(() => {
		// Fetch movie data from an API or your data source
		fetch(`${API_URL}/filmes/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setTitulo(data.titulo);
				setDescricao(data.descricao);
				setAnoLancamento(data.anoLancamento);
				setGenero(data.genero);
				setClassificacao(data.classificacao);
			})
			.catch((error) => console.error("Error fetching movie:", error));
	}, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Update the movie data using an API or your data source
		fetch(`${API_URL}/filmes/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				titulo,
				descricaoc,
				anoLancamento,
				genero,
				classificacao,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Filme atualizado:", data);
			})
			.catch((error) => console.error("Error updating movie:", error));
	};

	if (!movie) {
		return <div>Carregando...</div>;
	}

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
}
