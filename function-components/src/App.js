import './App.css';
import React, {useState,useRef, useEffect} from 'react';
import {debounce} from 'lodash';


function getGitRepos(username = `shbh29`) {
  return fetch(`https://api.github.com/users/${username}/repos`)
  .then((resolve) => resolve.json()).catch((error) => {console.log(error)})
  .then((data) => data).catch((error) => {console.log(error)});
}

function App() {
  const [repos, setRepos] = useState([]);
  const [text, setText] = useState('shbh29');

  const fetchData = async (username) => {
    console.log(`calling api with ${username}`)
    const data = await getGitRepos(username);
    if(Array.isArray(data)) {
      setRepos(data);
    }
  }

  const debouncedFetchDataRef = useRef(debounce(fetchData, 2000));

  useEffect(() => {

    debouncedFetchDataRef.current(text);
  },[text]);

  return (
    <div>
      <input type='text' onChange={(event) => {
        setText(event.target.value);
      }} /> 
      <h1>Below are git repos: {text}</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}> {repo.name} </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
