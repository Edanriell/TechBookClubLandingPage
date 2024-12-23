import "./styles.less";

import { type FC, type ReactNode } from "react";
import clsx from "clsx";
import { motion } from "motion/react";

type LinkProps = {
	href: string;
	type: "gradient" | "ghost";
	icon?: ReactNode;
	children: ReactNode;
};

const Link: FC<LinkProps> = ({ href, type, icon, children }) => {
	const linkAnimationVariants = {
		gradient: {
			scale: 1.1,
			backgroundImage: "linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%)"
		},
		focusGradient: {
			boxShadow: "0 0 0 3rem #e6e1df, 0 0 0 5rem #062630"
		},
		ghost: {
			scale: 1.1,
			backgroundImage: "linear-gradient(90deg, #385159 0%, #062630 100%)"
		},
		focusGhost: {
			boxShadow: "0 0 0 3rem #062630, 0 0 0 5rem #e6e1df"
		}
	};

	const linkClasses = clsx({
		link: true,
		"link--type--ghost": type === "ghost",
		"link--type--gradient": type === "gradient"
	});

	const linkTextClasses = clsx({
		link__text: true,
		"link__text--type--ghost": type === "ghost",
		"link__text--type--gradient": type === "gradient"
	});

	return (
		<motion.a
			initial={{
				outline: "none"
			}}
			whileHover={type === "gradient" ? "gradient" : "ghost"}
			variants={linkAnimationVariants}
			whileTap={{ scale: 0.95 }}
			whileFocus={type === "gradient" ? "focusGradient" : "focusGhost"}
			transition={{
				type: "spring",
				duration: 0.45,
				bounce: 0
			}}
			href={href}
			className={linkClasses}
		>
			<span className={linkTextClasses}>{children}</span>
			{icon && icon}
		</motion.a>
	);
};

export default Link;
