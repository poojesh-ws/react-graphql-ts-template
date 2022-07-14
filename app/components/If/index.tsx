// eslint-disable-next-line
import React from 'react';
import Proptypes from 'prop-types';

interface IfProps {
  condition?: boolean | number | string;
  otherwise?: React.ReactNode | boolean | number | string | {};
  children: React.ReactNode | boolean | number | string | {};
}

const If: React.FC<IfProps> = (props) => <>{props.condition ? props.children : props.otherwise}</>;

If.propTypes = {
  condition: Proptypes.oneOfType([Proptypes.bool, Proptypes.string, Proptypes.number]),
  otherwise: Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node]),
  children: Proptypes.oneOfType([Proptypes.arrayOf(Proptypes.node), Proptypes.node]).isRequired
};
If.defaultProps = {
  otherwise: null
};
export default If;
