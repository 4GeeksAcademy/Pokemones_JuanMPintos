import React, {useState} from "react";

const Pokemon = ({ nombre, url }) => {

    const [datapokemon, setDataPokemon] = useState([]);

    const cargarDatosPokemon = async () => {
        if (datapokemon.abilities) {
            return;
        }

        const response = await fetch(url);
        const data = await response.jason();
        setDataPokemon(data);
    }
}

cargarDatosPokemon();

console.log(datapokemon);

return (
    <div>
        <h1>{nombre}</h1>
        <div>
            {datapokemon && datapokemon.lenght > 0 ?
                <img src={url.sprites.front_default} key={index} />
                : (<p>Cargando...</p>)
            }
        </div>
    </div>
);


export default Pokemon;