import styles from './styles.module.css';
import h1 from './h1.module.css';

console.log(h1)

console.log(styles);

export default function App() {
    return (
        <div className={styles.App}>
            <h1 className={h1.App}> Unstyled Log-in</h1>
            <form className={styles.form}>
                <label>Username:</label>
                <input type='text' />
                <label>Password:</label>
                <input type='password' />
                <button>submit</button>
            </form>
        </div>
    )
}