import { ThemeProvider} from 'styled-components'
import React, { Fragment } from 'react'
import Reset from './reset'
import merge from 'lodash.merge'


// 定义主题的基础配置文件


/* 颜色主题 */
interface IPalette {
    common: {
        black: string
        white: string
        yellow: string
        purple: string
        red: string
        green: string
        grey: string
    },
    primary: {
        dark: string
        light: string
        main: string
    },
    secondary: {
        dark: string
        light: string
        main: string
    },
    tertiary: {},
    grey: {},
    text: {
        // 文本主要颜色， 标题，文本
        primary: string

        // 次级文本颜色，引用等
        secondary: string
        tertiary: string
        disabled: string
    },

    // 分割线
    divider: string
}


export const palette: IPalette = {
    common: {
        black: '#000',
        white: '#fff',
        yellow: '#fcc80e',
        purple: '#625ee5',
        red: '#ff78a2',
        green: '#00b89e',
        grey: '#dedede'
    },
    primary: {
        dark: '#007BFF',
        light: '#47A7FF',
        main: '#0086ff'
    },
    secondary: {
        dark: '#FF5C00',
        light: '#FF8B3E',
        main: '#ff6600'
    },
    tertiary: {},
    grey: {},
    text: {
        primary: '#555',
        secondary: '#777',
        tertiary: '#999',
        disabled: '#bdbdbd',
    },
    divider: '#eee'
}



// 主题配置文件
export interface ITheme {
    palette: IPalette,
    shadows: string[],
    // 基础间距，文字与文字之间
    spacing: {
        base: number,
    },
    // 圆角
    shape: {
        borderRadius: string
    },
    // 动画的速度
    transition: {
        duration: {
            shortest: number
            shorter: number
            short: number
            standard: number
        }
    }
}


export const theme: ITheme = {
    palette,
    shadows: [],
    shape: {
        borderRadius: '8px'
    },
    spacing: {
        base: 8
    },
    transition: {
        duration: {
            short: 250,
            shorter: 200,
            shortest: 150,
            standard: 300
        }
    }
}


interface IProviderProps {
    theme?: any
    children: JSX.Element[] | JSX.Element
}


/**
 * Theme Wrapper
 * Adds global css reset and themes all components
 */
const Themer = (props: IProviderProps) => {
    return (
      // lodash merge theme
      <ThemeProvider theme={merge(theme, props.theme)}>
        <Fragment>
          <Reset />
          {props.children}
        </Fragment>
      </ThemeProvider>
    )
  }
  
  export default Themer