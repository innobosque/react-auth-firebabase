import { useForm } from "../"

export const BtnGroup = ({ userBool, loading, handleSignInWithEmailPassword, handleSignOut }) => {
    const {handleResetForm,handleInputChange,email,password} = useForm({
        email: 'homegoma@hotmail.com',
        password: '123456',
    });
    return (
        <div className="btn-group">
            {
            !userBool?
            <div className="text-center">
                <input
                className="block w-full my-2 px-2 py-1 rounded" 
                name="email"
                onChange={handleInputChange}
                value={email}
                type="text" placeholder="Su correo" />
                <input
                className="block w-full my-2 px-2 py-1 rounded"
                name="password"
                onChange={handleInputChange}
                value={password}
                 type="password" placeholder="Su contraseña" />
                <button
                    aria-label="Acceso"
                    onClick={() => handleSignInWithEmailPassword(email,password)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    style={{ backgroundColor: loading ? 'rgb(248,113,113)' : '' }}>
                    {loading ? <span role="alert">Cargando...</span> : 'Acceso'}
                </button>
                <button
                onClick={handleResetForm}
                className="bg-slate-700 hover:bg-slate-900 text-white font-bold ml-2 py-2 px-4 rounded">
                    Reseteo
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
