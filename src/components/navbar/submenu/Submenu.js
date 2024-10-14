import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Submenu.css';
import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import axios from "axios";
import { NavLink } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"


function Submenu(){
  const { isPending, error, data: navLinks, isFetching } = useQuery({
    queryKey: ['navbar'],
    queryFn: async () => {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + '/tour/navbar/',
      )
      return response.data
    },
  })
  if (isPending || navLinks == undefined) {
    return (
      [1, 2, 3].map((val) => {
        <div style={{ width: "40px", height: "20px" }} className="shimmer" key={val}>
        </div>
      })
    )
  }
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
                  <DropdownSubmenu key={child.id+1} title={child.name}>
                    {child.children.map(grandChild => (
                      // Check if the grandchild has children
                      grandChild.children ? (
                        // Render a nested NavDropdownSubmenu for great-grandchildren
                        <DropdownSubmenu key={grandChild.id+2} title={grandChild.name}>
                          {grandChild.children.map(greatGrandChild => (
                            // Render NavDropdown.Item for each great-grandchild
                            <NavDropdown.Item href={greatGrandChild.path} key={greatGrandChild.id+3}>
                                {greatGrandChild.name}
                            </NavDropdown.Item>
                          ))}
                        </DropdownSubmenu>
                      ) : (
                        // Render NavDropdown.Item for grandchildren without children
                        <NavDropdown.Item href={grandChild.path} key={grandChild.id+2}>
                            {grandChild.name}
                        </NavDropdown.Item>
                      )
                    ))}
                  </DropdownSubmenu>
                ) : (
                  // Render NavDropdown.Item for children without grandchildren
                  <NavDropdown.Item href={child.path} key={child.id+1}>
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

export default Submenu;