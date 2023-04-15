import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
const SearchBarBig = () => {
    return (
        <InputGroup size="lg" className='mb-5'>
            <Form.Control
                className='search-input-field'
                placeholder="Search for restaurnats or food"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
            />
            <InputGroup.Text id="inputGroup-sizing-lg">
                <SearchIcon className='mx-2' />
            </InputGroup.Text>
        </InputGroup>
    )
}

export default SearchBarBig