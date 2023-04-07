import { SCPasso, SCPassosContainer } from "./passos.style";
import {AiOutlineUserAdd} from "react-icons/ai";
import {BsHouseAdd} from "react-icons/bs";
import {BiHappyHeartEyes} from "react-icons/bi";

function Passos({passoAtual}) {
    return ( // aqui vai os passos
        <SCPassosContainer>
            <SCPasso passoAtivo = {passoAtual == 0 ? true: false}>
                <AiOutlineUserAdd/> Dados Pessoais;
            </SCPasso>
            <SCPasso passoAtivo = {passoAtual == 1 ? true: false}>
                <BsHouseAdd/> Endereço;
            </SCPasso>
            <SCPasso passoAtivo = {passoAtual == 2 ? true: false}>
                <BiHappyHeartEyes/> Agradecimento;
            </SCPasso>
        </SCPassosContainer>
    );
};
export default Passos;