import { Link } from "react-router-dom";
import React from "react";
import ShowData from "./showData";
  
const PropertyList = (props) => {

  const {property,ondelete}=props;



  return (
    <div className="list">
        {property.map((propertyObject,index) => {
        
            return (
                <ShowData propertyobject={propertyObject}
                ondelete={ondelete}
                key={index}
                />
            )
        })}
       <Link to="/add"><h1>Add property Details</h1></Link>
    </div>
    );
};
  
export default PropertyList;