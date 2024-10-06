import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Submenu.css';
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import { NavLink } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"


function SubmenuAsia(){
  const { isPending, error, data:navLinks, isFetching } = useQuery({
    queryKey: ['navbar'],
    queryFn: async () => {
      const response = await axios.get(
        'https://rahorasm.msdcorporation.top/tour/navbar/',
      )
      return response.data
    },
  })
    return (
      <>
        {navLinks && navLinks.map(item => (
          // Check if the current item has children
          item.children ? (
            // Render a NavDropdownMenu if the item has children
            <NavDropdownMenu key={item.id} title={item.name} alignRight>
              {item.children.map(child => (
                // Check if the child has grandchildren
                child.children ? (
                  // Render a nested NavDropdownSubmenu for grandchildren
                  <DropdownSubmenu key={child.id} title={child.name}>
                    {child.children.map(grandChild => (
                      // Check if the grandchild has children
                      grandChild.children ? (
                        // Render a nested NavDropdownSubmenu for great-grandchildren
                        <DropdownSubmenu key={grandChild.id} title={grandChild.name}>
                          {grandChild.children.map(greatGrandChild => (
                            // Render NavDropdown.Item for each great-grandchild
                            <NavDropdown.Item href={greatGrandChild.path} key={greatGrandChild.id}>
                                {greatGrandChild.name}
                            </NavDropdown.Item>
                          ))}
                        </DropdownSubmenu>
                      ) : (
                        // Render NavDropdown.Item for grandchildren without children
                        <NavDropdown.Item href={grandChild.path} key={grandChild.id}>
                            {grandChild.name}
                        </NavDropdown.Item>
                      )
                    ))}
                  </DropdownSubmenu>
                ) : (
                  // Render NavDropdown.Item for children without grandchildren
                  <NavDropdown.Item href={child.path} key={child.id}>
                      {child.name}
                  </NavDropdown.Item>
                )
              ))}
            </NavDropdownMenu>
          ) : (
            // Render Nav.Item for items without children
            <Nav.Link href={item.path} key={item.id}>
                {item.name}
            </Nav.Link>
          )
        ))}
      </>
    );
    
}

export default SubmenuAsia;