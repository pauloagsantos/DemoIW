import React, {useState, useEffect, use} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


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



    return (
        <Container className="py-5">
            <Row>
                {carros.map((carro, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <Card.Img variant="top" src={carro.img} alt={carro.marca+carro.modelo} />
                                <Card.Title>{carro.marca+carro.modelo}</Card.Title>
                                <Card.Text>{carro.ano}</Card.Text>
                                <Card.Text>{carro.kms+" kms"}</Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    
    );
}

export default ListaCarros;