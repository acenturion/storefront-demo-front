import TitleSection from "../TitleSection/TitleSection"
import classes from "./ContactUsSection.module.css"

const ContactUsSection = () => {
    return (
        <>
            <TitleSection title={'Contact Us'} />
            <div className={classes.container}
                style={{ display: 'flex', gap: '16px' }}
            >
                <button>Schedule a meeting</button>
            </div>
        </>
    )
}

export default ContactUsSection