import React from "react"
import NavigationStyled from "./NaviagationStyled"
import LinkWrapper from "../LinkWrapper"

function Navigation() {
    return (
        <>
            <NavigationStyled>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"app"}>This is an app</LinkWrapper>
                <LinkWrapper to={`home`} target={"_blank"} ariaLabel={"home"}>Home</LinkWrapper>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"about"}>About</LinkWrapper>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"gallery"}>Gallery</LinkWrapper>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"details"}>Details</LinkWrapper>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"testimonials"}>Testimonials</LinkWrapper>
                <LinkWrapper href={"https://www.google.com/"} target={"_blank"} ariaLabel={"contact"}>Contact</LinkWrapper>
            </NavigationStyled>
        </>
    )
}

export default Navigation