import React from 'react'
import { 
      SidebarContainer, 
      Icon, 
      CloseIcon,
      SidebarWrapper,
      SidebarMenu,
      SidebarLink,
      SideBtnWrap,
      SidebarRoute
} from './SidebarElements'

const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
            <CloseIcon />
       </Icon>
       <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="individuals" onClick={toggle}>
                  Individuals
               </SidebarLink>

               <SidebarLink to="team" onClick={toggle}>
                  Team
               </SidebarLink>

               <SidebarLink to="enterprise" onClick={toggle}>
                  Enterprise
               </SidebarLink>

               <SidebarLink to="products" onClick={toggle}>
                  Products
               </SidebarLink>

               <SidebarLink to="pricing" onClick={toggle}>
                  Pricing
               </SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                  <SidebarRoute to="/login">
                        Log in
                  </SidebarRoute>
            </SideBtnWrap>

       </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar