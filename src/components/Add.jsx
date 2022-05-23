import { Link} from "react-router-dom";
import React ,{useState} from "react";
  
const Add = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const data={
      name:name,
      description:description,
      size:parseInt(size),
    }
    props.onAddingProperty(data)
    

    alert("data added successfully")
  }

  return (
    <div>
      <div>
       <form onSubmit={handleSubmit}>
         <label htmlFor="name">Name</label>
         <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
         
         <br />

         <label htmlFor="description">Description</label>
         <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
         
         <br />

         <label htmlFor="size">Size</label>
         <input type="number" name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}/>
         
         <br />
        
         

         <input type="submit" />

       </form>
      </div>
      <Link to="/listofproperty"><h1>To see Added Data Click here</h1></Link>
      <Link to="/">Home</Link>

    </div>
  );
};
  
export default Add;