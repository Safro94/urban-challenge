import Button from '../button';

import { FormContainer, FormLabel } from './index.styles';

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	extraLabelProps?: React.HTMLAttributes<HTMLLabelElement>;
}

const Form: React.FunctionComponent & {
	Submit: React.FunctionComponent<
		React.ButtonHTMLAttributes<HTMLButtonElement>
	>;
} & {
	Label: React.FunctionComponent<ILabelProps>;
} = ({ children, ...rest }) => {
	return (
		<FormContainer method='POST' {...rest}>
			{children}
		</FormContainer>
	);
};

const Label = ({ htmlFor, extraLabelProps, ...rest }: ILabelProps) => {
	return <FormLabel htmlFor={htmlFor} {...extraLabelProps} {...rest} />;
};

const Submit = ({
	children,
	onClick,
	type = 'submit',
	disabled = false,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button onClick={onClick} disabled={disabled} type={type} {...rest}>
			{children}
		</Button>
	);
};

Form.Label = Label;
Form.Submit = Submit;

export default Form;
