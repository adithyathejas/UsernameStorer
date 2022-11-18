import Card from "./Card";
import "./ErrorBox.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick} />;
};

const Modal = (props) => {
  return (
    <Card className={"modal"}>
      <header className="header">
        <h2>{props.title.toUpperCase()}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button onClick={props.onClick}>okey</button>
      </footer>
    </Card>
  );
};

const ErrorBox = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}/>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal title={props.title} message={props.message} onClick={props.onClick}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorBox;
