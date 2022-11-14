import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Alok yadav</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assests/ad.webp" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
   
 const ProfileRightbar =()=>{
  return(
    <>
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Country: </span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Delhi </span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Single </span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assests/profile/p1.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">saloni </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/p2.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Neha thakur </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/p3.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Alok yadav</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/p4.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">smriti Tiwari </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/p6.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Sudha Gupta </span>
        </div>
        <div className="rightbarFollowing">
          <img src="assests/profile/p8.jpg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Anjali yadav </span>
        </div>
      </div>
    </>
  )
 }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
               {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
