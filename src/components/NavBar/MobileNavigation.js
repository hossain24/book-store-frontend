import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
} from './mobile-navigation';

const MobileNavigation = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

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

            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default MobileNavigation;
