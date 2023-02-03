import React from "react";
import { LinkWrapperProperties } from "./interfaces";
import LinkStyled from "./LinkStyled";

function LinkWrapper({ href, children, ariaLabel }: LinkWrapperProperties) {
    return (
        <>
            <LinkStyled href={href} aria-label={ariaLabel}>{children}</LinkStyled>
        </>
    )
}

export default LinkWrapper