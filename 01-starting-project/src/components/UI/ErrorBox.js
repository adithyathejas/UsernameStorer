import Card from "./Card";
import "./ErrorBox.css";

const ErrorBox = (props) => {
  return (
    <div>
    <div className="backdrop" onClick={props.onClick}>

    </div>
    <Card className={'modal'}>
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button onClick={props.onClick}>okey</button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorBox;
