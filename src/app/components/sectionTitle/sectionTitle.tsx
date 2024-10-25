import "./sectionTitle.scss";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h3 className="section-title">{title}</h3>
    );
}