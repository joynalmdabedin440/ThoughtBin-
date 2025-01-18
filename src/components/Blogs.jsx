import { useEffect, useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    
    
    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs);
    
   
    return (
        <div>
            {
                blogs.map((blog ,index)=><Blog key={index} blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;