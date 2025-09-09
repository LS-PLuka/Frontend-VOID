import estilos from './Header.module.css';

export default function HeaderMob() {
    return (
        <header className={estilos.header}>
            <nav className={estilos.nav}>
                <a href="#">
                    <img className={estilos.img} src="/logo/symbols/roupas.svg" alt="Produtos" />
                </a>
                <a href="#">
                    <img className={estilos.img} src="/logo/symbols/Pasta.svg" alt="Categorias" />
                </a>
                <a href="#">
                    <img className={estilos.img} src="/logo/symbols/Sacola.svg" alt="Sacola" />
                </a>
                <a href="#">
                    <img className={estilos.img} src="/logo/symbols/Profile.svg" alt="Profile" />
                </a>
            </nav>
        </header>
    );
}
