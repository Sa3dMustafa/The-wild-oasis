import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  background-color: var(--color-grey-0);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  height: 100vh;
`;
function Sidebar() {
  return <StyledSidebar>
    <Logo/>
    <MainNav/>
  </StyledSidebar>;
}

export default Sidebar;
