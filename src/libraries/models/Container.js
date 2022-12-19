import React, { useContext } from 'react';
import { AppContext } from 'app';

const Container = ({component: Component, stateProps, actionProps, props}) => {
    const Context = useContext(AppContext);

    const sprops = Object.entries(stateProps).reduce(
      (props, [propName, selector]) =>({
        ...props,
        [propName]: selector(Context),
      })
      ,
      {}
    );
   
    const aprops = Object.entries(actionProps).reduce(
      (props, [propName, dispatch]) => ({
        ...props,
        [propName]: Context[propName],
      })
      ,
      {}
    );

    return <Component {...aprops} {...sprops} {...props} />;
  };

export default Container;