import { useForm } from "../hooks/useForms"

export const BtnGroup = ({ userBool, loading, handleSignInWithEmailPassword, handleSignOut }) => {
    const {onInputChange,email,password} = useForm({
        email: '',
        password: '',
    });
    return (
        <div className="btn-group">
            {
            !userBool?
            <div>
                <input
                className="block w-full my-2 px-2 py-1 rounded" 
                name="email"
                onChange={onInputChange}
                value={email}
                type="text" placeholder="Su correo" />
                <input
                className="block w-full my-2 px-2 py-1 rounded"
                name="password"
                onChange={onInputChange}
                value={password}
                 type="password" placeholder="Su contraseña" />
                <button
                    aria-label="Acceso"
                    onClick={() => handleSignInWithEmailPassword(email,password)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    style={{ backgroundColor: loading ? 'rgb(248,113,113)' : '' }}>
                    {loading ? <span role="alert">Cargando...</span> : 'Acceso'}
                </button>
            </div>
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
