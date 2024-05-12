import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import tools from "./pictures/tools.png";
import computers from "./pictures/computers.png";
import phones from "./pictures/phones.png";
import smartWatches from "./pictures/smart-watches.png";
import televisions from "./pictures/televisions.png";
import { useNavigate } from "react-router-dom";
import "./Shop.css";


function Shop() {

    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="shop">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }} className="toolsCard">
                            <CardActionArea onClick={() => handleNavigate('/tools')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={tools}
                                    alt="Tools"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Tools
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Explore our diverse assortment of tools, meticulously crafted to empower your projects with precision, efficiency, and innovation
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }} className="computersCard">
                            <CardActionArea onClick={() => handleNavigate('/computers')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={computers}
                                    alt="Computers"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Computers
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Explore our selection of cutting-edge computers, tailored to meet your digital needs with power, efficiency, and style
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }} className="phonesCard">
                            <CardActionArea onClick={() => handleNavigate('/phones')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={phones}
                                    alt="Phones"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Phones
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Discover our range of sleek and powerful smartphones, offering advanced features and seamless connectivity to keep you connected on the go
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }} className="SmartWatchesCard">
                            <CardActionArea onClick={() => handleNavigate('/smartwatches')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={smartWatches}
                                    alt="Smart Watches"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Smart Watches
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Browse through our collection of smartwatches, combining stylish design with intelligent features to enhance your daily activities and keep you connected effortlessly
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }} className="tvCard">
                            <CardActionArea onClick={() => handleNavigate('/televisions')}>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={televisions}
                                    alt="Televisions"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Televisions
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Dive into our range of high-definition televisions, offering immersive viewing experiences and cutting-edge technology to elevate your entertainment
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

export default Shop;
