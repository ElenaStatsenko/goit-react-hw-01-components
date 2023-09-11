import { ProfileList } from './Profile.styled';

export const Profile = ({
  userName: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileList>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <h2 className="name">{username}</h2>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stat">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileList>
  );
};
