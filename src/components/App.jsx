import { Profile } from "./Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Statistics } from "./Statistics";
import {Friendlist} from './FriendList'
import { TransactionHistory } from "./TransactionHistory";
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
