import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
      <div className="profileRightTop">
      <div className="profileCover">
      <img src="assests/post/n6.jpg" alt="" className="profileCoverImg" />
        <img src="assests/profile/p9.jpeg" alt="" className="profileUserImg" />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Akriti Yadav</h4>
        <span className="profileInfoDesc">Hello my friends!</span>
      </div>
      </div>
      <div className="profileRightBottom">
      <Feed/>
      <Rightbar profile/>
      </div>
      
      </div>
      </div>
      
    </>
  );
}
