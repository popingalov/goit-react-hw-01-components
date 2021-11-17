export default function FriendListItem({ friends }) {
  return (
    <>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">
            {friend.isOnline ? 'online' : 'ofline'}
          </span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
}
