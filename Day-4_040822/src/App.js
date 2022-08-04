import './App.css';
// import Greeting from './greeting';
// import { Contact} from './components'
// import About from './components';
import './style.css'
import styles from './style.module.css'
import axios from 'axios';

function App() {
  const getData = () => {
    axios.get('https://dummyjson.com/products')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  getData()
  
  const data = [
    {
      id: 1,
      name: 'item 1',
      type: 'string',
      url: 'www.google.com'
    },
    {
      id: 2,
      name: 'item 2',
      type: 'string',
      url: 'www.google.com'
    },
    {
      id: 3,
      name: 'item 3',
      type: 'string',
      url: 'www.google.com'
    },
    {
      id: 4,
      name: 'item 4',
      type: 'string',
      url: 'www.google.com'
    }
  ]

  return (
    <div className="App">
      {/* <Greeting firstName="John" lastName="Tiwari"/>
      <Contact />
      <About /> */}
      {/* <h1 className='header'>Hello, This is the App Component!!</h1>
      <h1 className={styles.header}>Hello, This is the App Component - 2!!</h1> */}
      <ol>
        {
          data.map(item => <li>{item.name}</li>)
        }
      </ol>
    </div>
  );
}

export default App;