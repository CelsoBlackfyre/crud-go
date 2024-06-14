package models

import (
	"time"
)

type Assinatura struct {
	ID           int       `json:"id" gorm:"primaryKey"`
	Plano        string    `json:"plano"`
	DataInicio   time.Time `json:"data_inicio"`
	DataFim      time.Time `json:"data_fim"`
	CriadoEm     time.Time `json:"criado_em"`
	AtualizadoEm time.Time `json:"atualizado_em"`
	Status       int       `json:"status"`
	ClienteID    int       `json:"clienteid"`
	Cliente      Cliente   `json:"cliente" gorm:"foreignKey:ClienteID;references:ID"`
}
