import { Form, FormGroup } from "react-bootstrap";


function Endereco() {

    return(
        <Form>
            <FormGroup>
                <Form.Label>Logradouro</Form.Label>
                <Form.Control type="text" placeholder="Digite seu endereço"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Número</Form.Label>
                <Form.Control type="text" placeholder="Digite o número"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Digite seu bairro"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Complemento</Form.Label>
                <Form.Control type="text" placeholder="Digite o complemento"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Digite a cidade"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Cep</Form.Label>
                <Form.Control type="text" placeholder="Digite o Cep"/>
            </FormGroup>
            <FormGroup>
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Digite o estado"/>
            </FormGroup>
        </Form>
    )
}

export default Endereco