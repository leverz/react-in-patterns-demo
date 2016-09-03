/**
 * Created by Lever on 16/6/6.
 *
 * placeholder-patch
 *
 * placeholder属性ie8/9补丁
 */
const React = require('react');
const Component = React.Component;

/**
 * content - placeholder显示内容
 * isUse - 是否使用该补丁(一般是在组件外部判断当前浏览器类型,确定是否使用该组件,也可以直接拿来使用)
 * isShow - 是否展示该组件(是父组件与该组件通信的桥梁,通过该参数对子组件的显示状态进行管理)
 * focus - 点击该组件后,通过该参数确定应该将焦点给哪个DOM元素(因此focus的值必须是DOM元素)
 */
class Placeholder extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShowPlaceholder: props.isShow
        };
        // console.log(this.props.isUse);
    }

    focusInput(){
        if(!!this.props.focus && _.isFunction(this.props.focus)){
            this.props.focus();
            return;
        }
        !!this.props.focus && this.props.focus.focus();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isShow !== this.props.isShow){
            this.setState({
                isShowPlaceholder: nextProps.isShow
            })
        }
    }

    render(){
        return this.props.isUse ? (
            <div className={'placeholder' + (this.state.isShowPlaceholder ? ' show' : ' hide')} onClick={this.focusInput.bind(this)}>
                <span>{this.props.content}</span>
            </div>
        ) : (<span></span>);
    }
}

module.exports = Placeholder;