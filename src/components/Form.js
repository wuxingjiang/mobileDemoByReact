import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Form';
    }
    render() {
        return (
        		<div>
        			<header>
        				<div>星级选择</div>
        				<p>请选择评价的内容</p>
        			</header>
        			<content>
        				<p>请选择标签</p>
        				<table>
        					<tr>
        						<td>人员很热心</td>
        						<td>耐心好</td>
        					</tr>
        					<tr>
        						<td>时间响应快</td>
        						<td>认真负责</td>
        					</tr>
        				</table>
        				<textarea>其他内容建议</textarea>
        			</content>
        			<footer>
        				提交评论
        			</footer>
        		</div>
        	);
    }
}

Form.defaultProps = {

};

export default Form;
