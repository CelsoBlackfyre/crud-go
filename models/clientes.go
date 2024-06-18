package models

import (
	"mime/multipart"
	"time"
)

type Cliente struct {
	ID           int                   `json:"id" gorm:"primaryKey"`
	Nome         string                `json:"nome"`
	Cpf          string                `json:"cpf"`
	Endereco     string                `json:"endereco"`
	Bairro       string                `json:"bairro"`
	Cidade       string                `json:"cidade"`
	Estado       string                `json:"estado"`
	Cep          string                `json:"cep"`
	Email        string                `json:"email"`
	Telefone     string                `json:"telefone"`
	CriadoEm     time.Time             `json:"criadoem"`
	AtualizadoEm time.Time             `json:"atualizadoem"`
	Status       int                   `json:"status"`
	Foto         *multipart.FileHeader `json:"foto" gorm:"type:varchar(255)"`
	Assinatura   []Assinatura          `json:"assinatura" gorm:"foreignKey:ClienteID"`
}
