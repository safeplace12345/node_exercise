import { useSelector } from "react-redux";
import { checkActivityTime } from "../../utils"

const User = () => {
    const cUser = useSelector((state: any) => state.root.user)
    const lastActive = checkActivityTime(cUser.updatedAt)

    return (
        <div className="col-lg-6">
            <a href="/" data-toggle="modal" data-target="#view_info">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
            </a>
            <div className="chat-about">
                <h6 className="m-b-0">{`${cUser.surName} ${cUser.name}`}</h6>
                <small>Last seen: {lastActive} hours ago</small>
            </div>
        </div>
    );
}

export default User;