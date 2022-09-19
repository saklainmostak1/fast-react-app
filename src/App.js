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
      <Person name="Rubel" naika="Mousumi"></Person>
      <Person name="Mubel" naika="Cheka"></Person>
      <Person name="kuber" naika="kopila"></Person>
      <h5>New Component</h5>
      <p>Rock Mama React Mama</p>
      <Friend movie="singham" phone="01774412135"></Friend>
      <Friend phone="01915106077"></Friend>
    </div>
  );
}

function Person(props){
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Naika: {props.naika}</p>
    </div> 
  )
}
function  Friend(props){
  console.log(props)
  return (
    <div className='container'>
      <h3>Name: {props.movie} </h3>
      <p>Phone {props.phone} </p>
    </div>
  )
}

export default App;
