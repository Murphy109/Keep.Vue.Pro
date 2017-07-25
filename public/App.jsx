import React from "react";
import {BrowserRouter as Router , Route, Link} from "react-router-dom";
import DingMainPage from "./pages/DingMainPage.jsx";
import DingPage from "./pages/DingPage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MinePage from "./pages/MinePage.jsx";
import "./static/js/jquery-1.8.3.min.js";



export default class App extends React.Component {

    constructor() {
        super();
    }

    componentDidMount(){

    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/msg" component={DingMainPage} />
                    <Route exact path="/ding" component={DingPage} />
                    <Route exact path="/work" component={WorkPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/mine" component={MinePage} />
                    <footer>
                        <div className="nav margin">
                            <div className="msg"><Link to="/msg"><img src="public/static/img/pic6.png" alt="" /><p>消息</p></Link></div>
                            <div className="ding"><Link to="/ding"><img src="public/static/img/pic7.png" alt="" /><p>DING</p></Link></div>
                            <div className="work"><Link to="/work"><img src="public/static/img/pic8.png" alt="" /><p>工作</p></Link></div>
                            <div className="contact"><Link to="/contact"><img src="public/static/img/pic9.png" alt="" /><p>联系人</p></Link></div>
                            <div className="mine"><Link to="/mine"><img src="public/static/img/pic10.png" alt="" /><p>我的</p></Link></div>
                        </div>
                    </footer>
                </div>
            </Router>
        )
    }


}