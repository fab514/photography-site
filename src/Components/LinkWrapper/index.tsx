import React from "react";
import { LinkWrapperProperties } from "./interfaces";
import LinkStyled from "./LinkStyled";

function LinkWrapper({ children, ariaLabel, to }: LinkWrapperProperties) {
    return <LinkStyled aria-label={ariaLabel} to={to}>{children}</LinkStyled>
}

export default LinkWrapper