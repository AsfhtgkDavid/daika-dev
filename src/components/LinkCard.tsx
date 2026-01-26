import Card from "@/components/ui/Card";
import type {StaticImageData} from "next/image";

const LinkCard = (props: LinkCardProps) => {
	return <Card {...props} />;
};

export default LinkCard;

interface LinkCardProps {
	title: string;
	description: string;
	icon: string | StaticImageData;
	href: string;
	rotateAngle?: number;
	className?: string;
	fullWidth?: boolean;
}
