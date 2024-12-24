import "./styles.less";

import { type FC, Fragment } from "react";

import butterflyLogotypeIcon from "./assets/butterfly.svg";
import linkedInLogotypeIcon from "./assets/linkedin.svg";
import typeScriptLogotypeIcon from "./assets/typescript.svg";
import githubLogotypeIcon from "./assets/github.svg";
import reactLogotypeIcon from "./assets/react.svg";
import checkmarkIcon from "./assets/checkmark.svg";
import arrowDownIcon from "./assets/arrow-down.svg";
import startIcon from "./assets/star.svg";
import arrowUpIcon from "./assets/arrow-up.svg";

import { type IconComponent, type IconType } from "./types";

type IconProps = {
	iconType: IconType;
	width: number;
	height: number;
};

const icons: Record<IconType, IconComponent> = {
	butterfly: {
		src: butterflyLogotypeIcon.src,
		alt: "Butterfly company logotype",
		class: "icon icon--type--butterfly"
	},
	linkedin: {
		src: linkedInLogotypeIcon.src,
		alt: "LinkedIn company logotype",
		class: "icon icon--type--linkedin"
	},
	typescript: {
		src: typeScriptLogotypeIcon.src,
		alt: "TypeScript logotype",
		class: "icon icon--type--typescript"
	},
	github: {
		src: githubLogotypeIcon.src,
		alt: "GitHub logotype",
		class: "icon icon--type--github"
	},
	react: {
		src: reactLogotypeIcon.src,
		alt: "React logotype",
		class: "icon icon--type--react"
	},
	checkmark: {
		src: checkmarkIcon.src,
		alt: "",
		class: "icon icon--type--checkmark"
	},
	arrowDown: {
		src: arrowDownIcon.src,
		alt: "",
		class: "icon icon--type--arrow-down"
	},
	star: {
		src: startIcon.src,
		alt: "",
		class: "icon icon--type--star"
	},
	arrowUp: {
		src: arrowUpIcon.src,
		alt: "",
		class: "icon icon--type--arrow-up"
	}
};

const Icon: FC<IconProps> = ({ iconType, width, height }) => {
	const icon = icons[iconType];

	if (!icon) {
		throw new Error(`Invalid iconType: ${iconType}`);
	}

	return (
		<Fragment>
			{icon && (
				<img
					className={icon.class}
					src={icon.src}
					alt={icon.alt}
					width={width}
					height={height}
				/>
			)}
		</Fragment>
	);
};

export default Icon;
