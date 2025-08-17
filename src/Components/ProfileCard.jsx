import ProfilePic from "/public/profile-pic.jpeg";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img className="profile-pic" src={ProfilePic} alt="Proile Photo" />
      <h2 className="profile-name">Beatrice W. Ndungu</h2>
      <p className="profile-title">Full-Stack Developer</p>
      <p className="profile-location">Nairobi, Kenya</p>
      <p className="profile-bio">
        Passionate about building scalable, user-friendly web applications and
        cloud-based solutions.
      </p>
    </div>
  );
}
