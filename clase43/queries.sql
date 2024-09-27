use liteflix_db;

-- Upper y Lower 
SELECT
    title,
    UPPER(title) AS 'Título en Mayúsculas',
    LOWER(title) AS 'Título en Minúsculas'
FROM
    movies;

-- Concat 
SELECT
    title,
    CONCAT(title, ' - ', release_date) AS 'Título y Fecha'
FROM
    movies;

-- Replace 
SELECT
    title,
    REPLACE(title, 'Inception', 'Aventura') AS 'Título Modificado'
FROM
    movies;

-- JOIN CON TABLAS PELICULAS DIRECTORES Y LENGUAJES
SELECT
    m.title AS Película,
    d.name AS Director,
    l.name AS Idioma
FROM
    movies m -- Unir películas con la tabla de relación películas-directores
    JOIN movies_has_directors mhd ON m.id = mhd.movies_id -- Unir la tabla de relación con directores
    JOIN directors d ON mhd.directors_id = d.id -- Unir películas con la tabla de relación películas-idiomas
    JOIN movies_has_languages mhl ON m.id = mhl.movies_id -- Unir la tabla de relación con idiomas
    JOIN languages l ON mhl.languages_id = l.id
WHERE
    m.published = 1
ORDER BY
    m.title;

-- SELECT NOW() AS 'Fecha y Hora Actual';
SELECT
    NOW() AS 'Fecha y Hora Actual';

-- Dias de estreno
SELECT
    title,
    DATEDIFF(CURDATE(), release_date) AS 'Días Desde el Estreno'
FROM
    movies;

-- YEAR de una fecha
SELECT
    title,
    YEAR(release_date) AS 'Año de Estreno',
    MONTH(release_date) AS 'Mes de Estreno',
    DAY(release_date) AS 'Dia de Estreno'
FROM
    movies;

-- FORMAT formatea fecha
SELECT
    title,
    DATE_FORMAT(release_date, '%d/%m/%Y') AS 'Fecha Formateada'
FROM
    movies;

-- JOIN CON ACTORES DIRECTORES Y PELICULAS
SELECT
    m.title AS Película,
    a.name AS Actor,
    d.name AS Director
FROM
    movies m -- Unir películas con la tabla de relación películas-actores
    JOIN movies_has_actors mha ON m.id = mha.movies_id -- Unir la tabla de relación con actores
    JOIN actors a ON mha.actors_id = a.id -- Unir películas con la tabla de relación películas-directores
    JOIN movies_has_directors mhd ON m.id = mhd.movies_id -- Unir la tabla de relación con directores
    JOIN directors d ON mhd.directors_id = d.id
WHERE
    m.published = 1
ORDER BY
    m.title,
    a.name;

-- GROUP BY Peliculas por categorias
SELECT
    movie_categories.name AS 'Categoría',
    COUNT(movies.id) AS 'Número de Películas'
FROM
    movie_categories
    LEFT JOIN movies_has_movie_categories ON movie_categories.id = movies_has_movie_categories.movie_categories_id
    LEFT JOIN movies ON movies_has_movie_categories.movies_id = movies.id
GROUP BY
    movie_categories.name
ORDER BY
    'Número de Películas' DESC;

-- Having y Group by contador de peliculas por director
SELECT
    directors.name AS 'Director',
    COUNT(movies.id) AS 'Número de Películas'
FROM
    directors
    INNER JOIN movies_has_directors ON directors.id = movies_has_directors.directors_id
    INNER JOIN movies ON movies_has_directors.movies_id = movies.id
GROUP BY
    directors.name
HAVING
    COUNT(movies.id) > 1
ORDER BY
    COUNT(movies.id) DESC;

-- SubConsultas - Consultas anidadas dentro de otras
-- Peliculas con un ranking superior a la media WHERE
SELECT
    title,
    rating
FROM
    movies
WHERE
    rating > (
        SELECT
            AVG(rating)
        FROM
            movies
    );

-- Cantidad de actores por peliculas SELECT
SELECT
    m.title,
    (
        SELECT
            COUNT(*)
        FROM
            movies_has_actors ma
        WHERE
            ma.movies_id = m.id
    ) AS actor_count
FROM
    movies m;

-- Media de los ratings para traer las peliculas qeu estan por encima de la media
SELECT
    title
FROM
    movies
WHERE
    rating > (
        SELECT
            AVG(rating)
        FROM
            movies
    );

-- Transacciones
/* Queremos agregar una pelicula y tambien agregar actores y directores, queremos qeu todo se haga en conjunto, si algo falla que se revierta */
-- Iniciar la transacción
START TRANSACTION;

-- Intentar agregar una nueva película
INSERT INTO
    movies (
        title,
        description,
        length,
        release_date,
        rating,
        published
    )
VALUES
    (
        'Batman',
        'A thief who steals corporate secrets through the use of dream-sharing technology.',
        148,
        '2010-07-16',
        86,
        1
    );

-- Obtener el ID de la película recién insertada
SET
    @movie_id = LAST_INSERT_ID();

-- Agregar actores a la película
INSERT INTO
    movies_has_actors (movies_id, actors_id)
VALUES
    (@movie_id, 1);

-- Asumiendo que el actor con id 1 existe
INSERT INTO
    movies_has_actors (movies_id, actors_id)
VALUES
    (@movie_id, 2);

-- Asumiendo que el actor con id 2 existe
-- Agregar director a la película
INSERT INTO
    movies_has_directors (movies_id, directors_id)
VALUES
    (@movie_id, 1);

-- Asumiendo que el director con id 1 existe
-- Aquí, deberías manejar el resultado de las inserciones en tu aplicación
-- Para fines de este ejemplo, puedes realizar un COMMIT o ROLLBACK manualmente según el estado
COMMIT;

-- O ROLLBACK; si hay errores
/* PROCEDIMIENTOS ALMACENADOS */
-- Procedimiento para insertar una nueva pelicula, asociar actores y el director.
/* CREACION DEL PROCEDIMIENTO */
DELIMITER / / CREATE PROCEDURE AddMovie (
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_length INT,
    IN p_release_date DATE,
    IN p_rating INT,
    IN p_published TINYINT,
    IN p_actors_id VARCHAR(255),
    -- IDs de actores separados por comas
    IN p_director_id INT
) BEGIN DECLARE movie_id INT;

-- Iniciar la transacción
START TRANSACTION;

-- Insertar la película
INSERT INTO
    movies (
        title,
        description,
        length,
        release_date,
        rating,
        published
    )
VALUES
    (
        p_title,
        p_description,
        p_length,
        p_release_date,
        p_rating,
        p_published
    );

-- Obtener el ID de la película recién insertada
SET
    movie_id = LAST_INSERT_ID();

-- Agregar actores
SET
    @sql = CONCAT(
        'INSERT INTO movies_has_actors (movies_id, actors_id) VALUES ',
        REPLACE(
            p_actors_id,
            ',',
            CONCAT('(', movie_id, ', '),
            '), ('
        ),
        ');'
    );

PREPARE stmt
FROM
    @sql;

EXECUTE stmt;

DEALLOCATE PREPARE stmt;

-- Agregar director
INSERT INTO
    movies_has_directors (movies_id, directors_id)
VALUES
    (movie_id, p_director_id);

-- Confirmar la transacción
COMMIT;

END / / DELIMITER;

/* LLAMAR AL PROCEDIMIENTO */
CALL AddMovie(
    'Inception',
    'A thief who steals corporate secrets through the use of dream-sharing technology.',
    148,
    '2010-07-16',
    86,
    1,
    '1,2,3',
    -- IDs de actores separados por comas
    1 -- ID del director
);