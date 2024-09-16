/*
En esta clase se enseña las consulas a varias tablas usando JOIN
*/

-- usando la misma base de datos de la clase anterior se insertan usuario y peliculas
INSERT INTO users(name, email, password, roles_id)
VALUES ('Pepe Perez', 'pepe@email.com', '123456', 1),
('Juan Gomez', 'juan@email.com', '123456', 2);

INSERT INTO movies(title, description, length, release_date, rating, published)
VALUES ('Pelicula 1', 'descripcion', 120, '2020-01-02', 1, TRUE),
('Pelicula 2', 'descripcion', 122, '2023-10-09', 3, TRUE);

INSERT INTO movie_images(url, movies_id) VALUES('image-movie1.png', 1);

-- Hacer consultas con INNER JOIN para obtener los datos de los usuarios con el nombre del role
SELECT users.id, users.name, users.email, users.avatar, roles.name as role
FROM users
INNER JOIN roles on users.roles_id = roles.id;

-- Muchas veces necesitamos traer los valores sin importar si la llave foranea es nula, o no existen datos en la tabla, 
-- para esto debemos usar LEFT JOIN, ya que si usamos INNER JOIN solo nos va a traer los q no tienen la llave foranea con valor  null
SELECT 
movies.id, 
movies.title, 
movies.description, 
movies.length, 
movies.rating, 
movies.published,
movie_images.url as image
FROM movies
LEFT JOIN movie_images ON movies.id = movie_images.movies_id;