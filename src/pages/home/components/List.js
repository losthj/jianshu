import React, { PureComponent } from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index';
import {Link} from 'react-router-dom';

class List extends PureComponent {
    render() {
        const {list,getMoreList,page} = this.props;
        return (
            <div>
                {
                    list.map((item,index) => {
                        return(
                            // /第一种获取参数的方式
                         <Link key={index} to={'/detail/'+item.get('id')}>
                        {/* //第二种获取参数的方式
                        //<Link key={index} to={'/detail?id='+item.get('id')}>  */}
                            <ListItem >
                                <img className="pic" src={item.get('imgUrl')} alt=""/>
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
                
            </div>
            
        );
    }
}

const mapState =(state) =>({
    //list:state.get('home').get('articleList')
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articePage'])
})

const mapDispath = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispath)(List);