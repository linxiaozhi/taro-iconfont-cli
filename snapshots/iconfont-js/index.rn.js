/* eslint-disable */

import Taro from '@tarojs/taro';
import Icon from './rn/RNIcon';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
