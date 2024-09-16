import PropTypes from 'prop-types';
import '../styles/FriendsList.css';

const FriendsList = ({ friends }) => {
  return (
    <div className="friends-list">
      <h2>Amigos</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>
            <img src={friend.photo} alt={friend.name} />
            <div>
              <h4>{friend.name}</h4>
              <p>{friend.commonFriends} amigos em comum</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    commonFriends: PropTypes.number.isRequired,
  })).isRequired,
};

export default FriendsList;