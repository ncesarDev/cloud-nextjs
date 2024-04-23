import React from 'react'
import Link from 'next/link';

import { Card, Container, Row, Col } from 'react-bootstrap';
import { GoArrowUpRight } from "react-icons/go";

const Better_option_2 = () => {
    return (
        <div>
            <Container fluid >
                <div className="header-image-container">
                    <img src="images/house2.jpg" alt="Header" className="img-fluid" />
                    <h1 className="header-title">¡Tu mejor opción
                        inmobiliaria en el Bajío!
                    </h1>
                </div>
            </Container>
            <Container className="container_option_2">
                <Row>
                    <Col lg={4} xs={12}>


                        <Card className="mb-4 shadow card_option_principal">
                            <Card.Body className='card_option_2'>
                                <div className='content_card_option_2'>
                                    <div className='content_text_option_2'>
                                        <Card.Title className="title_service">Vender</Card.Title>
                                        <Card.Text>
                                            Demasiado Fácil, y mucho
                                            más rápido
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className='iconContainer'>
                                    <div className="text-center">
                                        <Link href="/contact">
                                            <GoArrowUpRight className="arrowicon" />
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} xs={12}>
                        <Card className="mb-4 shadow card_option_principal">
                            <Card.Body className='card_option_2'>
                                <div className='content_card_option_2'>
                                    <div className='content_text_option_2'>
                                        <Card.Title className="title_service"> Comprar</Card.Title>
                                        <Card.Text>
                                            Encuentra tu
                                            propiedad perfecta
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className='iconContainer_1'>
                                    <div className="text-center">
                                        <Link href="/all-property">
                                            <GoArrowUpRight className="arrowicon" />
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} xs={12}>
                        <Card className="mb-4 shadow card_option_principal">
                            <Card.Body className='card_option_2'>
                                <div className='content_card_option_2'>
                                    <div className='content_text_option_2'>
                                        <Card.Title className="title_service">Contactanos</Card.Title>
                                        <Card.Text>
                                            Recibe una atención
                                            con un especialista
                                        </Card.Text>
                                    </div>
                                </div>
                                <div className='iconContainer_2'>
                                    <div className="text-center">
                                        <Link href="/contact">
                                            <GoArrowUpRight className="arrowicon" />
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>


        </div>

    )
}

export default Better_option_2