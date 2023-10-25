import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createAuth } from 'src/utils/firebase';

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const auth = createAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing up with email and password:', error);
    throw error;
  }
};
