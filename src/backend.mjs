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

/*SI*/
export async function addNewMaison(newMaison) {

    await pb.collection('maison').create(newMaison);
}

export async function addNewAgent(newAgent) {

    await pb.collection('agent').create(newAgent);
}

export async function DeleteMaisonById(id) {
    await pb.collection('maison').delete(id);
}

export async function DeleteAgentById(id) {
    await pb.collection('agent').delete(id);
}

export async function updateMaisonById(id, data) {
    try {
        const record = await pb.collection('maison').update(id, data);
        console.log("Maison mise à jour :", JSON.stringify(record, null, 2));
        return record;
    } catch (e) {
        console.error(e);
    }
}

export async function updateAgentById(id, data) {
    try {
        const record = await pb.collection('agent').update(id, data);
        console.log("Agent mis à jour :", JSON.stringify(record, null, 2));
        return record;
    } catch (e) {
        console.error(e);
    }
}

export async function superUserauth(login, mdp) {
    try {
        const authData = await pb.collection("_superusers").authWithPassword(login, mdp);
        console.log("Connecté en tant que super user :", JSON.stringify(authData, null, 2));
        return authData;
    } catch (e) {
        console.error(e);
    }
} console.log(pb.authStore.isValid);

export async function addNewUser(newUser) {
    try {
        const record = await pb.collection('users').create(newUser);
        console.log("Utilisateur créé :", JSON.stringify(record, null, 2));
        return record;
    } catch (e) {
        console.error(e);
    }
}

export async function Userauth(login, mdp) {
    try {
        const authData = await pb.collection("users").authWithPassword(login, mdp);
        console.log("Connecté en tant qu'utilisateur :", JSON.stringify(authData, null, 2));
        return authData;
    } catch (e) {
        console.error(e);
    }
}