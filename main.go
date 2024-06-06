package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/celsoblackfyre/handlers"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/usuarios", handlers.GetUsuarios).Methods("GET")

	http.ListenAndServe(":8080", r)
}

	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/api/usuarios", handlers.GetUsuarios).Methods("GET")

	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	fmt.Fprintf(w, "POWER OVER SPICE IS POWER OVER ALL!")
	// })
	http.ListenAndServe(":8080", r)
}
