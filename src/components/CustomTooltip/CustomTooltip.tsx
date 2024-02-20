import { Tooltip, TooltipProps } from 'antd'

import styles from './CustomTool.module.scss'

type IProps = TooltipProps & {
  rootClassName?: string
}

function CustomTooltip(props: IProps) {
  return <Tooltip {...props} rootClassName={`${styles.udTooltip} ${props.rootClassName}`} />
}

export default CustomTooltip
