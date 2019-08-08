import styled from 'styled-components';

export const LoginWrapper =styled.div`
    position:absolute;
    left:0px;
    top:56px;
    right:0;
    bottom:0;
    background:#eee;
    z-index:0;
`

export const LoginBox = styled.div`
    width:400px;
    height:180px;
    margin:80px auto;
    padding-top:20px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    margin:10px auto;
    padding:0 10px;
    color:#777;
`

export const Button = styled.div`
    width:220px;
    height:30px;
    line-height:30px;
    background:#3194d0;
    margin:20px auto 0;
    text-align:center;
    color:#fff;
    border-radius:20px;
    cursor: pointer;
`