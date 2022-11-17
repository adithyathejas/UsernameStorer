import Card from "./Card";
import "./ErrorBox.css";

const ErrorBox = (props) => {
  return (
    <div>
    <div className="backdrop">

    </div>
    <Card className={'modal'}>
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.mesage}</p>
      </div>
      <footer className="actions">
        <button>okey</button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorBox;
