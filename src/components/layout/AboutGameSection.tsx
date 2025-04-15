import Image from "next/image"
import AboutGame from "./AboutGame";
import aboutgame from '@/assets/about-game.png'
const AboutGameSection=()=>{
        return(
            <div className="flex">
            <Image src={aboutgame} alt="about game section"/>
            <AboutGame/>
            </div>
        )
}
export default AboutGameSection