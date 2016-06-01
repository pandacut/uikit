import React, { PropTypes } from 'react';
import radium from 'radium';


const getStyles = ({ palette, spacing }) => ({
  root: {
    appearance: 'none',
    boxSizing: 'border-box',
    width: '100%',
    color: palette.textColor,
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.borderColor,
    ':focus': {
      boxShadow: `0 0 0 1px ${palette.primaryColor}`,
      borderColor: palette.primaryColor,
    },
    borderRadius: spacing.borderRadius,
    padding: spacing.formPadding,
    marginBottom: 15
  }
});

const Textarea = (props, { theme }) => {
  const styles = getStyles(theme);
  const {
    style,
    ...other
  } = props;

  const inlineStyle = [styles.root];

  if (style) {
    inlineStyle.push(style);
  }


  return (
    <textarea {...other} style={inlineStyle} placeholder={props.placeholder} />
  );
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object
};

Textarea.contextTypes = {
  theme: PropTypes.object
};

export default radium(Textarea);
