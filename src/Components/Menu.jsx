import style from "./midstyle.module.css"
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"

const Menu = () =>{
    return(
        <div id = {style.menuDiv}>
            <br /><br />
            <h4>TECH FOR TEENS - A RUBIXE &reg;INITIATIVE</h4>
            <section id = {style.Menu}>
                <article>
                    <div className = {style.box1}>
                        <div className = {style.sno}><span>01</span></div>
                        <div className = {style.pic1}><img src={img1} width = "80px" height="80%"/></div>
                        <div id = {style.content}><span>Introducing AI to children in an age appropriate manner</span></div>
                    </div>

                    <div className = {style.box2}>
                        <div id = {style.content}><span>Gain awareness on AI and build an interactive story around it</span></div>
                        <div className = {style.pic2}><img src={img2} width = "80px" height="80%"/></div>
                        <div className = {style.sno}><span>02</span></div>
                    </div>

                    <div className = {style.box3}>
                        <div className = {style.sno}><span>03</span></div>
                        <div className = {style.pic3}><img src={img3} width = "80px" height="80%"/></div>
                        <div id = {style.content}><span>Aquire programming skills in a user-friendly format</span></div>
                    </div>

                    <div className = {style.box4}>
                        <div id = {style.content}><span>Exposure to mini projects on diverse topics</span></div>
                        <div className = {style.pic4}><img src={img4} width = "80px" height="80%"/></div>
                        <div className = {style.sno}><span>04</span></div>
                        
                    </div>   

                    <div className = {style.box5}>
                        <div className = {style.sno}><span>05</span></div>
                        <div className = {style.pic5}><img src={img5} width = "80px" height="80%"/></div>
                        <div id = {style.content}><span>Train the teachers programme</span></div>
                    </div>   
                </article>
            </section>
        </div>
    )
}
export default Menu