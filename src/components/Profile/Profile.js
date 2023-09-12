import { ProfileList, ProfileUl, ProfileLi} from './Profile.styled';

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

      <ProfileUl>
        <ProfileLi>
          <p>Followers</p>
          <p>{followers}</p>
        </ProfileLi>
        <ProfileLi>
          <p>Views</p>
          <p>{views}</p>
        </ProfileLi>
        <ProfileLi>
          <p>Likes</p>
          <p>{likes}</p>
        </ProfileLi>
      </ProfileUl>
    </ProfileList>
  );
};
