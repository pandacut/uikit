import React, { PropTypes } from 'react';
import radium from 'radium';


const Panel = ({
  children,
  style,
  ...other
}, { theme }) => {
  const { palette } = theme;
  const styles = {
    root: {
      color: palette.textColor,
      border: `1px solid ${palette.borderColor}`,
      backgroundColor: palette.backgroundColor
    }
  };

  const inlineStyle = [styles.root];

  if (style) {
    inlineStyle.push(style);
  }

  return (
    <div {...other} style={inlineStyle}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

Panel.contextTypes = {
  theme: PropTypes.object
};

export default radium(Panel);
