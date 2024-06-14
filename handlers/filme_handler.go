package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/models"
)

var filmes = []models.Filme{
	{
		ID:            1,
		Titulo:        "Star Wars",
		Descricao:     "In a galaxy far far away",
		Ano:           1977,
		Genero:        "Ficcao",
		Classificacao: "14",
		CriadoEm:      time.Now(),
		AtualizadoEm:  time.Now(),
	},
}

func GetFilmes(c *gin.Context) {
	var filmes []models.Filme
	models.BD.Find(&filmes)
	c.JSON(http.StatusOK, gin.H{"filmes": filmes})
}

func GetFilme(c *gin.Context) {
	var filme models.Filme
	id := c.Param("id")
	models.BD.First(&filme, id)
	if filme.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Filme nao encontrado"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"filme": filme})
}

type FilmeInput struct {
	Titulo        string `json:"titulo" binding:"required"`
	Descricao     string `json:"descricao" binding:"required"`
	Ano           int    `json:"ano" binding:"required"`
	Genero        string `json:"genero" binding:"required"`
	Classificacao string `json:"classificacao" binding:"required"`
}

func CriarFilme(c *gin.Context) {
	var input FilmeInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	filme := models.Filme{
		Titulo:        input.Titulo,
		Descricao:     input.Descricao,
		Ano:           input.Ano,
		Genero:        input.Genero,
		Classificacao: input.Classificacao,
		CriadoEm:      time.Now(),
		AtualizadoEm:  time.Now(),
	}
	models.BD.Create(&filme)
	c.JSON(http.StatusOK, gin.H{"filme": filme})
}

type FilmeUpdateInput struct {
	Titulo        string `json:"titulo"`
	Descricao     string `json:"descricao"`
	Ano           int    `json:"ano"`
	Genero        string `json:"genero"`
	Classificacao string `json:"classificacao"`
	AtualizadoEm  time.Time
}

func AtualizarFilme(c *gin.Context) {
	var filme models.Filme
	id := c.Param("id")
	models.BD.First(&filme, id)
	if filme.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Filme nao encontrado"})
		return
	}
	var input FilmeUpdateInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	models.BD.Model(&filme).Updates(input)
	c.JSON(http.StatusOK, gin.H{"filme": filme})
}

func DeletarFilme(c *gin.Context) {
	var filme models.Filme
	id := c.Param("id")
	models.BD.First(&filme, id)
	if filme.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Filme nao encontrado"})
		return
	}
	models.BD.Delete(&filme)
	c.JSON(http.StatusOK, gin.H{"message": "Filme deletado"})
}
