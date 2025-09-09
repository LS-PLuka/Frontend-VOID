import estilos from './Login.module.css';

export default function Login() {
    return (
        <div className={estilos.login}>
            <section className={estilos.section}>
                <h2 className={estilos.obs}>Entre usando as seguintes</h2>

                <div className={estilos.quadrado1}>
                    <div className={estilos.arroba}>@</div>
                    <h1>Receber código no e-mail</h1>
                </div>
                
                <div className={estilos.quadrado2}>
                    <img src='/logo/symbols/apple.png'/>
                    <h1>Entra com a Apple</h1>
                </div>

                <div className={estilos.quadrado3}>
                    <img src='/logo/symbols/facebook.png'/>
                    <h1>Entrar com Facebook</h1>
                </div>

                <div className={estilos.quadrado4}>
                    <img src='/logo/symbols/google.png' />
                    <h1>Fazer login com o Google</h1>
                </div>

                <div className={estilos.button1}>
                <input type="checkbox" className={estilos.checkbox}/>
                <h2> Você concorda com os <b>Termos de Uso e Políticas de privacidade</b> da Void?</h2>
                </div>

                <h2 className={estilos.obs}>Já tenho cadastro</h2>

                <div className={estilos.quadrado5}>
                    <img src='/logo/symbols/email.png' />
                    <h1>Entrar com e-mail</h1>
                </div>
            </section>
        </div>
    );
}
