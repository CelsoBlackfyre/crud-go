package handlers

import (
	"fmt"
	"mime/multipart"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/models"
)

var clientes = []models.Cliente{
	{
		ID:           1,
		Nome:         "Celso",
		Cpf:          "011881",
		Endereco:     "Havai,10",
		Bairro:       "Havai",
		Cidade:       "Belo Horizonte",
		Estado:       "MG",
		Cep:          "30170-001",
		Email:        "XXXXXXXXXXXXXXX",
		Telefone:     "31999999999",
		CriadoEm:     time.Now(),
		AtualizadoEm: time.Now().AddDate(0, 0, 1),
		Foto:         nil,
	},
	{
		ID:           2,
		Nome:         "Joao",
		Cpf:          "011882",
		Endereco:     "Havai,11",
		Bairro:       "Havai",
		Cidade:       "Belo Horizonte",
		Estado:       "MG",
		Cep:          "30170-001",
		Email:        "XXXXXXXXXXXXXXX",
		Telefone:     "31999999999",
		CriadoEm:     time.Now(),
		AtualizadoEm: time.Now().AddDate(0, 0, 1),
		Foto:         nil,
	},
}

func GetClientes(c *gin.Context) {
	var clientes []models.Cliente
	models.BD.Find(&clientes)
	c.JSON(http.StatusOK, gin.H{"clientes": clientes})
}

func GetCliente(c *gin.Context) {
	var cliente models.Cliente

	if err := models.BD.Where("id = ?", c.Param("id")).First(&cliente).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cliente nao encontrado"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"cliente": cliente})
}

type ClienteInput struct {
	Nome         string                `json:"nome" binding:"required"`
	Cpf          string                `json:"cpf" binding:"required"`
	Endereco     string                `json:"endereco" binding:"required"`
	Bairro       string                `json:"bairro" binding:"required"`
	Cidade       string                `json:"cidade" binding:"required"`
	Estado       string                `json:"estado" binding:"required"`
	Cep          string                `json:"cep" binding:"required"`
	Email        string                `json:"email" binding:"required"`
	Telefone     string                `json:"telefone" binding:"required"`
	CriadoEm     time.Time             `json:"criado_em"`
	AtualizadoEm time.Time             `json:"atualizado_em"`
	Foto         *multipart.FileHeader `json:"foto" swaggerignore:"true"`
}

func CriarCliente(c *gin.Context) {
	var input ClienteInput

	input.Nome = c.PostForm("nome")
	input.Cpf = c.PostForm("cpf")
	input.Endereco = c.PostForm("endereco")
	input.Bairro = c.PostForm("bairro")
	input.Cidade = c.PostForm("cidade")
	input.Estado = c.PostForm("estado")
	input.Cep = c.PostForm("cep")
	input.Email = c.PostForm("email")
	input.Telefone = c.PostForm("telefone")

	if err := c.ShouldBind(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	file, err := c.FormFile("foto")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	filePath := filepath.Join("./asset/%s", file.Filename)
	if err := c.SaveUploadedFile(file, filePath); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	cliente := models.Cliente{
		Nome:         input.Nome,
		Cpf:          input.Cpf,
		Endereco:     input.Endereco,
		Bairro:       input.Bairro,
		Cidade:       input.Cidade,
		Estado:       input.Estado,
		Cep:          input.Cep,
		Email:        input.Email,
		Telefone:     input.Telefone,
		CriadoEm:     time.Now(),
		AtualizadoEm: time.Now(),
		Foto:         filePath,
	}

	models.BD.Create(&cliente)

	c.JSON(http.StatusOK, gin.H{"cliente": cliente})
}

type ClienteUpdateInput struct {
	Nome         string    `json:"nome"`
	Cpf          string    `json:"cpf"`
	Endereco     string    `json:"endereco"`
	Bairro       string    `json:"bairro"`
	Cidade       string    `json:"cidade"`
	Estado       string    `json:"estado"`
	Cep          string    `json:"cep"`
	Email        string    `json:"email"`
	Telefone     string    `json:"telefone"`
	AtualizadoEm time.Time `json:"atualizado_em"`
	Foto         string    `json:"foto" swaggerignore:"true"`
}

func AtualizarCliente(c *gin.Context) {
	var cliente models.Cliente

	if err := models.BD.Where("id = ?", c.Param("id")).First(&cliente).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cliente nao encontrado"})
		return
	}

	var input ClienteUpdateInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	models.BD.Model(&cliente).Updates(input)

	c.JSON(http.StatusOK, gin.H{"cliente": cliente})
}

func DeletarCliente(c *gin.Context) {
	var cliente models.Cliente

	if err := models.BD.Where("id = ?", c.Param("id")).First(&cliente).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cliente nao encontrado"})
		return
	}

	models.BD.Delete(&cliente)

	c.JSON(http.StatusOK, gin.H{"message": "Cliente deletado com sucesso"})
}
