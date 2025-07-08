var express = require('express');
var router = express.Router();

const userRoute = require('../routes/users');
const artisanRoute = require('../routes/artisan');

/**
 * @route GET /
 * @group Général - Informations générales de l'API
 * @returns {object} 200 - Informations de l'API
 */ router.get('/', async (req, res) => {
  res.status(200).json({
    name: process.env.APP_NAME,
    version: '1.0',
    status: 200,
    message: 'Bienvenue sur l\'API !'
  });
});

/**
 * @route /users
 * @group Utilisateurs - Toutes les opérations concernant les utilisateurs.
 * @description Les routes concernant la gestion des utilisateurs (CRUD, authentification).
 */ router.use('/users', userRoute);

/**
 * @route /artisan
 * @group Artisans - Toutes les opérations concernant les artisans.
 * @description Les routes concernant la gestion des artisans (CRUD).
 */ router.use('/artisans', artisanRoute);

module.exports = router;
