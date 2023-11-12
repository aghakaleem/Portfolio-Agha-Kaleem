import HeroSection from "./heroSection";
import {AllProjects} from "./AllProjects";
import {Reviews} from "./reviews";
import { Skills } from "./skills";
export const WelcomePage = () => {
    return (
        <>

            <HeroSection />
            <Skills />
            <AllProjects />
            <Reviews />

        </>
    );
}