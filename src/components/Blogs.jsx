import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";


const Blogs = ( {bookmarksHandle,readTimeHandle}) => {
    const [blogs, setBlogs] = useState([])
    
    
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
        .then(data => setBlogs(data))
    }, [])
  
   
    return (
        <div className="w-2/3">
            {
                blogs.map((blog ,index)=><Blog bookmarksHandle={bookmarksHandle} readTimeHandle={readTimeHandle}  key={index} blog={blog}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes = {
    bookmarksHandle: PropTypes.func.isRequired,
    readTimeHandle:PropTypes.func.isRequired
}

export default Blogs;