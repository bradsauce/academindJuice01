
{/* Could pass props and use props.title, props.image, props.description */}
{/* With destructuring we can just pass {image, title, description} */}
{/* These passed values must match the call below in the code or it won't work */}

export default function CoreConcept({image, title, description}){
    return (
      <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }