import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pic1 from "./pictures/televisions/pic1.png";
import pic2 from "./pictures/televisions/pic2.png";
import pic3 from "./pictures/televisions/pic3.png";
import pic4 from "./pictures/televisions/pic4.png";
import pic5 from "./pictures/televisions/pic5.png";
import {useNavigate} from "react-router-dom";


function Televisions() {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="televisions">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/televisions/television1')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic1}
                                    alt="television1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samsung QN800C Neo QLED 8K UHD HDR Smart TV 85 inches (QE85QN800C)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality Samsung TV with an amazing 85'' 8K Ultra HD resolution, featuring Quantum Matrix Technology Pro for exceptionally sharp lighting, extreme contrast, and stunning detail. Powered by the Neural Quantum Processor 8K driven by AI, it offers a variety of gaming features including FreeSync Premium Pro and screen mirroring from mobile devices
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/televisions/television2')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic2}
                                    alt="television2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Sony Bravia A80L 83" 4K Ultra HD HDR Smart TV OLED XR-83A80LAEP
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A Sony smart TV with an 83'' screen, 4K UHD resolution, HDR support, Google TV operating system, built-in wall-mount holes, built-in speakers, WiFi and Bluetooth connectivity, and a wireless remote control
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/televisions/television3')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic3}
                                    alt="television3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        LG OLED B3 Smart TV - 77 inches, 4K resolution, Model: OLED77B36LA
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality LG TV with a 77-inch OLED panel featuring independently lit pixels in UHD 4K resolution, HDMI and USB ports, ThinQ AI technology, and the webOS operating system.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/televisions/television4')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic4}
                                    alt="television4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samsung 65'' Crystal UHD 4K HDR Smart TV - UE65CU7000
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality Samsung TV with a stunning 65'' Ultra HD 4K resolution, LED backlighting, Crystal Processor Lite 4K, HDR support, a variety of gaming features for an immersive experience, and the option for screen mirroring from mobile devices
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/televisions/television5')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic5}
                                    alt="television5"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Toshiba 65'' Smart UHD 4K LED TV - Model 65C350ME - Metallic color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality smart TV from Toshiba with 4K resolution and the Vidaa U 6.0 operating system
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

export default Televisions;