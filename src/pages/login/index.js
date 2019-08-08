import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {actionCreators} from './store/index';

class Login extends PureComponent {
    render() {
         const {loginState} = this.props;
         if(!loginState){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}} />
                        <Input placeholder='密码' type="password" ref={(input) =>{this.password = input}} />
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
         }else{
            return <Redirect to='/' />
         }
        
    }
 

}

const mapState = (state) => ({
    loginState:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) =>({
    login(accoutElem,passwordElem){
        console.log(accoutElem.value,passwordElem.value);
        dispatch(actionCreators.login(accoutElem.value,passwordElem.value))
        //console.log(passwordElem)
    }
})

export default connect(mapState,mapDispatch)(Login);