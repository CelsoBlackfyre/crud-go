import { useState } from "react";

import "./App.css";
import ListarUsuarios from "./pages/ListarUsuarios";
import CriarUsuario from "./pages/CriarUsuarios";

function App() {
	return (
		<>
			<div className="App">
				<h1 className="text-center items-center">Golang Test</h1>
			</div>
			<ListarUsuarios />
			<CriarUsuario />
		</>
	);
}

export default App;
