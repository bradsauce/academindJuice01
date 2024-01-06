import reactImage from '.././assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(maxValue){
  return Math.floor(Math.random() * (maxValue + 1));
}

export default function MyHeader(){
    const myDescription = reactDescriptions[genRandomInt(2)];
    
    return (
    <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {myDescription} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    );
  }