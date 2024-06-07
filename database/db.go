package database

db, err := gorm.Open(mysql.Open("go-db.mysql"), &gorm.Config{})
if err != nil {
	logl.Fatalf("Erro ao tentar conectar no banco de dados: %v", err)
}