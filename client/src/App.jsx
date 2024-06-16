import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ListarUsuarios from "./pages/ListarUsuarios";
import CriarUsuario from "./pages/CriarUsuarios";
import AtualizarUsuarios from "./pages/AtualizarUsuarios";
import ListarFilmes from "./pages/ListarFilmes";
import ListarClientes from "./pages/ListarClientes";
import CriarFilme from "./pages/CriarFilmes";
import ListarAssinaturas from "./pages/ListarAssinaturas";
import CriarAssinatura from "./pages/CriarAssinaturas";
import CriarCliente from "./pages/CriarClientes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Pagina Principal */}
				<Route path="/" element={<Home />} />

				{/* Usuario*/}
				<Route path="/usuarios" element={<ListarUsuarios />} />
				<Route path="/usuarios/criar" element={<CriarUsuario />} />
				<Route path="/usuarios/atualizar/:id" element={<AtualizarUsuarios />} />
				<Route path="/usuarios/deletar/:id" element={<ListarUsuarios />} />

				{/* Filmes */}
				<Route path="/filmes" element={<ListarFilmes />} />
				<Route path="/filmes/:id" element={<ListarFilmes />} />
				<Route path="/filmes/atualizar/:id" element={<ListarFilmes />} />
				<Route path="/filmes/deletar/:id" element={<ListarFilmes />} />
				<Route path="/filmes/criar" element={<CriarFilme />} />

				{/* Clientes */}
				<Route path="/clientes" element={<ListarClientes />} />
				<Route path="/clientes/:id" element={<ListarClientes />} />
				<Route path="/clientes/criar" element={<CriarCliente />} />
				<Route path="/clientes/atualizar/:id" element={<ListarClientes />} />
				<Route path="/clientes/deletar/:id" element={<ListarClientes />} />

				{/* Assinatura */}
				<Route path="/assinaturas" element={<ListarAssinaturas />} />
				<Route path="/assinaturas/criar" element={<CriarAssinatura />} />
				<Route path="/assinaturas/:id" element={<ListarAssinaturas />} />
				<Route
					path="/assinaturas/deletar/:id"
					element={<ListarAssinaturas />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
