package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/celsoblackfyre/crud-go/models"
	"github.com/gorilla/mux"
)

var usuarios = []models.Usuario{
	{ID: 1, Nome: "João", Email: "j@j.com", NomeUsuario: "joao", Senha: "123456"},
	{ID: 2, Nome: "Maria", Email: "m@m.com", NomeUsuario: "maria", Senha: "123456"},
}

func GetUsuarios(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(usuarios)
}

func GetUsuario(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	id, _ := strconv.Atoi(params["id"])

	for _, usuario := range usuarios {
		if usuario.ID == id {
			json.NewEncoder(w).Encode(usuario)
			return
		}
	}
	json.NewEncoder(w).Encode(&models.Usuario{})
}

func CriarUsuario(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var novoUsuario models.Usuario
	json.NewDecoder(r.Body).Decode(&novoUsuario)
	novoUsuario.ID = len(usuarios) + 1
	novoUsuario.CriadoEm = time.Now()
	novoUsuario.AtualizadoEm = time.Now()
	usuarios = append(usuarios, novoUsuario)
	json.NewEncoder(w).Encode(novoUsuario)
}

func AtualizarUsuario(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	id, _ := strconv.Atoi(params["id"])

	for index, usuario := range usuarios {
		if usuario.ID == id {
			usuarios = append(usuarios[:index], usuarios[index+1:]...)
			var usuarioAtualizado models.Usuario
			json.NewDecoder(r.Body).Decode(&usuarioAtualizado)
			usuarioAtualizado.ID = id
			usuarioAtualizado.CriadoEm = time.Now()
			usuarioAtualizado.AtualizadoEm = time.Now()
			usuarios = append(usuarios, usuarioAtualizado)
			json.NewEncoder(w).Encode(usuarioAtualizado)
			return
		}
	}
}

func DeletarUsuario(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)

	id, _ := strconv.Atoi(params["id"])

	for index, usuario := range usuarios {
		if usuario.ID == id {
			usuarios = append(usuarios[:index], usuarios[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(usuarios)
}
