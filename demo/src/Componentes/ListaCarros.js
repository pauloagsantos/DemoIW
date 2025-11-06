import React, {useState, useEffect, use} from "react";

function ListaCarros() {
    const [carros, setCarros] = useState([]);
    useEffect(() => {
        //let url = 'https://api.sheety.co/7295c19c3ab74a94203e2e5138ae92d0/youflix/carros';
        let url = 'carros.json';
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                setCarros(json.carros);
            });
    }, []);

    const lista = carros.map((carro) =>
        <div key={carro.id} >
            <p>{carro.Marca}</p>
            <p>Marca: {carro.modelo}</p>
            <p>Ano: {carro.ano}</p>
            <p>Cor: {carro.kms}</p>
            <img src={carro.img} />
        </div>
    );

    return (
        <>
            {lista}
        </>
    );
}

export default ListaCarros;