import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Search = ({ onChange }) => {
	return (
		<Form>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					type="search"
					placeholder="Busca un colaborador"
				/>
			</Form.Group>
		</Form>
	);
};
