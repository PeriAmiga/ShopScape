import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pic1 from "./pictures/phones/pic1.png";
import pic2 from "./pictures/phones/pic2.png";
import pic3 from "./pictures/phones/pic3.png";
import pic4 from "./pictures/phones/pic4.png";
import {useNavigate} from "react-router-dom";


function Phones() {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="phones">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/phones/phone1')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: '300' }}
                                    image={pic1}
                                    alt="phone1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      Samsung Galaxy S24 Ultra 12GB+256GB (SM-S928B/DS) - Titanium Black color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality Samsung mobile phone with a 6.8-inch screen, 4 rear cameras, a front selfie camera, support for 5G network, and a fingerprint reader
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/phones/phone2')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic2}
                                    alt="phone2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Apple iPhone 15 Pro Max 256GB - Titanium Black color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The powerful iPhone 15 Pro Max from Apple features a 6.7-inch Super Retina XDR display, Face ID sensor, powerful A17 Pro processor, three rear cameras (48+12+12 megapixels), a 12-megapixel front camera, wireless charging capability, and support for 5G network
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/phones/phone3')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic3}
                                    alt="phone3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Asus ROG Phone 8 Pro Edition 24GB + 1TB - Phantom Black color - includes Aero cover and AeroActive Cooler X cooling system
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        ASUS gaming smartphone featuring a 6.78-inch screen, 3 rear cameras (50+13+32 megapixels), and a 32-megapixel front camera, an octa-core chipset, 5G network support, and a fingerprint reader
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/phones/phone4')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic4}
                                    alt="phone4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        OnePlus 12 5G mobile phone with 16GB RAM and 512GB storage - Silky Black color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality OnePlus mobile phone with a 6.82-inch screen, 3 rear cameras (50+64+48 megapixels), and a 32-megapixel front camera, advanced Android system, fingerprint reader, powerful battery, and support for 5G network
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

export default Phones;