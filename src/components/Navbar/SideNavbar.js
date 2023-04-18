import React from "react";
import { IconContext } from "react-icons/lib";
import { FaTimes } from "react-icons/fa";
import {
    SidebarContainer,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarBtnWrap,
    SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="/">Home</SidebarLink>
                        <SidebarLink to="/about">About</SidebarLink>
                        <SidebarLink to="/contact">Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SidebarBtnWrap>
                    <FaTimes onClick={toggle} />
                </SidebarWrapper>
            </SidebarContainer>
        </IconContext.Provider>
    );
};

export default Sidebar;
