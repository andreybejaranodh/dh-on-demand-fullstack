/*
Aqui se muestran las cosultas basicas para insertar, editar, listar y eliminar registros
*/

-- -----------------------------------------------------
-- Insertar registros
-- Tener en cuenta que no es necesario pasarle el id ya que este lo genera automaticamente la base de datos
-- Documentacion https://www.w3schools.com/sql/sql_insert.asp
-- -----------------------------------------------------
INSERT INTO roles(name) VALUES('Administrador');
INSERT INTO roles(name) VALUES('Usuario');

INSERT INTO languages(name) VALUES('Español');
INSERT INTO languages(name) VALUES('Ingles');
INSERT INTO languages(name) VALUES('Italiano');

-- ----------------------------------------------------
-- Insertar multiples filas
-- ----------------------------------------------------
INSERT INTO subtitles(name)
VALUES ('Español'), ('Ingles'), ('Frances');

-- ----------------------------------------------------
-- Listar Registros
-- Docs: https://www.w3schools.com/sql/sql_select.asp
-- ----------------------------------------------------
-- Para listar todos los registros y todos los campos de una tabla se usa:
SELECT * FROM roles;

SELECT * FROM languages;

SELECT * FROM subtitles;

-- Para listar todos los registro y obtener solo algunos campos
SELECT name FROM roles;

SELECT id FROM languages;

-- ----------------------------------------------------
-- Editar Registros(No olvidar el WHERE)
-- Docs: https://www.w3schools.com/sql/sql_update.asp
-- ----------------------------------------------------
UPDATE subtitles SET name = 'Italiano' WHERE id = 3;

-- ----------------------------------------------------
-- Eliminar Registros(No olvidar el WHERE y ser preciso usando el campo id)
-- Tener en cuenta que el proximo registro que se inserte no va a tomar el id que se elimino, si no el que sigue en la secuencia
-- es decir en este caso el 4 pero si se eliminara el id 1 entonces el siguiente seria 4 o 5 dependiendo de la secuencia
-- Docs: https://www.w3schools.com/sql/sql_delete.asp
-- ----------------------------------------------------
DELETE FROM subtitles WHERE id = 3;

