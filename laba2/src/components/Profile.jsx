import './Profile.css'

const Profile = ({name, role, avatarUrl}) => {
    return (
        <div className="profile-card">
            <img src={avatarUrl} alt={name} className="avatar"/>
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
        </div>
    );
};

export default Profile;
