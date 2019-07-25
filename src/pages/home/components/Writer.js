import React, { Component } from 'react';
import {WriterWrapper,WriterTitle} from '../style';


class Writer extends Component {
    render() {
        return (
            <div>
                <WriterWrapper>
                    <WriterTitle>
                        推荐作者
                    </WriterTitle>

                </WriterWrapper>
            </div>
        );
    }
}

export default Writer;