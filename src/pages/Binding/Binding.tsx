import * as React from "react"
import styled from "styled-components"
import { Flex, Box } from '@rebass/grid'
import { Button, Input } from '../../components'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import queryString from 'query-string'
/**
 * Bingding component
 * @since v1.0
 * @author [Kaige Zhang](zhangkeger@gmail.com)
 */

class Bingding extends React.Component<IProps, IState> {
    state = {
        step: 0
    }

    componentDidMount () {
        this.setStep()
    }

    setStep() {
        let obj = queryString.parse(this.props.location.search)
        
        if (obj['step']) {
            let step = obj['step']

            if (step && !Array.isArray(step)) {
                // 为异步更新
                this.setState({
                    step: +step
                })
            }
        }
    }

    onClick = (next: number) => {
        this.setState({
            step: next
        }, () => {
            this.props.history.push(`/binding?step=${this.state.step}`)
        })
        
    }

    componentDidUpdate () {
        this.setStep()
    }

    shouldComponentUpdate (prevProps: IProps, prevState: IState) {
        return this.props.location.search !== prevProps.location.search || this.state.step !== prevState.step
    }


    redirectToRegister = () => {
        this.props.history.push('/register?from=binding')
    }


    renderTitle = () => {
        let steps = [
            '你正在绑定的样本是？',
            '你上次登陆的手机是',
            '检测到该账号已有基因数据',
            '选择你们的关系',
            '请核对你的订单编号',
            '知情同意书',
            '签署知情同意书',
            '绑定提示',
        ]

        return steps[this.state.step]
    }

    // 以后的每个场景都有独立的文件
    renderContent = () => {
        switch (this.state.step) {
            case 0:
                return (
                    <React.Fragment>
                        <Button.Main onClick={() => this.onClick(1)}>我自己的唾液样本</Button.Main>
                        <Button.Main onClick={this.redirectToRegister}>他人的唾液样本</Button.Main>
                    </React.Fragment>
                )
            case 1:
                return (
                    <React.Fragment>
                        <Button.Main onClick={() => this.onClick(2)}>用已有账号绑定</Button.Main>
                        <Button.Main onClick={this.redirectToRegister}>换个账号绑定</Button.Main>
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                        <Button.Main onClick={() => this.onClick(4)}>确认是我本人</Button.Main>
                        <Button.Main onClick={() => this.onClick(1)}>返回上一步</Button.Main>
                    </React.Fragment>
                )
            case 3:
                return (
                    <Button.Main onClick={() => this.onClick(4)}>下一步</Button.Main>
                )
            case 4:
                return (
                    <React.Fragment>
                        <Button.Main onClick={() => this.onClick(5)}>一致</Button.Main>
                        <Button.Main>不一致，联系小助手</Button.Main>
                    </React.Fragment>
                )
            case 5:
                return (
                    <Button.Main onClick={() => this.onClick(6)}>开始阅读知情同意书</Button.Main>
                )
            case 6:
                return (
                    <Button.Main onClick={() => this.onClick(7)}>我已签署知情同意书</Button.Main>
                )
            case 7:
                return (
                    <Button.Main onClick={() => this.onClick(6)}>我已了解</Button.Main>
                )
        }
    }


    render() {
        return (
            <Wrapper>
                <Box mb={4}>
                {
                    this.renderTitle()
                }
                </Box>
                <Box p={4}>
                    {
                        this.renderContent()
                    }
                </Box>
            </Wrapper>
        )
    }
}

interface IProps extends RouteComponentProps {
}

interface IState {
    step: number
}


const Wrapper = styled(Flex).attrs({
    justifiContent: 'center',
    flexDirection: 'column'
})`
    padding: 8px;
`

export default Bingding