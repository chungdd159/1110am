import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  err,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': err
        })}
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {err && <div className="invalid-feedback">{err}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  err: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text',
};
export default TextInputGroup;
