import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../../services/api';
import { actions } from '../../services/reduxStore';


const ChatHistory = () => {
    const dispatch = useDispatch()
    const queue = useSelector((state: any) => state.root.queue)
    const recipientId = useSelector((state: any) => state.root.recipient)
    const { id } = useSelector((state: any) => state.root.user)
    
    const saveData = (data: any) => {
        dispatch(actions.getQueue(data))
    }

    useEffect(() => {
        if(!recipientId) return

        api.getMessageQueue(id, recipientId, saveData)
    }, [recipientId])

    return (
        <div className="chat-history">
            <ul className="m-b-0">
                {queue.map((message: any, index: number) =>
                (
                    message.sender === id ?
                        <li key={index} className="clearfix">
                            <div className="message-data text-right">
                                <span className="message-data-time">{message.timeStamp} AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                            </div>
                            <div className="message other-message float-right">{message.content} </div>
                        </li>
                        :
                        <li className="clearfix" key={index}>
                            <div className="message-data text-left">
                                <span className="message-data-time">{message.timeStamp} AM, Today</span>
                            </div>
                            <div className="message my-message">{message.content}</div>
                        </li>)
                )}
            </ul>
        </div>);
}

export default ChatHistory;