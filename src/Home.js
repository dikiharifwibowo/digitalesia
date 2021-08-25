import React from "react";
import Header from "./Header";
import List from "./List";
import Detail from "./Detail";

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        home: true,
        detail : false, 
      };
      this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback(name) {
      switch (name) {
        case "home":
          this.setState({ home: true, detail: false });
          break;
        case "detail":
          this.setState({ home: false, detail: true });
          break;
      }
      console.log(this.state.home, this.state.detail)
    }
    render() {
      return (
          <div>
              <Header/>
              {this.state.home && (
                <List parentCallback = {this.handleCallback}/>
              )}
              {this.state.detail && (
                <Detail/>
              )}
              
          </div>
      )
    }
  }