import { Profile } from "./Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from "./Statistics";
import {Friendlist} from './FriendList'
import { TransactionHistory } from "./TransactionHistory";

export const App = () => {
  return (
    <>
     <Profile userName={user}/>
     <Statistics title="Upload stats" stats={data}/>
     <Friendlist friends={friends}/>
     <TransactionHistory items={transactions}/>
    </>
  );
};
