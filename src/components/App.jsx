import Statistics from "./Statistics/statistics";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/friendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import '../components/App.css'

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


export const App = () => {
  return (
    <div className="app-container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
     
    </div>
  );
};

