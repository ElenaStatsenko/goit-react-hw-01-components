import { Profile } from "./Profile"
import user from '../data/user.json';
import data from '../data/data.json'
import { Statistics } from "./Statistics";


export const App = () => {
  return (
    <>
     <Profile userName={user}/>
     <Statistics title="Upload stats" stats={data}/>
    </>
  );
};
