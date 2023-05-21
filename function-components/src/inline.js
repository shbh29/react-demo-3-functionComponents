
const AppStyle = {
    display: "flex",
    flexDirection:'column',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
    height: '96vh'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const inputStyle = {
    boxSizing:'border-box',
    marginBottom: '10px',
    fontSize: '24px',
    padding:'12px',
    borderRadius: '30px',
    border: '0',
    borderBottom: '1px solid #eee',
    boxShadow: '1px 1px 6px gray'
  
  }

export default function App() {
    return (
        <div style={AppStyle}>
            <h1> Inline Log-in</h1>
            <form style={formStyle}>
                <label>Username:</label>
                <input style={inputStyle} type='text' />
                <label>Password:</label>
                <input style={inputStyle} type='password' />
                <button>submit</button>
            </form>
        </div>
    )
}