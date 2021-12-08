import firebase from "./firebase";

export const getAllWorks = onWorkChanged => {
    firebase
        .firestore()
        .collection("times")
        .onSnapshot(snapshot => {
            const newWork = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            onWorkChanged(newWork);
        });
};

export const addWork = data => {
    firebase.firestore().collection("times").add(data);
};

export const deleteWork = id => {
    firebase.firestore().collection("times").doc(id).delete();
};

export const showById = (item, id) => {
    firebase
        .firestore()
        .collection("times")
        .doc(id)
        .get()
        .then(docRef => {
            item(docRef.data());
        });
};

export const updateWork = (id, data) => {
    firebase.firestore().collection("times").doc(id).set(data);
};
