const bcryptjs = require('bcryptjs');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Neilson',
          email: 'testev@venutetech.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Neilson 2',
          email: 'testev2@venutetech.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Neilson 3',
          email: 'testev3@venutetech.com',
          password_hash: await bcryptjs.hash('147852369', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  // async down() {},
};
