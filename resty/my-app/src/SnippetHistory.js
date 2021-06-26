import "./Historysnip.scss";
import React from "react";


class SnippetHistory extends React.Component {


  getDate(history) {
    if (!history) {
      return null;
    }
    
    return history.map((element, ind) => {
    return (
          <div  className="hisSnip" key={ind}>
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
          </div>
    
      );
    });
  }

  render() {
    return <>{this.getDate(this.props.hist)}</>;
  }
}

export default SnippetHistory;