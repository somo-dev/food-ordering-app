import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const RestaurantCard = () => {
    const data = {
        type: "restaurant",
        data: {
            type: "F",
            id: "237054",
            name: "Cafe Bahar since 1973",
            uuid: "32c2f8bc-b640-473a-a2a5-ce46fec0dd9c",
            city: "3",
            area: "Old Mla Quarters",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "yrycuz88yy7lm2qbsdv6",
            cuisines: [
                "Biryani",
                "Chinese",
                "Indian",
                "Kebabs",
                "Tandoor"
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 22,
            minDeliveryTime: 22,
            maxDeliveryTime: 22,
            slaString: "22 MINS",
            lastMileTravel: 2.299999952316284,
            slugs: {
                restaurant: "cafe-bahar-himayath-nagar-himayath-nagar",
                city: "hyderabad"
            },
            cityState: "3",
            address: "Old MLA Quarters, Hyderguda, Basheer Bagh",
            locality: "Old Mla Quarters",
            parentId: 316607,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 2800,
                        message: ""
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: ""
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: ""
                    }
                ],
                totalFees: 2800,
                message: "",
                title: "Delivery Charge",
                amount: "2800",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "237054",
                deliveryTime: 22,
                minDeliveryTime: 22,
                maxDeliveryTime: 22,
                lastMileTravel: 2.299999952316284,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic"
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${data.data.cloudinaryImageId}`}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.data.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RestaurantCard