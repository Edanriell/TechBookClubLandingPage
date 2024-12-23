import "./styles.less";

import { type FC, type ReactNode } from "react";
import clsx from "clsx";

type LinkProps = {
	href: string;
	type: "gradient" | "ghost";
	icon?: ReactNode;
	children: ReactNode;
};

const Link: FC<LinkProps> = ({ href, type, icon, children }) => {
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
		<a href={href} className={linkClasses}>
			<span className={linkTextClasses}>{children}</span>
			{icon && icon}
		</a>
	);
};

export default Link;
