import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	getAssinaturas,
	deletarAssinatura,
	getAssinatura,
} from "../services/AssinaturaSV";
//----------------------------------------------------------------
const ListarAssinaturas = () => {
	const [assinaturas, setAssinaturas] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		buscarAsssinaturas();
	}, []);

	//FUNCAO QUE BUSCA AS ASSINATURAS CADASTRADAS
	const buscarAsssinaturas = async () => {
		try {
			const resposta = await getAssinaturas();
			console.log("Reposta API:", resposta);

			const data = resposta.data;
			if (Array.isArray(data.assinaturas)) {
				setAssinaturas(data.assinaturas);
			} else {
				console.error("Deu ruim");
				console.error(data.assinaturas);
				throw new Error("Error ao buscar as assinaturas");
			}
		} catch (error) {
			console.error("Erro ao buscar as assinaturas:", error);
			setError(error.message);
		}
	};

	//FUNCAO PARA DELETAR AS ASSINATURAS COM O CLICK DO BOTAO
	function deletarAssinaturas(id) {
		deletarAssinatura(id)
			.then(() => {
				// Filmes atualizado após a exclusão
				buscarAsssinaturas();
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
					{assinaturas.map((assinatura) => (
						<li
							className="px-4 py-2 bg-white hover:bg-sky-100 text-cyan-500 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
							key={assinatura.id}>
							{assinatura.plano}
							<br />
							{assinatura.dataInicio}
							<br />
							{assinatura.dataFinal}
							<br />
							<Link to={`/asssinaturas/${assinatura.id}`}>Update</Link>
							<button
								className="btn btn-primary"
								onClick={() => deletarAssinaturas(assinatura.id)}>
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
						<Link to={`/assinaturas/criar`} className="btn btn-primary">
							Criar
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListarAssinaturas;
