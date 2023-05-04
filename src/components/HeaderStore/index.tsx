import clasess from './HeaderStore.module.css'
interface HeaderStoreProps {
    title: string,
}

const HeaderStore = ({
    title
}: HeaderStoreProps) => {
    return (
        <div className={clasess.container}>
            <h1>{title}</h1>
        </div>
    );
}

export default HeaderStore;
