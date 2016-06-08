require('!style!css!sass!styles/imgReader.scss');

import React from 'react';

class ImgReader extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ImgReader';
    }
    render() {
        let imgSrc = this.props.domInfo.pic;
        if(!imgSrc) {
            imgSrc = require('../images/yeoman.png');
        }
        return (
            <div className="imgReader">
                <img className="imgReader_pic" src= {imgSrc} alt=""/>
                <p className="imgReader_text">{this.props.domInfo.desc}</p>
            </div>
        );
    }
}

ImgReader.defaultProps = {
    domInfo: {
        pic: '',
        desc:'确认客户已安装物流QQ最新版本，并使用物流QQ扫描二维码进行本次服务的评价确认'
    }
};

export default ImgReader;
