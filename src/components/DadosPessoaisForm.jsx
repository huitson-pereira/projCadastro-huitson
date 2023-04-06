import { Form, FormGroup } from "react-bootstrap";

function DadosPessoaisForm() {
    return (
        // os dois inputs vão aqui
        <Form>
            <FormGroup>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Digite seu e-mail"/>
            </FormGroup>
        </Form>
    );
}

export default DadosPessoaisForm;