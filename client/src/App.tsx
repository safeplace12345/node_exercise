import { useDispatch, useSelector } from 'react-redux';
import SendButton from './components/SendButton';
import ChatList from './components/ChatList';
import ChatHistory from './components/ChatHistory';
import User from './components/User';
import { api } from './services/api';
import { actions } from './services/reduxStore';
import './App.css';

function App() {
  //Handle Offline errors
  const dispatch = useDispatch()
  const cUser = useSelector((state: any) => state.root.user)

  const saveData = async (opt: any) => {
    if (!opt.target?.value) return;
    
    return await api.getCurrentUser(opt.target?.value, (data: any) => {
      dispatch(actions.setCurrentUser(data))
    })
  }

  return (
    <div className="App">
      <div className="container">
        {cUser?.id ?
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card chat-app">
                <ChatList />
                <div className="chat">
                  <div className="chat-header clearfix">
                    <div className="row">
                      <User />
                      <div className="col-lg-6 hidden-sm text-right links">
                        <a href="/" className="btn btn-outline-secondary"><i className="fa fa-camera"></i></a>
                        <a href="/" className="btn btn-outline-primary"><i className="fa fa-image"></i></a>
                        <a href="/" className="btn btn-outline-info"><i className="fa fa-cogs"></i></a>
                        <a href="/" className="btn btn-outline-warning"><i className="fa fa-question"></i></a>
                      </div>
                    </div>
                  </div>
                  <ChatHistory />
                  <SendButton />
                </div>
              </div>
            </div>
          </div> :
          <select defaultValue={1} onChange={opt => saveData(opt)} className="form-select" aria-label="Default select example">
            <option >Choose User</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(user => (<option key={user} value={user}>{user}</option>))}
          </select>}
      </div>
    </div>
  );
}

export default App;
