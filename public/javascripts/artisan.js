document.addEventListener('DOMContentLoaded', () => {
    const artisansTable = document.getElementById('artisansTable').getElementsByTagName('tbody')[0];
    const artisanForm = document.getElementById('artisanForm');
    const artisanIdInput = document.getElementById('artisanId');
    const nom_entrepriseInput = document.getElementById('artisanName');
    const artisan_adresseInput = document.getElementById('artisanAdress');
    const artisan_localisationInput = document.getElementById('artisanlocation');
    const artisan_emailInput = document.getElementById('artisanMail');
    const artisan_websiteInput = document.getElementById('artisanWebsite');
    const artisan_logoInput = document.getElementById('artisanLogo');
    const artisan_noteInput = document.getElementById('artisanNote');
    const artisan_specialityInput = document.getElementById('artisanSpeciality');
    const artisan_categoryInput = document.getElementById('artisanCategory');
    const artisan_aboutInput = document.getElementById('artisanAbout');

    const getArtisans = () => {
        fetch('/artisans')
            .then(response => response.json())
            .then(data => {
                console.log('Data returned:', data);
                artisansTable.innerHTML = '';
                
                data.forEach(artisan => {
                    let row = artisansTable.insertRow();
                    row.insertCell().textContent = artisan.nom_entreprise;
                    row.insertCell().textContent = artisan.artisan_adresse;
                    row.insertCell().textContent = artisan.artisan_localisation;
                    row.insertCell().textContent = artisan.artisan_email;
                    row.insertCell().textContent = artisan.artisan_website;
                    row.insertCell().textContent = artisan.artisan_logo;
                    row.insertCell().textContent = artisan.artisan_note;
                    row.insertCell().textContent = artisan.artisan_speciality;
                    row.insertCell().textContent = artisan.artisan_category;
                    row.insertCell().textContent = artisan.artisan_about;
                    let actionCell = row.insertCell();
                    actionCell.innerHTML = `
                        <button onclick="editArtisan('${artisan._id}')">Modifier</button> 
                        <button onclick="deleteArtisan('${artisan._id}')">Eliminer</button>
                    
                    `;
                });
            });
    };

    artisanForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const artisanId = artisanIdInput.value;
        const artisan = {
            nom_entreprise: nom_entrepriseInput.value,
            artisan_adresse: artisan_adresseInput.value,
            artisan_localisation: artisan_localisationInput.value,
            artisan_email: artisan_emailInput.value,
            artisan_website: artisan_websiteInput.value,
            artisan_logo: artisan_logoInput.value,
            artisan_note: artisan_noteInput.value,
            artisan_speciality: artisan_specialityInput.value,
            artisan_category: artisan_categoryInput.value,
            artisan_about: artisan_aboutInput.value
        };
        const method = artisanId ? 'PATCH' : 'POST';
        const url = artisanId ? `/artisans/${artisanId}` : '/artisans';

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(artisan)
        })
            .then(() => {
                getArtisans();
                artisanForm.reset();
                artisanIdInput.value = '';
            });
    });

    window.deleteArtisan = (id) => {
        fetch(`/artisans/${id}`, { method: 'DELETE' }).then(getArtisans);
    };

    window.editArtisan = (id) => {
        fetch(`/artisans/${id}`)
            .then(response => response.json())
            .then(artisan => {
                artisanIdInput.value = artisan._id;
                nom_entrepriseInput.value = artisan.nom_entreprise;
                artisan_adresseInput.value = artisan.artisan_adresse;
                artisan_localisationInput.value = artisan.artisan_localisation;
                artisan_emailInput.value = artisan.artisan_email;
                artisan_websiteInput.value = artisan.artisan_website;
                artisan_logoInput.value = artisan.artisan_logo;
                artisan_noteInput.value = artisan.artisan_note;
                artisan_specialityInput.value = artisan.artisan_speciality;
                artisan_categoryInput.value = artisan.artisan_category;
                artisan_aboutInput.value = artisan.artisan_about;
            });
    };

    getArtisans();
});