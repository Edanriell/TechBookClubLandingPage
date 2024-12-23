import "./styles.less";

import { type FC, type ReactNode } from "react";

type ButtonProps = {
	children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
	return (
		<button className="button" type="button">
			{children}
		</button>
	);
};

export default Button;
