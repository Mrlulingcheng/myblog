import React from 'react'
import {
    connect
} from 'react-redux'
import {
    setVisibilityFilter
} from '../actions/index'
// import Link from '@/components/Link'
import {
    Link,
    useRouteMatch
} from 'react-router-dom';


const FilterLink = ({filter,children}) => {
    let {path,url} = useRouteMatch()
    return (
        <Link to = {filter === 'all' ? '/user?filter=all' : `/user?filter=` + filter}
        activestyle = {{textDecoration: 'none',color: 'black'}} 
        > 
        {children}
        </Link>
    )
}

export default FilterLink
// const mapStateToProps = (state, ownProps) => {
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onClick: () => {
//             dispatch(setVisibilityFilter(ownProps.filter))
//         }
//     }
// }

// const FilterLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Link)

// export default FilterLink