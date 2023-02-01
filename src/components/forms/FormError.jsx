import PropTypes from "prop-types";

export default function FormError({ children }) {
  return <span className="form-error">{children}</span>;
}

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};