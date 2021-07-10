
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Eventbind from './components/Eventbind';
import Parentcomp from './components/Parentcomp';
import UserGreeting from './components/UserGreeting';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroname="Batmen"><p>This is child paragraph</p></Greet>
      <Greet name="Clark" heroname="supermen">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroname="wonderwomen"></Greet>
      <welcome name="Bruce" heroname="Batmen"></welcome>
      <Welcome name="Clark" heroname="supermen"></Welcome>
      <Welcome  name="Diana" heroname="wonderwomen"></Welcome>
      <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <Eventbind/> */}
      {/* <Parentcomp/> */}
      {/* < UserGreeting/> */}
      <Form/>
    </div>
   
  );
}

export default App;
