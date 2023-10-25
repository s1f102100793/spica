import { signInWithEmailAndPassword } from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const auth = createAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in with email and password:', error);
    throw error;
  }
};

export const logout = async () => {
  await createAuth().signOut();
};
