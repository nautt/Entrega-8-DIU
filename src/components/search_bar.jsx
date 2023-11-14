import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {

const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSearch = () => {
    navigate(`/search?q=${searchTerm}`, {replace: true});
};

  return (
    <Form>
      <Form.Group controlId="searchBar">
        <InputGroup>
          <FormControl
            type="text"
            placeholder="Buscar tema"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>      
      </Form.Group>
    </Form>
  );
}

export default SearchBar;

