import { InputGroup, Form, Button } from "react-bootstrap"

export const SearchBar = () => {
    return (
        <InputGroup className="" style={{width: "375px"}}>
            <Form.Control placeholder="search" aria-label="search" aria-describedby="search" />
            <Button variant="primary"><i className="fas fa-search" /></Button>
        </InputGroup>
    )
}