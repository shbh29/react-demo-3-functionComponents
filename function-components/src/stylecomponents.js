import styled, {css} from "styled-components";

console.log(styled);

const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightpink;
    align-items: center;
    justify-content: center;
    height: 96vh;
    ${(props) => props.primary &&
    css`
        background-color: yellowgreen;
        color: black;
    `}
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


const Input = styled.input`
  box-sizing:border-box;
  margin-bottom:10px;
  font-size:24px;
  padding:12px;
  border-radius: 30px;
  border: 0;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 1px 6px gray;
`;

const Button = styled.button`
  box-sizing: border-box;
  display: block;
  appearance: none;
  margin-top: 10px;
  padding: 10px;
  border: none;
  background-color: #3f52b5;
  color: #fff;
  font-weight: 600;
  font-size:1.3em;
  border-radius: 5px;
  width: 95%;
  align-self: center;
  &:hover {
    background-color: blue;
  }
`;

export default function App() {
    return (
        <Div primary='true'>
            <h1> Unstyled Log-in</h1>
            <Form>
                <label>Username:</label>
                <Input type='text' />
                <label>Password:</label>
                <Input type='password' />
                <Button>submit</Button>
            </Form>
        </Div>
    )
}