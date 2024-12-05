import './GlobalStyles.scss'
import PropTypes from 'prop-types'

function GlobalStyles({children}) {
    return children;
}

GlobalStyles.propTypes = {
    data: PropTypes.node.isRequired,
}

export default GlobalStyles;