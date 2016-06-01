import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import SvgIcon from './SvgIcon';
import { checkIcon } from './utils/paths';


const getStyles = ({ spacing, palette }) => ({
  root: {
    userSelect: 'none',
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    padding: spacing.verticalPadding
  },
  inputWrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    position: 'relative'
  },
  input: {
    cursor: 'pointer',
    appearance: 'none',
    marginRight: 15,
    width: '1.4em',
    height: '1.4em',
    outline: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: palette.checkboxColor,
    borderRadius: spacing.borderRadius
  },
  hidden: {
    display: 'none'
  },
  icon: {
    position: 'absolute',
    width: '1.4em',
    height: '1.4em'
  }
});

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }

  handleChange = (event) => {
    const checked = event.target.checked;
    this.setState({ checked });
    if (this.props.onChange) {
      this.props.onChange(checked);
    }
  }

  render() {
    const {
      style,
      label,
      value,
      ...other
    } = this.props;
    const { theme } = this.context;
    const { palette } = theme;
    const styles = getStyles(theme);

    const inlineStyle = [styles.root];

    if (style) {
      inlineStyle.push(style);
    }

    return (
      <label style={inlineStyle}>
        <div style={styles.inputWrapper}>
          <SvgIcon
            baseColor={palette.primaryColor}
            style={this.state.checked ? styles.icon : styles.hidden}
            path={checkIcon}
          />
          <input
            {...other}
            value={value}
            onChange={this.handleChange}
            style={styles.input}
            checked={this.state.checked}
            type="checkbox"
          />
        </div>
        <div>
          <span>{label}</span>
        </div>
      </label>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object
};

Checkbox.contextTypes = {
  theme: PropTypes.object
};

export default radium(Checkbox);
