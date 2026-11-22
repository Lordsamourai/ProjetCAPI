export function contientQuestion(votes: string[]): number {

    if (votes.includes("?")) {
        return -1;
    }

    return 0;
}

export function supprimerCafe(votes: string[]): string[] {

    return votes.filter(
        vote => vote !== "cafe" && vote !== "café"
    );
}

export function unanime(votes: string[]): number {

    const premierVote = votes[0];

    for (let i = 1; i < votes.length; i++) {

        if (votes[i] !== premierVote) {
            return -1;
        }

    }

    return Number(premierVote);
}

export function strict(votes: string[]): number {

    return unanime(votes);

}

export function median(votes: string[]): number {

    const nombres = votes
        .map(Number)
        .sort((a, b) => a - b);

    const milieu = Math.floor(nombres.length / 2);

    // Cas impair
    if (nombres.length % 2 !== 0) {
        return nombres[milieu];
    }

    // Cas pair : moyenne des 2 du milieu
    const moyenne =
        (nombres[milieu - 1] + nombres[milieu]) / 2;
    const cartes = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

    let meilleureCarte = cartes[0];

    for (let i = 1; i < cartes.length; i++) {

        const distanceActuelle =
            Math.abs(cartes[i] - moyenne);

        const meilleureDistance =
            Math.abs(meilleureCarte - moyenne);

        if (distanceActuelle < meilleureDistance) {
            meilleureCarte = cartes[i];
        }

        // En cas d'égalité on prend la plus petite carte
        else if (
            meilleureCarte > cartes[i] &&
            distanceActuelle === meilleureDistance
        ) {
            meilleureCarte = cartes[i];
        }
    }

    return meilleureCarte;
}