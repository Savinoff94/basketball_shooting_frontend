import ErrorListItem from "../components/ErrorListItem/ErrorListItem";

export default {
    title: 'ErrorListItem',
    component: ErrorListItem
}

export const Mistake = () => <ErrorListItem {...{isError:true, text:'ads', key:'key'}}/>
export const NoMistake = () => <ErrorListItem {...{isError:false, text:'ads', key:'key'}}/>
