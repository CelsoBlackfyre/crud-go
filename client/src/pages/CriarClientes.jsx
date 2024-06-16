import React, { useState, useEffect } from "react";
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
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({
			nome,
			cpf,
			endereco,
			bairro,
			cidade,
			estado,
			cep,
			email,
			telefone,
		});
		criarCliente({
			nome,
			cpf,
			endereco,
			bairro,
			cidade,
			estado,
			cep,
			email,
			telefone,
		});
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

export default CriarCliente;

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
