import Contact from "./contact";
import HeroSection from "./heroSection";
import {AllProjects} from "./AllProjects";
import {Reviews} from "./reviews";

export const WelcomePage = () => {
    return (
        <>

            <HeroSection />
            <AllProjects />
            <Reviews />

        </>
    );
}