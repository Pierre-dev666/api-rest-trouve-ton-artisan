const mongoose = require('mongoose');

const mongoUrl = process.env.DB_URL;
const clientOptions = {
    dbName: 'apinode'
};

exports.initClientDbConnection = async () => {
    try {
        if (!mongoUrl) {
            throw new Error('DB_URL est vide ou non défini');
        }

        console.log('Connexion à MongoDB via :', mongoUrl);
        await mongoose.connect(mongoUrl, clientOptions);
        console.log('✅ Connexion MongoDB réussie');
    } catch (error) {
        console.error('❌ Erreur de connexion MongoDB :', error.message);
        console.error(error.stack);
        throw error;
    }
};