import HeroSection from "./heroSection";
import {Offerings} from "./Offerings";
import {Reviews} from "./reviews";
import About from "./about";

export const WelcomePage = () => {
    return (
        <>

            <HeroSection />
            <About />
            <Offerings />
            <Reviews />

        </>
    );
}