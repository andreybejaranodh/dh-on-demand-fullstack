use liteflix_db;

-- Agregar campo published en tabla movies
ALTER TABLE
    movies
ADD
    COLUMN published TINYINT(1) DEFAULT FALSE;

-- Insertar datos en la tabla `directors`
INSERT INTO
    directors (name, avatar, bio)
VALUES
    (
        'Juan Pérez',
        'avatar1.jpg',
        'Director español con más de 10 años de experiencia.'
    ),
    (
        'Ana Gómez',
        'avatar2.jpg',
        'Reconocida directora de películas de acción.'
    );

-- Insertar datos en la tabla `actors`
INSERT INTO
    actors (name, avatar, bio)
VALUES
    (
        'Carlos Ruiz',
        'avatar3.jpg',
        'Actor famoso por sus papeles en dramas.'
    ),
    (
        'Lucía Torres',
        'avatar4.jpg',
        'Actriz destacada en películas de comedia.'
    );

-- Insertar datos en la tabla `movie_categories`
INSERT INTO
    movie_categories (name)
VALUES
    ('Acción'),
    ('Comedia'),
    ('Drama');

-- Insertar datos en la tabla `movies`
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
        'Deadpool',
        'Una película emocionante de acción.',
        140,
        '2024-01-01',
        5,
        1
    ),
    (
        'La momia',
        'Una pelicula de terror.',
        90,
        '2024-02-14',
        4,
        0
    ),
    (
        'Intensamente',
        'Comedia animada.',
        70,
        '2024-02-14',
        7,
        0
    ),
    (
        'Toy Story',
        'Una pelicula de disney Pixar.',
        100,
        '2024-02-14',
        9,
        0
    );

-- Insertar datos en la tabla `users`
INSERT INTO
    users (
        name,
        email,
        password,
        avatar,
        roles_id
    )
VALUES
    (
        'Mario López',
        'mario@example.com',
        'password123',
        'avatar5.jpg',
        1
    ),
    (
        'Laura Díaz',
        'laura@example.com',
        'password456',
        'avatar6.jpg',
        2
    );

-- Insertar datos en la tabla `movie_images`
INSERT INTO
    movie_images (url, movies_id)
VALUES
    ('image1.jpg', 1),
    ('image2.jpg', 2);

-- Insertar datos en las tablas intermedias
INSERT INTO
    movies_has_actors (movies_id, actors_id)
VALUES
    (1, 1),
    (1, 2);

INSERT INTO
    movies_has_directors (movies_id, directors_id)
VALUES
    (1, 1);

INSERT INTO
    movies_has_movie_categories (
        movies_id,
        movie_categories_id
    )
VALUES
    (1, 1),
    (2, 2);

INSERT INTO
    movies_has_subtitles (movies_id, subtitles_id)
VALUES
    (1, 1),
    (2, 2);

INSERT INTO
    movies_has_languages (movies_id, languages_id)
VALUES
    (1, 1),
    (2, 2);

-- Consulta con Between
SELECT
    title,
    description,
    length
from
    movies
where
    length BETWEEN 100
    AND 120;

-- Consulta con Like
SELECT
    name,
    avatar,
    bio
FROM
    actors
WHERE
    name LIKE 'C%';

-- Consulta con limit
SELECT
    title,
    description,
    length
from
    movies
LIMIT
    3;

-- Consulta con Order by
SELECT
    title,
    description,
    rating
FROM
    movies
ORDER BY
    rating DESC;

-- Consultas con MAX MIN
SELECT
    MAX(length) AS max_length,
    MIN(length) AS min_length
FROM
    movies;

-- Consultas con SUM para saber el total de duración
SELECT
    SUM(length) as total_duration
FROM
    movies;

-- Cantidad de usuarios con COUNT
SELECT
    COUNT(*) as users_count
FROM
    users;

-- Consultas con COUNT para ver cuantas peliculas estan disponibles
SELECT
    COUNT(*) AS published_movies_count
FROM
    movies -- WHERE 
    --     published = 1;
    -- Hacer consultas con INNER JOIN para obtener los datos de los usuarios con el nombre del role
SELECT
    users.id,
    users.name,
    users.email,
    users.avatar,
    roles.name as role
FROM
    users
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
FROM
    movies
    LEFT JOIN movie_images ON movies.id = movie_images.movies_id;