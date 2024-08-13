import React, { useState } from "react";


export const Pokemones = () => {


    /*creamos un estado*/
    const [pokemones, setPokemones] = useState([])



    /* funcion async */
    const dataPokemones = async () => {

        if (pokemones.length > 0) {
            return;
        }
        /* cargamos la url */
        const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
        /* llamamos al fetch */
        const response = await fetch(url);
        /* definimos variable data*/
        const data = await response.json();
        /*actualizamos el estado de la pagina*/
        setPokemones(data.results);


    }

    /* llamamos la funcion*/
    dataPokemones();
    return (
        <div>
            <h1>Pokemones</h1>
            {
                /*recorremos pokemones y obtenemos el name*/
                pokemones.map((pokemones, index) => {
                    return (
                        <Pokemones key={index} nombre={pokemones.name} url={pokemones.url} />)}
                    )
                }
            </div>
    );
};
