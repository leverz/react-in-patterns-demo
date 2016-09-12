/**
 * Created by Lever on 16/9/6.
 */
// 介绍JSX中如何利用ES6/ES7 方便的传递 属性
// 用MATRIX项目的Dialog组件举例

// 首先你要理解下面的两种写法是等价的
// 关于ES6的解构赋值,可以下去详细了解,这里先举个简单的例子
//eg:
// const array = [0, 1, 2, 3];
// [first,second, ...third] = array; first === 0 //true console.log(third) //[2,3]
// ES7中,对象也具有了类似的能力
// props written as attributes
const Model1 = <Dialog title="模态框" isShow={true}>{children}</Dialog>
// props "spread" from object
const Model2 = <Dialog {...{title: "模态框", isShow: true, children}} />

// 将props向下层组件传递.以下的两种方式,只是换个顺序,结果却有可能不同.
// 方式1：
const SomeModel = props => <Dialog className="dialog" {...props}/>
// 方式2：
const SomeModel = props => <Dialog {...props} className="dialog" />
