export const FriendList= ({friends: {avatar, name, isOnline, id}}) => {
    return (
        <ul>
       {friends.map(friend => (
       <li key = {id}>
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>)) }
</ul>
    )
}