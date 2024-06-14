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

	r.Run()

}
