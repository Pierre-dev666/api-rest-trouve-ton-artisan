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

        console.log('DB_URL:', mongoUrl);
        await mongoose.connect(mongoUrl, clientOptions);
        console.log('✅ Connexion MongoDB réussie');
    } catch (error) {
        console.error('❌ Erreur MongoDB :', error.message);
        console.error(error.stack);
        throw error;
    }
};