import React from 'react';

class EmployeeInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'EmployeeInfoCard';
    }
    render() {
    	let imgSrc = this.props.baseInfo.pic;
    	if(!imgSrc) {
    		imgSrc = require('../images/yeoman.png');
    	}
        return (
        		<div className="employess">
        			<img className = 'employess_pic' src = {imgSrc}/>
        			<div className = 'employess_info'>
        				<p className="employess_info_name"> {this.props.baseInfo.name}</p>
						<div className="employess_info_content">
							<p> 服务单号：{this.props.baseInfo.orderNo}</p>
							<p> 服务类型：{this.props.baseInfo.desc}</p>
							<p> 服务时间：{this.props.baseInfo.time}</p>
						</div>
        			</div>
        		</div>
        	);
    }
}

EmployeeInfoCard.defaultProps = {
	baseInfo: {
		pic: '',
		tel: '18161264800',
		name: '张三',
		desc:'客户回访/担保交易推广/保险推广',
		time:'2016-12-31 12:33',
		orderNo: 645645678
	}
};

export default EmployeeInfoCard;
