package models

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var BD *gorm.DB

func ConectarBanco() {
	// import "gorm.io/driver/mysql"
	// refer: https://gorm.io/docs/connecting_to_the_database.html#MySQL
	dsn := "root:sql@tcp(127.0.0.1:3306)/go-db?charset=utf8mb4&parseTime=True&loc=Local"
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Não foi possível conectar ao banco de dados")
	}

	err = database.AutoMigrate(&Usuario{})
	if err != nil {
		panic("Não foi possível criar as tabelas no banco de dados")
	}
	BD = database
}
