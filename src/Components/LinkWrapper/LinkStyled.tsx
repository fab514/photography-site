import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
    color: black;
    font-size: 20px;
    font-weight: bold;
    /* padding-left: 40px; */
    text-decoration: none;
    &:hover {
        color: darkcyan;
        text-decoration: underline;
    }
`

export default LinkStyled