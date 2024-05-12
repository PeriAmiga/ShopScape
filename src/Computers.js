import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pic1a from "./pictures/computers/pic1a.png";
import pic2a from "./pictures/computers/pic2a.png";
import pic3a from "./pictures/computers/pic3a.png";
import pic4a from "./pictures/computers/pic4a.png";
import pic5a from "./pictures/computers/pic5a.png";
import pic6a from "./pictures/computers/pic6a.png";
import {useNavigate} from "react-router-dom";


function Computers() {

    window.scrollTo(0, 0);
    const navigate = useNavigate();
    // Function to handle navigation
    const handleNavigate = (route) => {
        navigate(route);
    };

    return (
        <div className="computers">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer1')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic1a}
                                    alt="computer1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lenovo Legion Pro 7 16IRX8H 82WQ004DIV Laptop - Onyx Grey Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A laptop from Lenovo with a 16-inch WQXGA resolution (2560x1600), Intel® Core™ i9-13900HX processor, NVIDIA® GeForce RTX™ 4080 12GB graphics accelerator, 32GB internal memory, 1TB SSD drive, and includes an operating system
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer2')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic2a}
                                    alt="computer2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        HP Omen 16-WF1000NJ 9Y068EA Gaming Laptop - Shadow Black Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A gaming laptop from HP with a 16.1-inch QHD resolution (2560x1440), Intel® Core™ i9-14900HX processor, NVIDIA® GeForce RTX™ 4080 12GB graphics accelerator, 32GB internal memory, 1TB SSD drive, and without an operating system
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer3')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic3a}
                                    alt="computer3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Asus TUF Gaming F16 FX607JU-N3073W Laptop - Mecha Gray Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A powerful gaming laptop from Asus with a 16-inch FHD+ resolution (1920x1200, WUXGA), Intel® Core™ i7-13650HX processor, NVIDIA® GeForce® RTX 4050 6GB graphics accelerator, 16GB internal memory, 1TB SSD drive, and includes an operating system
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer4')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic4a}
                                    alt="computer4"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        HP Laptop 15S-FQ5009NJ / 8J105EA - White Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A laptop from HP with a 15.6-inch FHD (1920x1080) resolution, Intel® Core™ i3-1215U processor, 8GB internal memory, 512GB SSD drive, and includes an operating system
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer5')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic5a}
                                    alt="computer5"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Acer Swift Go OLED SFG14-72-77SL Laptop without Touch Screen - Silver Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Acer Laptop without Touch Screen with a 14-inch 2.8K (2880x1800) OLED display, Intel® Core™ Ultra 7 155H processor, 16GB internal memory, 1TB SSD drive, backlit keyboard, fingerprint reader, and includes an operating system
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} lg={13}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={() => handleNavigate('/computers/computer6')}>
                                <CardMedia
                                    component="img"
                                    style={{ width: '100%', height: 'auto' }}
                                    image={pic6a}
                                    alt="computer6"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lenovo IdeaPad Flex 5-14ALC7 82R900E9IV Laptop with Touch Screen - Cloud Grey Color
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A Lenovo laptop with a 14-inch touch screen WUXGA resolution (1920x1200), AMD Ryzen 5 5500U processor, 16GB internal memory, 512GB SSD drive, and includes an operating system
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

export default Computers;