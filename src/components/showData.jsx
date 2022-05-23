import React from "react";

const ShowData = (props) => {
  const {name,description,size}=props.propertyobject
  const {ondelete}=props;
  return (
    <div className="list-item">
      <div className="left-block">
        <img style={styles.image} src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>Name: {name}</div>
        <div style={{ color: "#777" }}>Description: {description}</div>
        <div style={{ color: "#777" }}>Size: {size}</div>
        <div className="list-item-actions">
          {/* Buttons */}
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1652562128~hmac=cd2d1f555a851affb7c93f602d6a7e6a"
           
            onClick={() => { ondelete(props.propertyobject) }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default ShowData;
