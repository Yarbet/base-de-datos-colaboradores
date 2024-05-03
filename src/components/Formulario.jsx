import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const RegisterForm = ({ onSubmit, onChange }) => {
	return (
		<Form onSubmit={onSubmit}>
			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="nombre"
					type="text"
					placeholder="Ingrese el nombre"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="correo"
					type="email"
					placeholder="Ingrese un email"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="edad"
					type="number"
					min={1}
					max={100}
					placeholder="Ingrese la edad del colaborador"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="cargo"
					type="text"
					placeholder="Ingrese el cargo"
				/>
			</Form.Group>

			<Form.Group
				className="mb-3"
				controlId="formBasicEmail"
			>
				<Form.Label></Form.Label>
				<Form.Control
					onChange={onChange}
					name="telefono"
					type="tel"
					placeholder="Ingrese numero"
				/>
			</Form.Group>

			<Button
				variant="primary"
				type="submit">Agregar colaborador</Button>
		</Form>
	);
};
