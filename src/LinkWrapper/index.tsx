import React from "react";
import { LinkWrapperProperties } from "./interfaces";

function LinkWrapper({ href, children, ariaLabel }: LinkWrapperProperties) {
    return (
        <>
            <link href={href} aria-label={ariaLabel}>{children}</link>
        </>
    )
}

export default LinkWrapper