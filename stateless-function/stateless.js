/**
 * Created by Lever on 16/09/04
 */

/**
 * 需要灌入placeholder的数据
 * content - placeholder显示内容
 * isUse - 是否使用该补丁(一般是在组件外部判断当前浏览器类型,确定是否使用该组件,也可以直接拿来使用)
 * isShow - 是否展示该组件(是父组件与该组件通信的桥梁,通过该参数对子组件的显示状态进行管理)
 * focus - 点击该组件后,通过该参数确定应该将焦点给哪个DOM元素(因此focus的值必须是DOM元素)
 */
// stateless function
// 与state Component相比，去除了很多不必要的state及函数处理。
// 由此也可以看出，使用stateless function 可以促使我们思考组件的state和props
// 而且这里是一个纯粹的function，输出的结果仅与我们的输入有关，相同的输入一定会得到相同的输出
const Placeholder = (props) => {
	const {content, isUse, isShow, focus} = props;
	return isUse ? 
		<div className={`placeholder${(isShow ? ' show' : ' hide')}`} onClick={focus}>
            <span>{content}</span>
        </div> : null;
}

// 对stateless function => Placeholder组件的使用示例
// 
// 包含逻辑的高阶组件，可以输入一个input组件，这里只是简单地写了一些逻辑，其实在这个高级组件里可以添加一些对input组件的逻辑处理
const React = require('react');
const Component = React.Component;
const HigherOrderInput = (InputComponent) => {
	const blurEventHanler;
	return class HigherOrderInput extends Component {
			focus() {
				this.setState({
					inputFoucs: true
				});
			}
			conmpontentDidMount(){
				blurEventHanler = () => {
					this.setState({
						inputFoucs: false
					})
				};
				document.addEventListner("blur", blurEventHanler);
			}
			componentWillUnMount(){
				document.removeEventListener("blur", blurEventHanler);
			}
			render() {
				// this.props.Input中存放着所有与输入框组件相关的props
				// this.props.Placeholder中存放着所有与placeholder相关的props
				return (
					<div>
						<InputComponent {...this.props.Input} isFocus={this.state.inputFoucs}/>
                		<Placeholder {...this.props.Placeholder}></Placeholder>
					</div>
				)
			}
		}
}