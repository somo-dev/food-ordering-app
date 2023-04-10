import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import { topCarouselBannersProps } from '../interfaces/interfaces'
import { Image } from 'semantic-ui-react';
import '../component_styles/featuredCarousel.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const FeaturedCarousel = ({ deviceType }: any) => {
  const topCarouselBanners = [
    {
      id: 0,
      imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
    },
    {
      id: 1,
      imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
    },
    {
      id: 2,
      imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
    },
    {
      id: 3,
      imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
    },
    {
      id: 3,
      imgUrl: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6"
    }
  ];
  return (
    <section className='bg-dark py-4'>
      <Container>
        <Row className='d-flex justify-content-center my-2 pt-7'>
          <Col>
            <Container>
              <Row>
                <Col>

                  <Carousel
                    ssr
                    itemClass="image-item"
                    responsive={responsive}
                    arrows= {true}
                    infinite={true}
                  >
                    {topCarouselBanners.map(image => {
                      return (
                        <div key={image.id} className="d-flex align-items-center justify-content-center mx-3 h-100">
                          <Image
                            draggable={false}
                            style={{ maxWidth: '270px', boxShadow: 'rgba(0, 0, 0, 0.1) -4px 9px 25px -6px' }}
                            src={image.imgUrl}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeaturedCarousel