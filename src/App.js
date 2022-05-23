import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home component
import Home from "./components/Home";
// import About component
import Add from "./components/Add";
// import ContactUs component
import PropertyList from "./components/PropertyList";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      propertydetails: [
        {
          name: "Bill gates",
          description: "very good property",
          size: 1022,
        },
        {
          name: "Zeff Bezos",
          description: "Best property",
          size: 2000,
        },
      ],
    };
  }
  addproperty=(property)=>{
    this.state.propertydetails.push(property);
    


  }
  handleDelete = (property) => {
    const { propertydetails } = this.state;
    const items = propertydetails.filter((item) => item !== property);
    this.setState({
      propertydetails: items,
    });
  };

  
  render() {
    return (
      <div className="App">
        {<h1 className="App">Hello </h1>}


        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add/" element={<Add propertydetails={this.state.propertydetails} onAddingProperty={this.addproperty}/>} />
            <Route path="/listofproperty" element={<PropertyList property={this.state.propertydetails} ondelete={this.handleDelete} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
