import React, { Component } from 'react';
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from 'react-redux';

class Recommend extends Component {
    render() {
        const {list }= this.props;
        return (
            <div>
                <RecommendWrapper>
                    {
                        list.map((item) =>{
                            return(
                                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                            )
                        })
                    }
                    

                    {/* <RecommendItem imgUrl="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png">
                    </RecommendItem> */}
                </RecommendWrapper>
            </div>
        );
    }
}
const mapState = (state)=>({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);