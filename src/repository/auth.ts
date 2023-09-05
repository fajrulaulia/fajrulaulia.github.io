import { auth } from '../config/config';

export const useAuthRepository = () => {

    const signUp = async (email: string, password: string): Promise<firebase.default.auth.UserCredential | null> => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            return userCredential;
        } catch (error) {
            console.error('Sign up error:', error);
            return null;
        }
    }

    const signIn = async (email: string, password: string): Promise<firebase.default.auth.UserCredential | null> => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            return userCredential;
        } catch (error) {
            console.error('Sign in error:', error);
            return null;
        }
    }

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error('Sign out error:', error);
        }
    }

    return { signUp, signIn, signOut };
};
