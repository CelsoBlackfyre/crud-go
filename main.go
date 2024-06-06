package main

import (
	"net/http"

	"github.com/gorilla/mux"

	"github.com/celsoblackfyre/frameworkteste/handlers"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/usuarios", handlers.GetUsuarios).Methods("GET")
	r.HandleFunc("/api/usuarios/{id:[0-9]+}", handlers.GetUsuario).Methods("GET")
	r.HandleFunc("/api/usuarios/criar", handlers.CriarUsuario).Methods("POST")
	r.HandleFunc("/api/usuarios/{id:[0-9]+}", handlers.AtualizarUsuario).Methods("PUT")
	r.HandleFunc("/api/usuarios/{id:[0-9]+}", handlers.DeletarUsuario).Methods("DELETE")

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprintf(w, "POWER OVER SPICE IS POWER OVER ALL!")
	// })
	http.ListenAndServe(":8080", r)
}
