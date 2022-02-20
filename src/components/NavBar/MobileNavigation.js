import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './mobile-navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';

const MobileNavigation = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="book" onClick={toggle}>
                        Book
                    </SidebarLink>
                    <SidebarLink to="buy" onClick={toggle}>
                        Buy
                    </SidebarLink>
                    <SidebarLink to="rent" onClick={toggle}>
                        Rent
                    </SidebarLink>
                    <SidebarLink to="explore" onClick={toggle}>
                        Explore
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default MobileNavigation;
