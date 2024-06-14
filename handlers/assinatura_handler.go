package handlers

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/celsoblackfyre/frameworkteste/models"
)

func GetAassinaturas(c *gin.Context) {
	var assinaturas []models.Assinatura
	models.BD.Find(&assinaturas)
	c.JSON(http.StatusOK, gin.H{"data": assinaturas})
}

func GetAassinatura(c *gin.Context) {
	var assinatura models.Assinatura
	if err := models.BD.Where("id = ?", c.Param("id")).First(&assinatura).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Assinatura nao encontrada!"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": assinatura})
}

type AssinaturaInput struct {
	Plano        string    `json:"plano"`
	DataInicio   time.Time `json:"data_inicio"`
	DataFim      time.Time `json:"data_fim"`
	CriadoEm     time.Time `json:"criado_em"`
	AtualizadoEm time.Time `json:"atualizado_em"`
}

func CriarAssinatura(c *gin.Context) {
	var input AssinaturaInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	assinatura := models.Assinatura{Plano: input.Plano, DataInicio: input.DataInicio, DataFim: input.DataFim, CriadoEm: input.CriadoEm, AtualizadoEm: input.AtualizadoEm}
	models.BD.Create(&assinatura)
	c.JSON(http.StatusOK, gin.H{"data": assinatura})
}

type AssinaturaUpdateInput struct {
	Plano        string    `json:"plano"`
	DataInicio   time.Time `json:"data_inicio"`
	DataFim      time.Time `json:"data_fim"`
	CriadoEm     time.Time `json:"criado_em"`
	AtualizadoEm time.Time `json:"atualizado_em"`
}

func AtualizarAssinatura(c *gin.Context) {
	var assinatura models.Assinatura
	if err := models.BD.Where("id = ?", c.Param("id")).First(&assinatura).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Assinatura nao encontrada!"})
		return
	}
	var input AssinaturaUpdateInput
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	models.BD.Model(&assinatura).Updates(input)
	c.JSON(http.StatusOK, gin.H{"data": assinatura})
}

func DeletarAssinatura(c *gin.Context) {
	var assinatura models.Assinatura
	if err := models.BD.Where("id = ?", c.Param("id")).First(&assinatura).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Assinatura nao encontrada!"})
		return
	}
	models.BD.Delete(&assinatura)
	c.JSON(http.StatusOK, gin.H{"data": true})
}
