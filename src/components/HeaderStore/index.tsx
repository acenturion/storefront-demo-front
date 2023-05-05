import clasess from './HeaderStore.module.css'
interface HeaderStoreProps {
    title: string,
    urlHeader: string
}

const HeaderStore = ({
    title,
    urlHeader
}: HeaderStoreProps) => {
    const style  = {
        backgroundImage: `url(${urlHeader})`
    }

    return (
        <div className={clasess.container}
        style={style}
        >
            <h1>{title}</h1>
        </div>
    );
}

export default HeaderStore;
