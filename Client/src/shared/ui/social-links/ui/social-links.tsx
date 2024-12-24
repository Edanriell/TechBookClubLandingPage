import "./styles.less";

import { type FC } from "react";
import { motion } from "motion/react";

import Icon from "@shared/ui/icon/ui/icon.tsx";
import { type IconType } from "@shared/ui/icon/ui/types";

export type SocialLink = {
	href: string;
	description: string;
	iconType: IconType;
};

const socialLinks: Array<SocialLink> = [
	{
		href: "#",
		description: "Link to Butterfly profile",
		iconType: "butterfly"
	},
	{
		href: "#",
		description: "Link to LinkedIn profile",
		iconType: "linkedin"
	}
];

const SocialLinks: FC = () => {
	return (
		<ul className="social-links">
			{socialLinks.map(({ href, description, iconType }, index) => (
				<li key={index} className="social-links__link">
					<motion.a
						href={href}
						whileHover={{
							opacity: 0.6
						}}
						whileTap={{ opacity: 0.6 }}
						whileFocus={{ opacity: 0.6 }}
						transition={{
							type: "spring",
							duration: 0.45,
							bounce: 0
						}}
					>
						<span className="visually-hidden">{description}</span>
						<Icon iconType={iconType} width={22} height={22} />
					</motion.a>
				</li>
			))}
		</ul>
	);
};

export default SocialLinks;
