import React from 'react';
import Loader from '../common/Loader';
import Error from '../common/Error';

const WithLoadAndErrorHandler = (props) => <>{props.state.error ? <Error message={props.state.error.message}/> : props.state.isLoading ? <Loader /> : props.children}</>;

export default WithLoadAndErrorHandler;
