package models

import "time"

type Usuario struct {
	ID           int       `json:"id"`
	Nome         string    `json:"nome"`
	Email        string    `json:"email"`
	NomeUsuario  string    `json:"nomeusuario"`
	Senha        string    `json:"senha"`
	CriadoEm     time.Time `json:"criadoem"`
	AtualizadoEm time.Time `json:"atualizadoem"`
}
