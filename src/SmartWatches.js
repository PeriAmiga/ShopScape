import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pic1 from "./pictures/smartwatches/pic1a.png";
import pic2 from "./pictures/smartwatches/pic2a.png";
import {useNavigate} from "react-router-dom";


function SmartWatches() {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="smartwatches">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/smartwatches/smartwatch1')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic1}
                                    alt="smartwatch1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Apple Watch 45mm Series-9 GPS+Cellular, Graphite Stainless Steel Case, Graphite Milanese Loop strap, One Size
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A high-quality smartwatch for fitness tracking from Apple, providing wrist-based heart rate monitoring and comprehensive activity tracking, featuring a colorful display with Retina LTPO OLED technology, and including GPS and eSIM support
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/smartwatches/smartwatch2')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic2}
                                    alt="smartwatch2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Samsung Galaxy Watch 6 Classic 43mm SM-R955F - Black color - with LTE connectivity
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        The Samsung Galaxy Watch 6 Classic allows you to track your health directly from your wrist, with features like sleep tracking, health monitoring, and an extended battery life for daily use
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

export default SmartWatches;