/**
 * Created by Lever on 16/9/12.
 */
const React = require("react");

const Component = React.Component;

class A extends Component {
    getChildContext(){
        return {
            isShow: "option2"
        }
        this.type;
    }
    render(){
        if (this.type === "option1") {
            // 好处: 不会因为children的类型而报错; 坏处: 会产生多余的标签.
            return <div>{children}</div>;
        } else if (this.type === "option2") {
            // 好处: 无多余的标签; 坏处: 当我们不知道children的类型时,react不会合适的处理问题,报出一些没用的错误信息
            return children;
        } else if (this.type === "best option") {
            return React.Children.only(this.props.children);
        }
    }
}