import React from "react";
import JSONPretty from "react-json-pretty";


class History extends React.Component {
  
  getDate(history) {
    if (!history) {
      return null;
    }
    return history.map((element, ind) => {
      return (
        <div  className="his" key={ind}>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.props.refill(element.Method, element.RESTurl);
            }}
          >
            {" "}
            Request Again !
          </button>
          <p> METHOD: {element.Method}</p>
          <p> URL: {element.RESTurl}</p>
         <JSONPretty className='data' data={element.data}></JSONPretty>

        </div>
      );
    });
  }

  render() {
    return (
      <>
        <div>{this.getDate(this.props.hist)}</div>
      </>
    );
  }
}


export default History;