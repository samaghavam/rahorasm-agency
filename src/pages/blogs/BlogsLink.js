import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowLeft } from "react-icons/md";

const BlogsLink = () => {
  return (
    <>
    <div className='card-style rounded p-4'> 
        <ul>
            <li><Link to={'?q=ایرانگردی'}>
            <span><MdArrowLeft /></span>
            <span>ایرانگردی</span>
            </Link></li>
            <li><Link to={'?q=جهانگردی'}>
            <span><MdArrowLeft /></span>
            <span>جهانگردی</span>
            </Link></li>
            <li><Link to={'?q=راهنمای سفر'}>
            <span><MdArrowLeft /></span>
            <span>راهنمای سفر</span>
            </Link></li>
            <li><Link to={'?q=بهترین زمان سفر'}>
            <span><MdArrowLeft /></span>
            <span>بهترین زمان سفر</span>
            </Link></li>
            <li><Link to={'?q=معروف ترین غذاها'}>
            <span><MdArrowLeft /></span>
            <span>معروف ترین غذاها</span>
            </Link></li>
            <li><Link to={'?q=معروف ترین مراکز خرید'}>
            <span><MdArrowLeft /></span>
            <span>معروف ترین مراکز خرید</span>
            </Link></li>
            <li><Link to={'?q=معروف ترین رستوران ها'}>
            <span><MdArrowLeft /></span>
            <span>معروف ترین رستوران ها</span>
            </Link></li>
            <li><Link to={'?q=اخبار گردشگری'}>
            <span><MdArrowLeft /></span>
            <span>اخبار گردشگری</span>
            </Link></li>
        </ul>
    </div>
    </>
  )
}

export default BlogsLink