interface DescriptionStoreProps {
    description: string,
    urlVideo: string,
}
const DescriptionStore = ({
    description,
    urlVideo,
}: DescriptionStoreProps) => {
    return (
        <div>
            <p>{description}</p>
            <iframe title="videoCompanyFrame"
                width="853"
                height="480"
                className="video-container"
                allowFullScreen
                frameBorder="0"
                src={`https://www.youtube.com/embed/${urlVideo}`}
                >
            </iframe>
        </div>
    );
}

export default DescriptionStore;
