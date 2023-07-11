import {ErrorLiItemProps} from '../../types/loginGroupTypes'


export default function ErrorListItem(errorLiItemProps: ErrorLiItemProps): JSX.Element  {

    return <li style={{color: errorLiItemProps['isError'] ? 'red' : 'green'}}>{errorLiItemProps['text']}</li>
}