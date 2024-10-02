import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IoHome } from "react-icons/io5";
import PropTypes from 'prop-types';

const BreadcrumbExample = ({ separator }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x); // Get paths and filter out empty strings

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <NavLink to='/' className='d-flex align-items-start'>
                    <span><IoHome /></span>
                    <span className='ps-1'>خانه</span>
                </NavLink>
            </Breadcrumb.Item>
            {pathnames.map((pathname, index) => {
                const isLast = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`; // Create the path for the NavLink

                return isLast ? (
                    <Breadcrumb.Item active key={index}>
                        {decodeURIComponent(pathname)} {/* Decode URL to get readable text */}
                    </Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item key={index}>
                        <NavLink to={to}>
                            {decodeURIComponent(pathname)}
                        </NavLink>
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

BreadcrumbExample.propTypes = {
    separator: PropTypes.string
};

BreadcrumbExample.defaultProps = {
    separator: '/'
};

export default BreadcrumbExample;
