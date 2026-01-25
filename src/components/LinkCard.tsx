import Card from "@/components/ui/Card.tsx";

const LinkCard = (props: LinkCardProps) => {
	return <Card {...props} />;
};

export default LinkCard;

interface LinkCardProps {
	title: string;
	description: string;
	icon: string;
	href: string;
	rotateAngle?: number;
	className?: string;
	fullWidth?: boolean;
}
