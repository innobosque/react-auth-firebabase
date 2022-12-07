import { BtnGroup,DialogBox,LoginContainer } from "./components";
import { useUser } from "./hooks/useUser";

const App = () => {

    //console.log('estado');
    const {
        user,
        loading,
        error,
        handleSignInWithEmailPassword,
        handleSignOut,
    } = useUser();



    return (
        <div className="container min-h-screen flex justify-center items-center">
            <LoginContainer>
                {/* Botones de acceso y logout */}
                <BtnGroup
                    userBool={Boolean(user)}
                    handleSignInWithEmailPassword={handleSignInWithEmailPassword}
                    handleSignOut={handleSignOut}
                    loading={loading} />
                {/* Mensajes */}
                {
                    (Boolean(user)) ? <DialogBox message={user?.email} />:''
                }
                {
                    Boolean(error) ? <DialogBox message={error?.message} /> : ''
                }

            </LoginContainer>
        </div>)
}

export default App