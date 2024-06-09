import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListarUsuarios from "./pages/ListarUsuarios";
import CriarUsuario from "./pages/CriarUsuarios";
import AtualizarUsuarios from "./pages/AtualizarUsuarios";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/criar" element={<CriarUsuario />}></Route>
					<Route path="/atualizar/:id" element={<AtualizarUsuarios />}></Route>
					<Route path="/listar/" element={<ListarUsuarios />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
