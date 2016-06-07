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
        		<div>
        			<img className = 'employess_pic' src = {imgSrc}/>
        			<div className = 'employess_info'>
        				<p> {this.props.baseInfo.tel}</p>
        				<p> {this.props.baseInfo.name}</p>
        				<p> {this.props.baseInfo.desc}</p>
        				<p> {this.props.baseInfo.time}</p>
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
		desc:'客户回访/担保交易推广',
		time:'2016-12-31'
	}
}

export default EmployeeInfoCard;
