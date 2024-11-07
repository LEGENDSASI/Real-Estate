import Header from '../Header/Header'
import SlideImage from '../SlideImage/SlideImage'
import SearchProperty from '../SearchProperty/SearchProperty'
import OurProperties from '../OurProperties/OurProperties'
import Pagination from '../Pagination/Pagination'
import Footer from '../Footer/Footer'
import './PropertiesPage.css'

function PropertiesPage() {
  return (
    <>
    <div className="PropertiesPage">
    <Header page_link_index={2}/>
    <SlideImage FirstText='Properties' SecondText='Properties' />
    <SearchProperty />
    <OurProperties />
    <Pagination />
    <Footer />
    </div>
    </>
  )
}

export default PropertiesPage