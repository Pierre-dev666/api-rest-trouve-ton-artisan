const Artisans = require('../models/artisan');

exports.createArtisan = async (req, res, next) => {
    const temp = ({
        nom_entreprise: req.body.nom_entreprise,
        artisan_adresse: req.body.artisan_adresse,
        artisan_localisation: req.body.artisan_localisation,
        artisan_email: req.body.artisan_email,
        artisan_website: req.body.artisan_website,
        artisan_logo: req.body.artisan_logo,
        artisan_note: req.body.artisan_note,
        artisan_speciality: req.body.artisan_speciality,
        artisan_category: req.body.artisan_category,
        artisan_about: req.body.artisan_about
    });

    try {
        let artisan = await Artisans.create(temp);

        return res.status(201).json(artisan);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisans.find();
        res.json(artisans);
    } catch (error) {
        res.status(500).json(error);
    }
};


exports.getArtisanById = async (req, res) => {
    const id = req.params.id;

    try {
        let artisan = await Artisans.findById(id);

        if (artisan) {
            return res.status(200).json(artisan);
        }

        return res.status(404).json('artisan_not_found');
    } catch (error) {
        return res.status(501).json(error);
    }
}

exports.updateArtisan = async (req, res) => {
    const id = req.params.id;
    console.log('🔧 Données reçues pour update:', req.body);

    const {
        nom_entreprise,
        artisan_adresse,
        artisan_localisation,
        artisan_email,
        artisan_website,
        artisan_logo,
        artisan_note,
        artisan_speciality,
        artisan_category,
        artisan_about
    } = req.body;

    const updatedData = {
        nom_entreprise,
        artisan_adresse,
        artisan_localisation,
        artisan_email,
        artisan_website,
        artisan_logo,
        artisan_note,
        artisan_speciality,
        artisan_category,
        artisan_about
    };

    try {
        const updatedArtisan = await Artisans.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedArtisan) {
            return res.status(404).json({ error: 'Artisan non trouvé' });
        }

        res.status(200).json(updatedArtisan);
    } catch (error) {
        console.error('Erreur update artisan:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

exports.deleteArtisan = async (req, res, next) => {
    const id = req.params.id

    try {
        const deletedArtisan = await Artisans.findByIdAndDelete(id);

        if (!deletedArtisan) {
            return res.status(404).json('Artisan_not_found');
        }

        return res.status(204).send();
    } catch (error) {
        res.status(500).json('internal_server_error');
    }
}