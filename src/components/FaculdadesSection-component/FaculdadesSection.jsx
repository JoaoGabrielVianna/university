import React, { useState, useEffect } from "react";
import "./FaculdadesSection.css";
import ButtonFollow from "../ButtonFollow-component/ButtonFollow";
import { db } from "../../services/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";

export default function FaculdadesSection() {
    const [faculdades, setFaculdades] = useState([]); // Alterei para faculdades

    useEffect(() => {
        const faculRef = collection(db, "faculdades");
        onSnapshot(faculRef, (snapshot) => {
            const faculData = [];
            snapshot.forEach((doc) => {
                faculData.push({ id: doc.id, ...doc.data() });
            });
            setFaculdades(faculData); // Alterei para setFaculdades
        });
    }, []);

    return (
        <>
            {faculdades.map((facul) => ( // Alterei para faculdades
                <main key={facul.id} id="main_faculs">
                    <img src={facul.photoPerfil} alt="" />
                    <h1>{facul.nome}</h1>
                    <ButtonFollow/>

                </main>
                // <li key={facul.id}>{facul.nome}</li> // Alterei para facul
            ))}
        </>
    );
}
