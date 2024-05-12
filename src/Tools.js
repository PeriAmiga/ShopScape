import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pic1 from "./pictures/tools/pic1.png";
import pic2 from "./pictures/tools/pic2.png";
import pic3 from "./pictures/tools/pic3.png";
import pic4 from "./pictures/tools/pic4.png";
import pic5 from "./pictures/tools/pic5.png";
import pic6 from "./pictures/tools/pic6.png";
import pic7 from "./pictures/tools/pic7.png";
import {useNavigate} from "react-router-dom";


function Tools() {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="tools">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool1')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={pic1}
                                    alt="tool1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        18V Black Cordless Tool Set - Hammer Drill + Impact Driver + Dust Extractor for Hammer Drill + Detachable Handle + Carrying Case + 2x 5.0Ah Batteries and Charger by Makita
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A special black set for professionals who want to prevent dust dispersion during drilling with a hammer drill or work in clean areas and rooms. The hammer drill with a durable BL motor is resistant to extreme dust and moisture conditions for drilling in concrete, metal, and wood. It includes an automatic and interchangeable chuck. Tools designed for efficient dust collection. Includes a HEPA filter suitable for work in clean rooms
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool2')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic2}
                                    alt="tool2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toolbox for Mechanics, 227 Pieces, by Makita
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Supplied in a high-quality toolbox, this set is ideal for the job site or garage, offering easy storage and portability. It includes all the necessary pieces to complete work at a high standard
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool3')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic3}
                                    alt="tool3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Electric paint sprayer with a 500W compressor, model 100900-003 Hunter
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        An ideal tool for handymen, painters, or anyone looking to save a lot of time on various tasks such as painting walls/entire apartments, furniture, fences, etc. The tool contains a powerful air compressor that allows for an airflow of 850 ml/minute, providing significant pushing force for paint spraying.
                                        The paint sprayer comes with a 700 ml paint container that holds paint with a maximum viscosity of up to 60DIN. The tool also includes a cup for mixing paint
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool4')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic4}
                                    alt="tool4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Folding aluminum luggage trolley 4 wheels up to 150 kg Telescopic 2141
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A versatile aluminum utility hand truck designed for transporting heavy items. The hand truck is foldable and convenient to carry, suitable for the cargo compartment of any vehicle. It folds easily in length and height with a carrying capacity of up to 150 kg.
                                        The hand truck comes with 4 strong and high-quality wheels
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool5')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic5}
                                    alt="tool5"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        GO 2 Professional cordless screwdriver by Bosch
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A professional cordless screwdriver from Bosch with an internal 3.6V battery with a capacity of 1.5Ah. Comes in a hard plastic case with a USB charging cable and 2 bits (PH1, PH2). Allows for the screwing of a large quantity of screws per charge - up to 200 screws of 3.5x35 mm in softwood / 200 screws of 3x60 mm in plastic.

                                        It has 2 options for operating the device:
                                        First, a normal press on the power switch.
                                        Second, activating pressure with the screwdriver on the screw you want to operate, and the screwdriver will turn on by itself (and turn off when pressure is released)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool6')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic6}
                                    alt="tool6"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Professional jigsaw '8 Hunter
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A circular saw designed for a wide range of cutting tasks with the option to adjust the cutting angles. It provides a rotation speed of 5000 RPM, with a blade diameter of 210 mm (8 inches)
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/tools/tool7')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic7}
                                    alt="tool7"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Kapro 883G Green 360° Laser Level Set
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        High-quality and professional laser level from Kapro.
                                        3 prominent green lines in 360° for optimal visibility.
                                        The laser level can be used for entire room setups and is perfect for both horizontal and vertical leveling simultaneously thanks to the three lines.
                                        3 360° laser beams: 1 horizontal, 1 side vertical, 1 front vertical.
                                        The laser level features a laser lock mode for angle marking, manual mode for slope marking, and visual "out-of-level" warning.
                                        Self-leveling up to 3°.
                                        Device with "1/4 and "5/8 threading for connection to a tripod for maximum convenience during work.
                                        The set includes a sturdy carrying case, a versatile hanger with a magnetic holder, a laser target, green Beamfinder glasses, a charger, and a lithium-ion battery
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Tools;