const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
    nom_entreprise: {
        type: String,
        required: true,
        unique: true
    },
    artisan_adresse: {
        type: String,
        required: true,
        unique: true
    },
    artisan_localisation: {
        type: String,
        required: true,
        unique: true
    },
    artisan_email: {
        type: String, 
        unique: true
    },
    artisan_website: {
        type: String, 
        unique: true
    },
    artisan_logo: {
        type: String
    },
    artisan_note: {
        type: Number,
        required: true,
        max: [5]
    },
    artisan_speciality: {
        type: String,
        required: true
    },
    artisan_category: {
        type: String,
        required: true,
        enum: ['Batiment','Services','Fabrication','Alimentation']
    },
    artisan_about: {
        type: String
    }
});

module.exports = mongoose.model('Artisan', artisanSchema);