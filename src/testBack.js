import { allMaisons, allMaisonsFavori, oneID, allMaisonsSorted, bySurface, surfaceORprice, idAgent, AlleventsArtiste, getOffre, addNewMaison, addNewAgent, updateMaisonById, updateAgentById, superUserauth } from '../backend.mjs';
/*
try {
    const records = await allMaisons();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*
try {
    const record = await oneID('jqv43fhe5slb80f');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
    */
/*
try {
 const record = await allMaisonsFavori({ filter: "favori = true" });
 console.log(JSON.stringify(record, null, 2));
} catch (e) {
 console.error(e);
}
*/
/*
try {
    const record = await allMaisonsSorted({ sort: "prix" });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
    */
/*
try {
    const record = await bySurface({ filter: "surface > 100" });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
    */
/*
try {
    const record = await surfaceORprice({ filter: "surface > 100 || prix < 15000" });
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*
try {
    const record = await idAgent('9ygqubcowda8h7a');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*try {
    const record = await AlleventsArtiste();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}*/
/*
try {
    const record = await getOffre('jqv43fhe5slb80f');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
/*
try {
    const newMaison = {
        "nomMaison":"MaisonMMI",
        "prix":250000,
        "nbChambres":4,
        "nbSdb":2,
        "adresse":"Montbéliard",
        "surface":123,
        "favori":true,
        "agent":"g4lct2kno5rn769"
    };
        await addNewMaison(newMaison);
} catch (e) {
    console.error(e);
}
*/
/*
try {
    const newAgent = {
        "id": "g4lct2kno5rn769",
        "nom": "Dupont",
        "prenom": "Jean",
        "email": "jean.dupont@example.com"
    };
    await addNewAgent(newAgent);
} catch (e) {
    console.error(e);
}

try {
    const data = {
        "nomMaison": "MaisonModifiée",
        "surface": 120,
        "favori": true
    };
    const record = await updateMaisonById("g4lct2kno5rn769", data);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const data = {
        "nom": "dilili",
        "prenom": "Diane",
        "email": "diane.dilili@example.com"
    };
    const record = await updateAgentById("9ygqubcowda8h7a", data);
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}
*/
try {
    await superUserauth("test@test.fr", "123456");
} catch (e) {
    console.error(e);
}

pb.authStore.clear();

try {
    const user1 = {
        "username": "user1",
        "email": "user1@test.fr",
        "password": "123456789",
        "passwordConfirm": "123456789"
    };
    await addNewUser(user1);
} catch (e) {
    console.error(e);
}

try {
    const user2 = {
        "username": "user2",
        "email": "user2@test.fr",
        "password": "123456789",
        "passwordConfirm": "123456789"
    };
    await addNewUser(user2);
} catch (e) {
    console.error(e);
}

try {
    await Userauth("user1@test.fr", "123456789");
} catch (e) {
    console.error(e);
}
pb.authStore.clear();

try {
    await superUserauth("test@test.fr", "123456");
} catch (e) {
    console.error(e);
}
pb.authStore.clear();