import profile from "../assets/images/profile.png"
const Header = () => {
    return (
        <div className="flex justify-between items-center my-10 border-b-2 pb-2">
            <h1 className="text-2xl font-bold">ThoughtBin</h1>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;