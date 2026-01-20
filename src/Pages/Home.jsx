import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import QuickLinks from "../components/QuickLinks"
import SatisfactionGuaranteed from "../components/SatisfactionGuaranteed"
import WhoWeAre from "../components/WhoWeAre"
import GlobalPartners from "../components/GlobalPartners"
import ContactForm from "../components/ContactForm"

function Home() {
    return (
        <div>
            <Hero />
            <QuickLinks />
            <FeaturedServices />
            <SatisfactionGuaranteed />
            <WhoWeAre />
            <GlobalPartners />
            <ContactForm />
        </div>
    )
}

export default Home