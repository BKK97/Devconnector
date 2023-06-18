import React from 'react';
import {Route, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, auth: {isAuthenticated, loading}, ...rest}) => {
    const navigate = useNavigate();
    
    if(!isAuthenticated && !loading){
        navigate('/login');
        return null;
    }

    return <Route {...rest} element={<Component/>} />;
}
// (
//     <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login'/>) : (<Component {...props} />) } />
// );

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute)
