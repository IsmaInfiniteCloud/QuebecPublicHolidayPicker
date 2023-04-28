//verifier si jour férié

document.getElementById("verifier").addEventListener("click", () => {
    const date = document.getElementById("date").value;

    fetch("http://localhost:3000/jours")
        .then(response => response.json())
        .then(joursFeries => {
            let estFerie = false;
            let nomFerie = '';
            for (let i = 0; i < joursFeries.length; i++) {
                if (joursFeries[i].date === date) {
                    estFerie = true;
                    nomFerie = joursFeries[i].titre;
                    break;
                }
            }

            const resultat = document.getElementById("resultat");
            if (estFerie) {
                resultat.textContent = "Journée fériée : " + nomFerie;
            } else {
                resultat.textContent = "Journée non fériée";
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des jours fériés :", error);
        });
});

