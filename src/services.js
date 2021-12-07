import firebase from "./firebase";

export const getAllWorks = () => {
    //gauti darbus
};

export const addWork = data => {
    firebase.firestore().collection("times").add(data);
};

export const showById = () => {
    //
};

export const deleteWork = () => {
    //
};

export const updateWork = () => {
    //
};
