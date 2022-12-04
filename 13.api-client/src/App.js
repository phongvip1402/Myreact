import './App.css';
import ListUser from './component/ListUser';
import LoadingAsynAwait from './component/LoadingAsynAwait';
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
    <br />
    <br />
    <LoadingAsynAwait/>
    </div>
  );
}

export default App;
