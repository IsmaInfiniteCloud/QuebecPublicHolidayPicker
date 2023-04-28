
//Ajout de jour férié

document.getElementById("ajouter-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const titre = document.getElementById("titre").value;

    fetch("http://localhost:3000/jours", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ date, titre })
    })
    .then(response => {
        if (response.ok) {
            alert("Jour férié ajouté avec succès");
        } else {
            throw new Error("Erreur lors de l'ajout du jour férié");
        }
    })
    .catch(error => {
        console.error("Erreur lors de l'ajout du jour férié :", error);
        alert("Erreur lors de l'ajout du jour férié");
    });
});
