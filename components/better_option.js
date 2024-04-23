import React from 'react'
import Link from 'next/link';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { BsHouseHeartFill, BsFillHousesFill, BsFillHouseGearFill } from "react-icons/bs";


const Better_Option = () => {
    return (
        <Container className="my-1">
            <div className='container-services mt-5'>
                <h1 className="display-3-services">
                    Servicios <spam className="title-header-services">Personalizados</spam> Y De
                    <spam className="title-header-services"> Calidad</spam>
                </h1>
                <p className="subtitle mb-5">
                    Somos la solución para hacer realidad tu sueño.
                </p>
            </div>

            <Row>
                <Col lg={4} xs={12}>
                    <Link href="/all-property">
                        <Card className="content_option mb-4 shadow text-center">
                            <Card.Body>
                                <div className="icon-container">
                                    <BsHouseHeartFill className="icon" />
                                </div>
                                <Card.Title className="title_service">Tu  Hogar Perfecto
                                </Card.Title>
                                <p className="parrafo_servies">
                                    Te ayudamos con tu búsqueda inmobiliaria. Si necesitas asistencia o tienes preguntas, siéntete libre de contactarnos.
                                </p>
                            </Card.Body>
                        </Card>

                    </Link>
                </Col>
                <Col lg={4} xs={12}>
                    <Link href="/contact">

                        <Card className="content_option_1 mb-4 shadow text-center">
                            <Card.Body>
                                <div className="icon-container">
                                    <BsFillHousesFill className="icon" />
                                </div>
                                <Card.Title className='text-center title_service' >Vende con Nosotros</Card.Title>
                                <p className="parrafo_servies">
                                    Hallamos al comprador ideal, seleccionándolo cuidadosamente a través de diversos filtros para optimizar el proceso de venta.
                                </p>
                            </Card.Body>
                        </Card>

                    </Link>
                </Col>
                <Col lg={4} xs={12}>
                    <Link href="/contact">

                        <Card className="content_option_2  shadow text-center">
                            <Card.Body>

                                <div className="icon-container">
                                    <BsFillHouseGearFill className="icon" />
                                </div>
                                <Card.Title className='text-center title_service'>Con nosotros Tendrás</Card.Title>
                                <p className="parrafo_servies">
                                    Soporte y asesoramiento de bienes raíces para todas las etapas del proceso de compra o venta de una casa.
                                </p>
                            </Card.Body>
                        </Card>

                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Better_Option