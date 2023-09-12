import { links } from '@/src/utils/data'
import EmailBox from '../EmailBox/EmailBox'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer__container">
                <h2 className="title">Get Funded!</h2>
                <EmailBox />

                <hr />
                <ul className="footer__links">
                    {
                        links.map(({name, path}, i) => (
                           <li key={i}><a href={path}>{name}</a></li>
                        ))
                    }
                </ul>
                <hr />

                <small>Made  by Gemigacodes</small>
            </div>
        </div>
    </footer>
  )
}

export default Footer