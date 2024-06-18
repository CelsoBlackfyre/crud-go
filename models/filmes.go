package models

import (
	"mime/multipart"
	"time"
)

type Filme struct {
	ID            int                   `json:"id" gorm:"primaryKey"`
	Titulo        string                `json:"titulo"`
	Descricao     string                `json:"descricao"`
	Ano           int                   `json:"ano"`
	Genero        string                `json:"genero"`
	Classificacao string                `json:"classificacao"`
	CriadoEm      time.Time             `json:"criado_em"`
	AtualizadoEm  time.Time             `json:"atualizado_em"`
	Status        int                   `json:"status"`
	Poster        *multipart.FileHeader `json:"poster" gorm:"type:varchar(255)"`
}
