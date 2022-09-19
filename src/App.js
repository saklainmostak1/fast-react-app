import logo from './logo.svg';
import './App.css';
const number = 55555;
const singer = {name: 'Mahfuz', job: 'singer'}
const singer2 = {name: 'Eva Rahman', job: 'Singer2'}

const singerStyle = {
  color: 'red',
  backgroundColor: 'white'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person(){
  return (
    <div >
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Crickter</p>
    </div> 
  )
}

export default App;
