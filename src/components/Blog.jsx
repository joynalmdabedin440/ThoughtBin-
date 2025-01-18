import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog,bookmarksHandle,readTimeHandle }) => {
    console.log(blog);
    const { cover, author, author_img, posted_date, reading_time, title, hashtags } = blog


    return (
        <div className="gap-10">
            <img src={cover} alt={title} />
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center gap-2">
                    <img className="w-16" src={author_img} alt={author} />
                    <div>
                        <h2 className="text-lg font-bold">
                            {author}
                        </h2>
                        <p>
                            {posted_date}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <p>0 {reading_time} min read</p>
                    <button onClick={()=> {
                        bookmarksHandle(blog)
                    }}>
                        <CiBookmark></CiBookmark>
                    </button>
                </div>
            </div>

            <div className="mb-7">
                <h2 className="text-2xl font-bold">
                    {title}
                </h2>
                <div className="my-4">
                    {
                        hashtags.map((hashtag, index) => <span className="pr-2" key={index}>#{hashtag}</span>)
                    }
                </div>
                <button onClick={()=>readTimeHandle(blog) }
                    className="text-purple-700 underline ">Mark as read </button>


            </div>



        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    bookmarksHandle: PropTypes.func.isRequired,
    readTimeHandle: PropTypes.func.isRequired
}

export default Blog;