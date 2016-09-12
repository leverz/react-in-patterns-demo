/**
 * Created by Lever on 16/9/6.
 */
const React = require("react");
const Component = React.Component;
const Header = require("header.js");

let scrollEvent;
class scrollLeft extends Component {
    constructor() {
        super();
        this.state = {
            left: 0
        }
    }
    componentDidMount(){
        scrollEvent = () => {
            this.setState({
                left: document.body.scrollLeft
            })
        };
        this.setState({
            left: document.body.scrollLeft
        }, document.addEventListener("scroll", scrollEvent))
    }
    componentWillUnMount(){
        document.removeEventListener("scroll", scrollEvent);
    }
    render(){
        return this.props.children(this.state.left)
    }
}

// 使用

const HeaderContainer = <scrollLeft>{left => <Header scrollLeft={left}></Header>}</scrollLeft>