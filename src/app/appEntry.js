import './globalCSS/App.css';
import { Route, Routes } from 'react-router-dom';
import {PostsContainer} from '../pages/index';
import { StandAlonePost } from '../pages/index';



function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<PostsContainer />} />
          <Route path='/post/:id' element={<StandAlonePost />} />
        </Routes>
    </div>
  );
}

export default App;
