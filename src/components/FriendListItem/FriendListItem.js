import PropTypes from 'prop-types';
import './FriendListItem.css';

const FriendListItem = ({ isOnline, id, avatar, name }) => {
  return (
    <li className={`item ${isOnline ? 'online' : 'offline'}`} key={id}>
      <span className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
