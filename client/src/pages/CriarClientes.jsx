import React, { useState } from "react";
import { criarCliente } from "../services/ClienteSV";

const CriarCliente = () => {
	const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
	const [endereco, setEndereco] = useState("");
	const [bairro, setBairro] = useState("");
	const [cidade, setCidade] = useState("");
	const [estado, setEstado] = useState("");
	const [cep, setCep] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [foto, setFoto] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("nome", nome);
		formData.append("cpf", cpf);
		formData.append("endereco", endereco);
		formData.append("bairro", bairro);
		formData.append("cidade", cidade);
		formData.append("estado", estado);
		formData.append("cep", cep);
		formData.append("email", email);
		formData.append("telefone", telefone);
		if (foto) {
			formData.append("foto", foto);
		}

		criarCliente(formData)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleFileChange = (e) => {
		setFoto(e.target.files[0]);
	};

	return (
		<div className="container">
			<div className="relative flex flex-col justify-center overflow-hidden">
				<div className="p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50">
					<h1 className="text-3xl font-semibold text-center text-gray-700">
						Golang Crud
					</h1>
					<form className="space-y-4" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
						<div>
							<label className="label">
								<span className="text-base label-text">Nome</span>
							</label>
							<input
								type="text"
								placeholder="Nome do Cliente"
								className="w-full input input-bordered"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">CPF</span>
							</label>
							<input
								type="text"
								placeholder="CPF do Cliente"
								className="w-full input input-bordered"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Endereco</span>
							</label>
							<input
								type="text"
								placeholder="Endereco"
								className="w-full input input-bordered"
								value={endereco}
								onChange={(e) => setEndereco(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Bairro</span>
							</label>
							<input
								type="text"
								placeholder="Bairro"
								className="w-full input input-bordered"
								value={bairro}
								onChange={(e) => setBairro(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Cidade</span>
							</label>
							<input
								type="text"
								placeholder="Cidade"
								className="w-full input input-bordered"
								value={cidade}
								onChange={(e) => setCidade(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Estado</span>
							</label>
							<input
								type="text"
								placeholder="Estado"
								className="w-full input input-bordered"
								value={estado}
								onChange={(e) => setEstado(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">CEP</span>
							</label>
							<input
								type="text"
								placeholder="CEP"
								className="w-full input input-bordered"
								value={cep}
								onChange={(e) => setCep(e.target.value)}
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
								<span className="text-base label-text">Telefone</span>
							</label>
							<input
								type="text"
								placeholder="Telefone"
								className="w-full input input-bordered"
								value={telefone}
								onChange={(e) => setTelefone(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Foto</span>
								<input
									type="file"
									placeholder="Foto"
									onChange={(e) => setFoto(e.target.files[0])}
								/>
							</label>
						</div>
						<div>
							<button className="btn btn-block" type="submit">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CriarCliente;
