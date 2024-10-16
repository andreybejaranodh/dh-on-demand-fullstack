'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('movies', [
      {
        id: 1,
        title: "Origen",
        description: "Un ladrón hábil, el mejor en el peligroso arte de la extracción, roba valiosos secretos desde lo más profundo del subconsciente durante el estado de sueño, cuando la mente está más vulnerable.",
        length: 110,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: "Sueños de Libertad",
        description: "Dos hombres encarcelados se unen durante varios años, encontrando consuelo y eventual redención a través de actos de decencia común.",
        length: 120,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: "El Caballero de la Noche",
        description: "Cuando el peligro conocido como el Joker emerge de su misterioso pasado, provoca caos en la gente de Gotham. El Caballero de la Noche debe aceptar una de las pruebas psicológicas y físicas más grandes de su capacidad para luchar contra la injusticia.",
        length: 141,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: "Tiempos Violentos",
        description: "Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gánster y un par de bandidos de cafetería se entrelazan en cuatro historias de violencia y redención.",
        length: 131,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: "Matrix",
        description: "Un hacker informático aprende de unos rebeldes misteriosos sobre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.",
        length: 121,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: "Gladiador",
        description: "Un ex general romano se convierte en gladiador después de ser traicionado por el emperador, buscando venganza por la muerte de su familia.",
        length: 120,
        release_date: new Date('2020-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: "Titanic",
        description: "Una joven de la alta sociedad se enamora de un artista pobre a bordo del lujoso y malogrado Titanic.",
        length: 121,
        release_date: new Date('2002-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: "El Padrino",
        description: "El envejecido patriarca de una dinastía criminal traslada el control de su imperio clandestino a su hijo reacio.",
        length: 132,
        release_date: new Date('2002-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: "Parásitos",
        description: "Una familia pobre se infiltra en la vida de una rica familia haciéndose pasar por trabajadores cualificados, con consecuencias inesperadas.",
        length: 121,
        release_date: new Date('2002-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: "Interstellar",
        description: "Un grupo de exploradores espaciales viaja a través de un agujero de gusano en un intento de asegurar la supervivencia de la humanidad.",
        length: 121,
        release_date: new Date('2002-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        title: "Garfield: La película",
        description: "Tras una inesperada reunión con su largamente perdido padre, el gato callejero Vic, Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
        length: 121,
        release_date: new Date('2002-01-01'),
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', null, { truncate: true, cascade: true });
  }
};
