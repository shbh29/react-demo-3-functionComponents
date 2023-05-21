import './styles.css'

export default function App() {
    return (
        <div className='App'>
            <h1> Unstyled Log-in</h1>
            <form className='form'>
                <label>Username:</label>
                <input type='text' />
                <label>Password:</label>
                <input type='password' />
                <button>submit</button>
            </form>
        </div>
    )
}