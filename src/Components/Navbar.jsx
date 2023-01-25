import navstyle from "./navstyle.module.css"
import logo from "./rubixe-logo.png"
const Navbar = () =>{
    return(
        <div>
            <section id = {navstyle.nav}>
                <article>
                    <div className = {navstyle.logo}>
                        <img src={logo} height = "53%" width = "140px"/>
                    </div>
                    <div className = {navstyle.menu}>
                        <ol>
                            <li><a href="https://rubixe.com/ai-internship-program/index">HOME</a></li>
                            <li><a href="https://rubixe.com/services/">SERVICES</a></li>
                            <li><a href="https://rubixe.com/products/">PRODUCTS</a></li>
                            <li><a href="https://rubixe.com/ai-internship-program/internship-form">AI INTERNSHIP</a></li>
                            <li><a href="https://rubixe.com/career/">CAREER</a></li>
                            <li><a href="https://rubixe.com/blog/">BLOG</a></li>
                            <li><a href="https://rubixe.com/about/">ABOUT</a></li>
                            <li><a href="https://rubixe.com/contact-us/">CONTACT US</a></li>
                        </ol>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Navbar