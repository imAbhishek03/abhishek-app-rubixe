import style from "./midstyle.module.css"
import cover from "./home.png"
import sideImg from "./home-img2.png"
const AboutUs = () =>{
    return(
        <div id = {style.ab}>
            <section>
                <img src={cover} width = "100%" height="450px"/>
            </section>
            <section className = {style.mid}>
                <article>
                    <div className = {style.data}>
                        <h2>WHO WE ARE</h2><br />
                        <span>Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technologies -
                        Artificial Intelligence (AI), Machine Learning, Robotics Process Automation (RPA),
                        BlockChain, and Internet of Things(IoT).</span><br /><br />
                        <span>Rubixe<sup>TM</sup> mission is to enable businesses to leverage the full potential of disruptive 
                        technologies and stay competitive in the market, turning complex challenges into 
                        solutions, providing a strategic competitive advantages that are more efficient, effective 
                        and predictable.</span>
                    </div>
                    <div>
                        <img src={sideImg} alt="" />
                    </div>
                </article>
            </section>
            <section className = {style.about}>
                <article>
                    <h2>WHERE WE STARTED</h2>
                    <span>We startde in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expires in 
                    delivering enterprise-level solutions in the field of Artificial Intelligence (AI), Cyber Security, Robotics Process Automation (RPA), Internet of Things 
                    (IoT), and BlockChain technology.</span>
                </article>
            </section>
        </div>
    )
}
export default AboutUs