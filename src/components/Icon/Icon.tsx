import * as React from "react"
import styled from "styled-components"
import { IStyledComponentProps } from "../../interfaces/IStyledComponentProps"

/**
 * Icon component
 * @since v1.0
 * @author [Kaige Zhang](zhangkeger@gmail.com)
 */

const Icon = styled.i`
  color: ${({ theme, color }: IProps) => color || theme && theme.palette.common.black};
  font-size: ${({ size }: IProps) => size || 19}px;

  ${({ css }: IProps) => css && css}
`
interface IProps extends IStyledComponentProps {
    /** Color of icon */
  color?: string
  /** Event fired on click */
  onClick?: (e: any) => void
  /** Size of font in px */
  size?: number
}

export default Icon