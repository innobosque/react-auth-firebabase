export const BtnGroup = ({ userBool, loading, handleSignInWithEmailPassword, handleSignOut }) => {
    return (
        <div className="btn-group">
            {
            !userBool?
            <button
                aria-label="Acceso"
                onClick={() => handleSignInWithEmailPassword()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                style={{ backgroundColor: loading ? 'rgb(248,113,113)' : '' }}>
                {loading ? <span role="alert">Cargando...</span> : 'Acceso'}
            </button>
            :
            <button
                aria-label="Logout"
                onClick={() => handleSignOut()}
                className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded-full">
                Logout
            </button>
            }
        </div>
    )
}
