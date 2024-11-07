import Header from '../Header/Header'
import SlideImage from '../SlideImage/SlideImage'
import Agents from '../Agents/Agents'
import Footer from '../Footer/Footer'
import './AgentsPage.css'

function AgentsPage() {
  return (
    <>
    <div className="AgentsPage">
    <Header page_link_index={3}/>
    <SlideImage FirstText='Our Agents' SecondText='Our Agents' />
    <Agents />
    <Footer />
    </div>
    </>
  )
}

export default AgentsPage