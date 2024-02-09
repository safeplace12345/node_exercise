import './index.css'

const SendButton = () => {
  return (
    <div className="chat-message clearfix">
      <div className="input-group mb-0">
        <input
          type="text"
          className="form-control new_message"
          placeholder="Enter text here..."
        />
        <div className="input-group-prepend send_btn">
          <span className="input-group-text">
            <i className="fa fa-send"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SendButton