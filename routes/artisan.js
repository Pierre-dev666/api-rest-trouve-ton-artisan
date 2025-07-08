var express = require('express');
var router = express.Router();

const artisanService = require('../services/artisan');

const private = require('../middlewares/private');

/**
 * @route POST /
 * @group Artisan - Opérations sur les artisans
 * @param {object} artisan.body.required - Informations du artisan à créer
 * @returns {Artisan} 201 - Artisan créé
 * @returns {Error} 400 - Requête invalide
 */
router.post('/', artisanService.createArtisan);

/**
 * @route GET /
 * @group Artisans - Opérations sur les artisans
 * @returns {Array<Artisan>} 200 - Liste de tous les artisans
 * @returns {Error} 500 - Erreur serveur
 */
router.get('/', artisanService.getAllArtisans);

/**
 * @route GET /{id}
 * @group Artisans - Opérations sur les artisans
 * @param {string} id.path.required - Numéro de l'artisan à récupérer
 * @returns {Artisan} 200 - Détails de l'artisan
 * @returns {Error} 404 - Artisan non trouvé
 * @returns {Error} 500 - Erreur serveur
 */
router.get('/:id', artisanService.getArtisanById);

/**
 * @route PUT /{id}
 * @group Artisans - Opérations sur les artisans
 * @param {string} id.path.required - Numéro de l'artisan à mettre à jour
 * @param {object} artisan.body.required - Nouvelles informations de l'état de l'artisan
 * @returns {Artisan} 200 - Artisan mis à jour
 * @returns {Error} 400 - Requête invalide
 * @returns {Error} 404 - Artisan non trouvé
 * @returns {Error} 500 - Erreur serveur
 */
router.put('/:id', artisanService.updateArtisan);

/**
 * @route DELETE /{id}
 * @group Artisans - Opérations sur les artisans
 * @param {string} id.path.required - Numéro du artisan à supprimer
 * @returns {object} 204 - Artisan supprimé (pas de contenu)
 * @returns {Error} 404 - Artisan non trouvé
 * @returns {Error} 500 - Erreur serveur
 */
router.delete('/:id', artisanService.deleteArtisan);


module.exports = router;

