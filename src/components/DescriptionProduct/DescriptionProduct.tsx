import classes from './DescriptionProduct.module.css'

interface DescriptionStoreProps {
    description: string,
    urlVideo: string,
}
const DescriptionStore = ({
    description,
    urlVideo,
}: DescriptionStoreProps) => {
    return (
        <div className={classes.container}>
            <p>{description}</p>
            <iframe title="videoCompanyFrame"
                width="853"
                height="480"
                className={classes.video}
                allowFullScreen
                frameBorder="0"
                src={`https://www.youtube.com/embed/${urlVideo}`}
                >
            </iframe>
        </div>
    );
}

export default DescriptionStore;
