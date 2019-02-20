import * as React from 'react'
import styled from 'styled-components'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { History } from 'history'

import { Button, IconMD } from '../../components'


interface IProps extends RouteComponentProps {
}


interface IState {}

class Auth extends React.Component<IProps, IState> {
    onClick = (path: string) => {
        this.props.history.push(path)
    }
    render () {
        return (
            <Wrapper>
                <div></div>

                <div>
                    <Button.Main onClick={() => this.onClick('/register')}>开始探索我的DNA</Button.Main>
                </div>
                

                <div>
                     <Button onClick={() => this.onClick('/login?type=phone')}>
                        <IconMD name="phone-portrait" />
                     </Button>

                     <Button onClick={() => this.onClick('/login?type=mail')}>
                        <IconMD name="mail" />
                     </Button>
                </div>
                
            </Wrapper>
        )
    }
}


const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export default withRouter(Auth)