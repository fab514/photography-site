import styled from "@emotion/styled";

const LinkStyled = styled('a')`
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