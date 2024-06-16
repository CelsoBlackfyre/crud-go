import React, { useState, useEffect } from "react";
import { criarAssinatura } from "../services/AssinaturaSV";
const CriarAssinatura = () => {
	const [plano, setPlano] = useState("");
	const [dataInicial, setDataInicial] = useState("");
	const [dataFinal, setDataFinal] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ plano, dataInicial, dataFinal });
		criarAssinatura({ plano, dataInicial, dataFinal });
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
								<span className="text-base label-text">Plano</span>
							</label>
							<input
								type="text"
								placeholder="Plano"
								className="w-full input input-bordered"
								value={plano}
								onChange={(e) => setPlano(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Data Inicial</span>
							</label>
							<input
								type="text"
								placeholder="dataInicio"
								className="w-full input input-bordered"
								value={dataInicial}
								onChange={(e) => setDataInicial(e.target.value)}
							/>
						</div>
						<div>
							<label className="label">
								<span className="text-base label-text">Data Final</span>
							</label>
							<input
								type="text"
								placeholder="Data final"
								className="w-full input input-bordered"
								value={dataFinal}
								onChange={(e) => setDataFinal(e.target.value)}
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

export default CriarAssinatura;

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
