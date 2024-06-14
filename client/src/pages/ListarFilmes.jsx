import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFilme, getFilmes, deletarFilme } from "../services/FIlmeSV";
//----------------------------------------------------------------
const Listarfilmes = () => {
	const [filmes, setFilmes] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		buscarFilmes();
	}, []);

	//FUNCAO QUE BUSCA OS FILMES CADASTRADOS
	const buscarFilmes = async () => {
		try {
			const resposta = await getFilmes();
			console.log("Reposta API:", resposta);

			const data = resposta.data;
			if (Array.isArray(data.filmes)) {
				setFilmes(data.filmes);
			} else {
				console.error("Deu ruim");
				console.error(data.filmes);
				throw new Error("Error ao buscar os filmes");
			}
		} catch (error) {
			console.error("Erro ao buscar os filmes:", error);
			setError(error.message);
		}
	};

	//FUNCAO PARA DELETAR OS FILMES COM O CLICK DO BOTAO
	function deletarFilmes(id) {
		deletarFilme(id)
			.then(() => {
				// Filmes atualizado após a exclusão
				buscarFilmes();
			})
			.catch((error) => setError(error));
	}

	//FUNCAO PARA ATUALIZAR OS FILMES COM O CLICK DO BOTAO
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
					{filmes.map((filme) => (
						<li
							className="px-4 py-2 bg-white hover:bg-sky-100 text-cyan-500 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
							key={filme.id}>
							{filme.titulo}
							<br />
							{filme.descricao}
							<br />
							{filme.anoLancamento}
							<br />
							{filme.genero}
							<br />
							{filme.classificacao}
							<br />
							<Link to={`/filmes/${filme.id}`}>Update</Link>
							<button
								className="btn btn-primary"
								onClick={() => deletarFilmes(filme.id)}>
								Deletar
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Listarfilmes;
