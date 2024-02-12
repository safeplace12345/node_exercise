import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import SendButton from './components/SendButton';
import ChatList from './components/ChatList';
import ChatHistory from './components/ChatHistory';
import User from './components/User';
import { api } from './services/api';
import { actions } from './services/reduxStore';
import './App.css';

function App() {
  //Handle Offline errors
  const [id, setId] = useState(0)
  const [uiMessage, setUiMessage] = useState("")
  const dispatch = useDispatch()
  const cUser = useSelector((state: any) => state.root.user)

  const saveData = async (e: any) => {
    e.preventDefault()
    if (!id) return;

    return await api.getCurrentUser(id, (data: any) => {
      dispatch(actions.setCurrentUser(data))
    })
  }

  const seedDatabase = async (e: any) => {
    e.preventDefault()
    const data = await api.seedDatabase()
    if (data.message === "success") {
      return setUiMessage("Success!!")
    }
    return setUiMessage("Failed!!")
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
          <form>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" onClick={seedDatabase}>Seed Database</button>
              {uiMessage && <span className={`badge badge-pill badge-${uiMessage === "Success!!" ? 'success' : 'danger'}`}>{uiMessage}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User ID</label>
              <input type="id"
                onChange={(val) => (setId(+val.target.value))} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User ID (1,2,3,4,5,6,7,8,9,10)" />
              <small id="idHelp" className="form-text text-muted">We'll never share your id with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary" onClick={saveData}>Submit</button>
          </form>
        }
      </div>
    </div>
  );
}

export default App;
