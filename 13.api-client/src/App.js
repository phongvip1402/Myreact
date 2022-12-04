import './App.css';
import ListUser from './component/ListUser';
import LoadingByAxios from './component/LoadingByAxios';
import RouterEdit from './page/RouterEdit';



function App() {
  return (
    <div>
    <ListUser/>
    <br />
    <br />
    <RouterEdit/>
    <br />
    <br />
    <LoadingByAxios/>
    </div>
  );
}

export default App;
