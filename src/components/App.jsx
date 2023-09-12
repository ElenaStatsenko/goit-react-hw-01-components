import { Profile } from "./Profile/Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from "./Statistics/Statistics";
import {Friendlist} from './Fiendlist/FriendList'
import { TransactionHistory } from "./transactionshistory/TransactionHistory";
import { GlobalStyled } from "./GlobalStyle";
export const App = () => {
  return (
    <>
    <GlobalStyled/>
     <Profile userName={user}/>
     <Statistics title="Upload stats" stats={data}/>
     <Friendlist friends={friends}/>
     <TransactionHistory items={transactions}/>
    </>
  );
};
