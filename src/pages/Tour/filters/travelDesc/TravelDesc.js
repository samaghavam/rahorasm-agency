import React, { forwardRef, useContext } from 'react';
import { BsPinFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FilterCTX } from '../../Tours';

const TravelDesc = forwardRef((_, ref) => {
    const {init} = useContext(FilterCTX)
    const scrollToTabsTravel = () => {
        const tabsTravelElement = document.getElementById('tabs-travel');
        if (tabsTravelElement) {
            tabsTravelElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="card-style rounded my-3 py-2 bg-light pt-2 d-flex ps-3 align-items-center">
            <Link onClick={scrollToTabsTravel}>
                <span><BsPinFill /></span>
                <span>توضیحات تور {init &&init.name}</span>
            </Link>
        </div>
    );
});

export default TravelDesc;
