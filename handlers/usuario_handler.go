package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/models"
)

var usuarios = []models.Usuario{
	{ID: 1, Nome: "João", Email: "j@j.com", NomeUsuario: "joao", Senha: "123456"},
	{ID: 2, Nome: "Maria", Email: "m@m.com", NomeUsuario: "maria", Senha: "123456"},
}

func GetUsuarios(c *gin.Context) {
	var usuarios []models.Usuario
	models.BD.Find(&usuarios)

	c.JSON(http.StatusOK, gin.H{"usuarios": usuarios})
}

func GetUsuario(c *gin.Context) {
	var usuario models.Usuario

	if err := models.BD.Where("id=?", c.Param("id")).First(&usuario).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Deu ruim": "Usuario nao encontrado"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"usuario": usuario})
}

type UsuarioInput struct {
	Nome         string `json:"nome" binding:"required"`
	Email        string `json:"email" binding:"required"`
	NomeUsuario  string `json:"nomeusuario" binding:"required"`
	Senha        string `json:"senha" binding:"required"`
	CriadoEm     string `json:"criadoem"`
	AtualizadoEm string `json:"atualizadoem"`
}

func CriarUsuario(c *gin.Context) {
	var input UsuarioInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Deu ruim": err.Error()})
		return
	}
	usuario := models.Usuario{
		Nome:         input.Nome,
		Email:        input.Email,
		NomeUsuario:  input.NomeUsuario,
		Senha:        input.Senha,
		CriadoEm:     time.Now(),
		AtualizadoEm: time.Now(),
	}
	models.BD.Create(&usuario)
	c.JSON(http.StatusOK, gin.H{"usuario": usuario})
}

type UsuarioUpdate struct {
	Nome         string `json:"nome"`
	Email        string `json:"email"`
	NomeUsuario  string `json:"nomeusuario"`
	Senha        string `json:"senha"`
	AtualizadoEm string `json:"atualizadoem"`
}

func AtualizarUsuario(c *gin.Context) {
	var usuario models.Usuario
	if err := models.BD.Where("id = ?", c.Param("id")).First(&usuario).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Deu ruim": "Usuario nao encontrado"})
		return
	}

	var input UsuarioUpdate
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Deu ruim": err.Error()})
		return
	}

	models.BD.Model(&usuario).Updates(input)
	c.JSON(http.StatusOK, gin.H{"usuario": usuario})
}

func DeletarUsuario(c *gin.Context) {
	var usuario models.Usuario
	if err := models.BD.Where("id = ?", c.Param("id")).First(&usuario).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Deu ruim": "Usuario nao encontrado"})
		return
	}
	models.BD.Delete(&usuario)
	c.JSON(http.StatusOK, gin.H{"usuario": usuario})
}
