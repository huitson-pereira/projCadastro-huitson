import { Form } from "react-bootstrap";


function Agradecimento() {
    return (
        // aqui vai a mensagem de agradecimento
        <Form>
            <h1>Obrigado pelo seu cadastro!</h1>
            <h2>Conte-nos onde nos conheceu?</h2>

            {/* aqui vai o select*/}
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecione</option>
                <option value="1">Pelo site</option>
                <option value="2">Pelo Linkedin</option>
                <option value="3">Pelo Instagram</option>
            </select>
        </Form>
    );
}
export default Agradecimento;