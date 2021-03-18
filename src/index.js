import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from "./components/footer";
import Header from "./components/header";
import "./bulma.min.css";
import Section1 from "./components/section1";

// class Index extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header/>
//                 <Section1/>
//                 <Footer/>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Index/>, document.querySelector('#root'));

ReactDOM.render(
    <div>
      <Header/>
      <Section1/>
      <Footer/>
    </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, p
