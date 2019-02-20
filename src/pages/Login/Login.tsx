import * as React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { searchToObj } from '../../utils/utils'
import { Input, Button } from '../../components'
import { Link } from 'react-router-dom'
import queryString from 'query-string'


interface IProps extends RouteComponentProps {

}

interface IState {
    showMail: boolean
    showPhone: boolean
}



class Login extends React.Component<IProps, IState> {

    state: IState = {
        showMail: false,
        showPhone: false
    }

    componentDidMount() {
        this.checkPathname()
    }

    componentDidUpdate(prevProps: IProps) {
        if (this.props.location.search !== prevProps.location.search) {
            console.log('change')
            this.checkPathname();
        }
    }



    checkPathname() {
        let obj = queryString.parse(this.props.location.search)

        if (obj['type']) {
            this.setState({
                showMail: obj['type'] === 'mail',
                showPhone: obj['type'] === 'phone'
            })
        }
    }

    onSubmit = () => {

    }

    onAction = (type: string) => {

    }

    render() {
        let { showMail, showPhone } = this.state
        return (
            <Wrapper>
                <h1>欢迎回来， 请输入你的手机号进行验证码登录</h1>
                {
                    showPhone && (
                        <React.Fragment>
                            <Input name="phone" label="手机号" iconName="phone-portrait" actionHandler={() => this.onAction('phone')} action="发送验证码"></Input>
                            <Input name="verify" label="验证码" ></Input>
                            <Link to="/login">密码登录</Link>
                        </React.Fragment>
                    )
                }
                {
                    showMail && (
                        <React.Fragment>
                            <Input name="mail" label="邮箱" iconName="mail" actionHandler={() => this.onAction('email')} action="发送验证码"></Input>
                            <Input name="verify" label="验证码"></Input>
                            <Link to="/login">密码登录</Link>
                        </React.Fragment>
                    )
                }
                {
                    !showPhone  && !showMail && (
                        <React.Fragment>
                            <Input name="account" label="手机号，用户名，邮箱" ></Input>
                            <Input name="password" label="密码" ></Input>
                            <Link to="/reset-password">忘记密码</Link>
                            <Link to="/login?type=phone">手机验证码登录</Link>
                        </React.Fragment>
                    )
                }
                <Button.Main onClick={this.onSubmit}>提交</Button.Main>
            </Wrapper>

        )
    }
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8px;
`

export default withRouter(Login)