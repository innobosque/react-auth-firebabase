import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, onSignOut, signInWithEmailPassword } from "../firebase";
export const useUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)



    const handleSignInWithEmailPassword = async (email = 'homegoma@hotmail.com', password = '123456') => {
        setError(null);
        try {
            setLoading(true);
            const tmp = await signInWithEmailPassword(email, password);
            setUser(tmp.user);
            
        } catch (err) {
            setError({
                code: err.code,
                message: err.message,
            })
        } finally{
            setLoading(false);

        }
    }

    const handleSignOut = async () => {
        setError(null);
        try {
            await onSignOut();
            setUser(null);
        } catch (err) {
            setError({
                code: err.code,
                message: err.message,
            })
        }
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usr) => {
            (usr) ? setUser(prevState => ({ ...prevState, ...usr })) : setUser(null);
        })
        return () => {
            unsubscribe();
        };
    }, [])

    //console.log(user)


    return {
        user,
        loading,
        error,
        handleSignInWithEmailPassword,
        handleSignOut
    }
}
