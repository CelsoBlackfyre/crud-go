package main

import (
	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/handlers"
	"github.com/celsoblackfyre/frameworkteste/models"
)

func main() {
	r := gin.Default()

	models.ConectarBanco()

	r.GET("/usuarios", handlers.GetUsuarios)
	r.POST("/usuarios", handlers.CriarUsuario)
	r.GET("/usuarios/:id", handlers.GetUsuario)
	r.PATCH("/usuarios/:id", handlers.AtualizarUsuario)
	r.DELETE("/usuarios/:id", handlers.DeletarUsuario)

	r.Run()

}
