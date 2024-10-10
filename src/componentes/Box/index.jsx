import './style.css'
export default function Box() {
    return (
        <>
            <div>
                <form action="">
                    <h3>Login</h3>
                    <input type="text" placeholder='Usuário' required/><br />
                    <input type="password" placeholder='Senha' required/><br />
                    <button>Enviar</button>
                </form>
            </div>
        </>
    )
}