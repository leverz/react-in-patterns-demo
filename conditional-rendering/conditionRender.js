/**
 * Created by Lever on 16/9/6.
 */
// 条件成立时渲染
{condition && <span>Rendering</span> }
// 条件不成立时渲染
{condition || <span>Rendering</span>}
// 条件成立与不成立时渲染内容不同
{condition ? <span>Rendering</span> : <span>Another Rendering</span>}

/**
 *在JSX中，我们没办法直接使用if、else进行判断，这样的表达式是最直接的方式。
 * 但如果同时存在的条件判断过于复杂，不如放弃表达式而使用function更好些。
 **/