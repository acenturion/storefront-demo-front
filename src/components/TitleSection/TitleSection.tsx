import classes from './TitleSection.module.css'

interface TitleSectionProps {
    title: string,
}

const TitleSection = ({
    title
}: TitleSectionProps) => {

    return (
        <div className={classes.container}>
            <h2>{title}</h2>
        </div>
    );
}

export default TitleSection;