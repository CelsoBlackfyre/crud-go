import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListarUsuarios from "./pages/ListarUsuarios";
import CriarUsuario from "./pages/CriarUsuarios";
import AtualizarUsuarios from "./pages/AtualizarUsuarios";
import Listarfilmes from "./pages/ListarFilmes";
import CriarFilme from "./pages/CriarFilmes";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/criar" element={<CriarUsuario />}></Route>
					<Route path="/atualizar/:id" element={<AtualizarUsuarios />}></Route>
					<Route path="/listar/" element={<ListarUsuarios />}></Route>
					<Route path="/criarFilme" element={<CriarFilme />}></Route>
					<Route path="/filmes/" element={<Listarfilmes />}></Route>
					<Route path="/filmes/:id" element={<Listarfilmes />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
