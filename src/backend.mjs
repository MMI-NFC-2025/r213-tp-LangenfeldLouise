import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export async function allMaisons() {
    const records = await pb.collection('maison').getFullList();
    return records;
}


export async function oneID(id) {
    const records = await pb.collection('maison').getOne(id);
    return records;
}

export async function allMaisonsFavori(favori) {
    const records = await pb.collection('maison').getFullList(favori);
    return records;
}

export async function allMaisonsSorted(prix) {
    const records = await pb.collection('maison').getFullList(prix);
    return records;
}

export async function bySurface(surface) {
    const records = await pb.collection('maison').getFullList(surface);
    return records;
}

export async function surfaceORprice(surface, prix) {
    const records = await pb.collection('maison').getFullList(surface, prix);
    return records;
}

export async function idAgent(id) {
    const records = await pb.collection('agent').getFullList(id);
    return records;
}
/*
export async function AlleventsArtiste() {
    const records = await pb.collection('evenement').getFullList({
        expand: 'artiste'
    });
    return records;
}
    */

export async function getOffre(id) {
    try {
        const data = await pb.collection('maison').getOne(id);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return null;
    }
}

export async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return {
            success: true,
            message: 'Offre ajoutée avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la maison', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la maison'
        };
    }
}

export async function filterByPrix(minPrix, maxPrix) {
    try {
        const records = await pb.collection('maison').getFullList({
            filter: `prix >= ${minPrix} && prix <= ${maxPrix}`
        });
        return records;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant par prix', error);
        return [];
    }
}

export async function getAgents() {
    const records = await pb.collection('agent').getFullList({
        sort: 'nom',
    });
    return records;
}

export async function getOffresByAgent(agentId) {
    const records = await pb.collection('maison').getFullList({
        filter: `agent = "${agentId}"`,
    });
    return records;
}

export async function setFavori(house) {
    await pb.collection('maison').update(house.id, { favori: !house.favori });
}

export async function getImageUrl(record, recordImage) {
    return pb.files.getURL(record, recordImage);
}