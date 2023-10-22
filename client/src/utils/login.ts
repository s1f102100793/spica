import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';
import { returnNull } from './returnNull';

export const loginWithGitHub = async () => {
  const ghProvider = new GoogleAuthProvider();
  ghProvider.addScope('read:user');

  await signInWithPopup(createAuth(), ghProvider).catch(returnNull);
};

export const logout = async () => {
  await createAuth().signOut();
};
