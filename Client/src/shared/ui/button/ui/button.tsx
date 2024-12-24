import "./styles.less";

import { type FC, type ReactNode } from "react";
import { motion } from "motion/react";

type ButtonProps = {
	children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
	return (
		<motion.button
			initial={{
				outline: "none"
			}}
			whileHover={{
				scale: 1.05,
				backgroundImage: "linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%)"
			}}
			whileTap={{ scale: 0.95 }}
			whileFocus={{
				boxShadow: "0 0 0 3rem #fff, 0 0 0 5rem #385159"
			}}
			transition={{
				type: "spring",
				duration: 0.45,
				bounce: 0
			}}
			className="button"
			type="button"
		>
			{children}
		</motion.button>
	);
};

export default Button;
