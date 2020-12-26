import React from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <div className="app__MenuBar">
          <span>Menu</span>
          <div className="app__Menus">
            <span>르네상스</span>
            <span>바로크</span>
            <span>ㅇㅏ잉</span>
            <span>테스트중~~</span>
          </div>
        </div>
        <div className="app__Desc">
          <h1>클래식 음악의 역사 정보 사이트</h1>
        </div>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
