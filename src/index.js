import React, { useReducer /*useState, useEffect*/} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// useReducer
function Checkbox() {
  const [checked, toggle] = useReducer((checked => !checked), false);

  return (
    <>
    <input type='checkbox' value={checked} onChange={toggle} />
    {checked ? 'checked': 'not checked'}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.querySelector('#root')
);

// useEffect with github user and fetching info.
// function GitHubUser({login}) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//       .then(res => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);

//   if(data) {
//     return (
//       <div>
//         <h1>{data.login}</h1>
//         <img src={data.avatar_url} width={100} />
//       </div>
//     )
//   }
//   return null;
// }

// function App() {
//   return <GitHubUser login='eveporcello'/>
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );

// useEffect with multiple logs
// function App() {
//   const [val, setVal] = useState('');
//   const [val2, setVal2] = useState('');

//   useEffect(() => {
//     console.log(`field 1: ${val}`)
//   }, [val]);
  
//   useEffect(() => {
//     console.log(`field 2: ${val2}`)
//   }, [val2]);

//   return (
//     <>
//     <label>
//       Favorite Phrase: 
//       <input  value={val} onChange={e => setVal(e.target.value)} />
//     </label>
//     <br />
//     <label>
//       Second Favorite Phrase: 
//       <input value={val2} onChange={e => setVal2(e.target.value)} />
//     </label>
//     </>
//   )
// }

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );


//useEffect functionality
// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     alert(`checked: ${checked.toString()}`);
//   })
//   return (
//     <>
//     <input type='checkbox' value={checked} onChange={() => setChecked(checked => !checked)}/>
//     {checked ? 'checked' : 'not checked'}
//     </>
//   )
// }

// ReactDOM.render(
//   <Checkbox />,
//   document.querySelector('#root')
// );

// useState functionality
// function App() {
//   const [year, setYear] = useState(2050)
//   const [manager, setManager] = useState('Alex')
//   const [status, setStatus] = useState('Open');
//   return (
//     <>
//     <div>
//       <h1>{year}</h1>
//       <button onClick={() => setYear(year + 1)}>New Year</button>
//     </div>
//     <div>
//       <h1>Manager on Duty: {manager}</h1>
//       <button onClick={() => setManager('Alex')}>Original Manager</button>
//       <button onClick={() => setManager('Rachel')}>New Manager</button>
//     </div>
//     <div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus('Open')}>Open</button>
//       <button onClick={() => setStatus('Closed')}>Closed</button>
//       <button onClick={() => setStatus('Break')}>Break</button>
//     </div>
//     </>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
