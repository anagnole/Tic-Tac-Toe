import React, { useContext } from 'react';
import { AppContext } from 'app';

const connect = (stateProps, actionProps) => Component => props => {
    const { state, dispatch } = useContext(AppContext);

    const sProps = Object.entries(stateProps).reduce(
      (props, [propName, selector]) => ({
        ...props,
        [propName]: selector(state),
      }),
      {},
    );
   
    const aProps = Object.entries(actionProps).reduce(
      (props, [propName, actionCreator]) => ({
        ...props,
        [propName]: payload => dispatch(actionCreator(payload)),
      }),
      {},
    );

    return <Component {...aProps} {...sProps} {...props} />;
  };

export default connect;