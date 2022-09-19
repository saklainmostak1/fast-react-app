import logo from './logo.svg';
import './App.css';
const number = 55555;
const singers = [
  {name: 'Mahfuz', job: 'singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'Sopno'},
  {name: 'Shuvro Dev', job: 'Pathor'}
]

const singerStyle = {
  color: 'red',
  backgroundColor: 'white'
}
function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Mubel', 'Joshim', 'Salman Sha', 'Riyaz']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name:{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} naika="Mousumi"></Person>
      <Person name={nayoks[1]} naika="Cheka"></Person>
      <Person name={nayoks[2]} naika="kopila"></Person> */}
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
