import { allMaisons, allMaisonsFavori, oneID, allMaisonsSorted, bySurface, surfaceORprice, idAgent, AlleventsArtiste } from './backend.mjs'
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
try {
    const record = await AlleventsArtiste();
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}