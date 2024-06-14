package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/handlers"
	"github.com/celsoblackfyre/frameworkteste/models"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())

	models.ConectarBanco()

	r.GET("/usuarios", handlers.GetUsuarios)
	r.POST("/usuarios", handlers.CriarUsuario)
	r.GET("/usuarios/:id", handlers.GetUsuario)
	r.PATCH("/usuarios/:id", handlers.AtualizarUsuario)
	r.DELETE("/usuarios/:id", handlers.DeletarUsuario)

	r.GET("/clientes", handlers.GetClientes)
	r.POST("/clientes", handlers.CriarCliente)
	r.GET("/clientes/:id", handlers.GetCliente)
	r.PATCH("/clientes/:id", handlers.AtualizarCliente)
	r.DELETE("/clientes/:id", handlers.DeletarCliente)

	r.GET("/filmes", handlers.GetFilmes)
	r.POST("/filmes", handlers.CriarFilme)
	r.GET("/filmes/:id", handlers.GetFilme)
	r.PATCH("/filmes/:id", handlers.AtualizarFilme)
	r.DELETE("/filmes/:id", handlers.DeletarFilme)

	r.GET("/assinaturas", handlers.GetAssinaturas)
	r.POST("/assinaturas", handlers.CriarAssinatura)
	r.GET("/assinaturas/:id", handlers.GetAssinatura)
	r.PATCH("/assinaturas/:id", handlers.AtualizarAssinatura)
	r.DELETE("/assinaturas/:id", handlers.DeletarAssinatura)

	r.Run()

}
