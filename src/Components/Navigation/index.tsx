import React from "react"
import NavigationStyled from "./NaviagationStyled"
import LinkWrapper from "../LinkWrapper"

function Navigation() {
    return (
        <>
            <NavigationStyled>
                <LinkWrapper to={"../Home"} target={"_blank"} ariaLabel={"home"}>Home</LinkWrapper>
                <LinkWrapper to={"../About"} target={"_blank"} ariaLabel={"about"}>About</LinkWrapper>
                <LinkWrapper to={"../Gallery"} target={"_blank"} ariaLabel={"gallery"}>Gallery</LinkWrapper>
                <LinkWrapper to={"../Details"} target={"_blank"} ariaLabel={"details"}>Details</LinkWrapper>
                <LinkWrapper to={"../Testimonials"} target={"_blank"} ariaLabel={"testimonials"}>Testimonials</LinkWrapper>
                <LinkWrapper to={"../Contact"} target={"_blank"} ariaLabel={"contact"}>Contact</LinkWrapper>
            </NavigationStyled>
        </>
    )
}

export default Navigation