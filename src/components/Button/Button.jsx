import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';
class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" className={styles.Button} onClick={onClick}>
        Load more
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
