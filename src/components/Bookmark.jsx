import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    return (
        <div className="bg-white m-2 p-2 rounded">
            <h2>{bookmark.title}</h2>

            
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;