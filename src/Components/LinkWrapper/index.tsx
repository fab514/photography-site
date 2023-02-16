import React from "react";
import { LinkWrapperProperties } from "./interfaces";
import LinkStyled from "./LinkStyled";

function LinkWrapper({ href, children, ariaLabel, to }: LinkWrapperProperties) {
    return <LinkStyled href={href} aria-label={ariaLabel} to={to}>{children}</LinkStyled>
}

// TODO: Add a react-router link to navigate pages. https://v5.reactrouter.com/web/api/Link/others

export default LinkWrapper