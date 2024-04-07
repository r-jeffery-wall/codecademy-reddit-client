import { InputGroup, Form, Button } from "react-bootstrap"
import { useState } from 'react';

export const SearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <InputGroup className="" style={{width: "375px"}}>
            <Form.Control placeholder="search" aria-label="search" aria-describedby="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <Button variant="primary"><i className="fas fa-search" /></Button>
        </InputGroup>
    )
}