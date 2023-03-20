import { Profile } from './Profile/Profile';
import user from '../jsonfile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../jsonfile/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../jsonfile/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../jsonfile/transactions.json';

export const App = () => {
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      gap: 60,
      alignItems: "center",
      padding: 20,
      fontSize: 50,
    }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics  title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}