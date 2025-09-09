import Header from '../components/HeaderMob';
import Login from '../components/LoginMob';
import styles from './login.module.css';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <Header/>
            <Login/>
        </div>
    );
}
