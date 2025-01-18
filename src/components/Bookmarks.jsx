import PropTypes from "prop-types";
import Bookmark from "./Bookmark";



const Bookmarks = ({ bookmarks, readTime }) => {

 console.log(readTime);
 

    return (
        <div className="w-1/3 ml-4 ">
            <div className="bg-gray-200 rounded p-4 mb-2 text-purple-700 font-semibold">
                Total Time on read: {readTime} minutes
            </div>

            <div className="bg-gray-200 rounded p-4" >

                <h1>Bookmarks History: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                }
            </div>



        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
    readTime: PropTypes.number.isRequired
}

export default Bookmarks;