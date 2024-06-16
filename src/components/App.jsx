import { Profile } from './Profile/Profile';
import user from '../data/user.json';

import data from '../data/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../data/friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile {...user}></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
