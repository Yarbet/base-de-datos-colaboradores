import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const AlertRegisterForm = ({ formErrors, color }) => {
	return <>{formErrors && <Alert variant={color}>{formErrors}</Alert>}</>;
};

AlertRegisterForm.propTypes = {
	formErrors: PropTypes.string,
	color: PropTypes.string,
};