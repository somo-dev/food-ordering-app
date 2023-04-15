import { Col, Container, Row } from 'react-bootstrap';
import '../component_styles/seacrhPage.scss';
import { Image } from 'semantic-ui-react';
import Carousel from 'react-multi-carousel';
import { responsive } from '../assets/data/constants';
import { cusines } from '../assets/data/cuisines';
import SearchBarBig from '../shared/SearchBarBig';
import SponsoredMusicPlayer from './SponsoredMusicPlayer';
import { imageStore } from '../assets/data/constants';
import SearchSuggestions from './SearchSuggestions';
import { useEffect, useRef, useState } from 'react';
import { suggestionsCuisines } from '../assets/data/cuisinesSuggestions';

const SearchRestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('_____________');
    const [suggestions, setSuggestions] = useState([{}]);
    const loadSuggestions = (suggestions: string) => {
        setSearchQuery(suggestions);
        console.log(searchQuery);
        // suggestionsCuisines.filter(category => category.highlightedText === searchQuery.current);
    }
    useEffect(() => {
        suggestionsCuisines.filter(category => category.highlightedText.includes(searchQuery));
        console.log(suggestionsCuisines.filter(category => category.highlightedText.includes(searchQuery)))
    }, [searchQuery, loadSuggestions]);
    return (
        <div className='mt-5'>
            <div className='search-page mx-auto mb-5'>
                <SearchBarBig />
                <div className='ml-1 mb-5 popular-cuisines-text'>
                    Popolar Cuisines
                </div>
                <Container>                {/*//Cuisine Carousel */}
                    <Row className='d-flex justify-content-center my-2'>
                        <Col>
                            <Carousel
                                ssr
                                itemClass="image-item"
                                responsive={responsive}
                                arrows={true}
                                infinite={true}
                                centerMode={true}
                                autoPlay={true}
                            >
                                {cusines?.map(image => {
                                    return (
                                        <div onClick={() => loadSuggestions(image?.suggestions)} key={image.id} className="d-flex align-items-center justify-content-center mx-3 h-100">
                                            <Image
                                                draggable={false}
                                                style={{ maxWidth: '130px', cursor: 'pointer' }}
                                                src={`${imageStore}${image.imageId}`}
                                            />
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <Row className='mx-3 mt-4 pt-5'>
                    {suggestionsCuisines?.filter(category => category.highlightedText.includes(searchQuery)).map(suggestion => <SearchSuggestions suggestions={suggestion} />)}
                </Row>
            </div>
            <div className=''>
                <SponsoredMusicPlayer />
            </div>
        </div>
    )
}

export default SearchRestaurantsScreen;