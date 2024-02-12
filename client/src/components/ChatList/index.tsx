import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../services/api';
import { actions } from '../../services/reduxStore';
import { checkActivityTime } from '../../utils';
import './index.css'

const ChatList = () => {
  const dispatch = useDispatch()
  const cUser = useSelector((state: any) => state.root.user)
  const favorites = useSelector((state: any) => state.root.favorites)
  
  const saveData = (data: any) => {
    dispatch(actions.getFavorites(data))
    dispatch(actions.setRecipient(data[0].id))
  }
  
  const switchChat = (id: number) => {
    dispatch(actions.setRecipient(id))
  }

  useEffect(() => {
    api.getFavorites(cUser.id, saveData)
  }, [])

  return (
    <div id="plist" className="people-list">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fa fa-search"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <ul className="list-unstyled chat-list mt-2 mb-0">
        {favorites.map((user: any, index: number) => {
          const days = (checkActivityTime(user.timeStamp) / 24).toFixed()
          const isOnline = +days <= 184

          return (
            <li key={index} className={`clearfix ${isOnline && 'active'}`}
            onClick={() => switchChat(user.id)}>
              
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
              <div className="about">
                <div className="name">{user.surName} {user.name}</div>
                <div className="status"> <i className={`fa fa-circle ${isOnline ? 'online' : 'offline'}`}></i>
                {isOnline ? 'online' : `left ${days} days ago` } </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ChatList