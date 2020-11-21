import { FooterStyle } from "./style"

import emailEnvelop from '../../assets/images/icons/email-envelope.svg'
import phone from '../../assets/images/icons/phone.svg'
import Link from "next/link"
import { DataProps } from "../CompareContent"



const Footer:React.FC<DataProps> = ({data}) => {

  return (
    <FooterStyle>
      <div className="footer-content">

        <div className="footer-table">

          <div className="navegation">
            <ul>
              <li>
                <strong>Navegação</strong>
              </li>
              <li>
                <Link href="/">
                <a>Início</a>
                </Link>
              </li>
              <li>
              <Link href="/smartphones">
                <a>Smartphones</a>
              </Link>
              </li>
              <li>
                <Link href="/">
                <a>Computadores</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                <a>TV</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                <a>Acessórios</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                <a>Contato</a>
                </Link>
              </li>
            </ul>

          </div>
          <div className="services">
            <ul>
              <li>
                <strong>Últimos Smartphones</strong>
              </li>
              <li>
                <Link href={'/smartphones/'+data[0].page}>
                <a >{data[0].name}</a>
                </Link>
              </li>
              <li>
                <Link href={'/smartphones/'+data[1].page}>
                <a >{data[1].name}</a>
                </Link>
              </li>
              <li>
                <Link href={'/smartphones/'+data[2].page}>
                <a >{data[2].name}</a>
                </Link>
              </li>
            </ul>

          </div>

          <div className="contact">
            <ul>
              <li>
                <strong>Contato</strong>
              </li>
              <li>
                <Link href="/">
                <a>
                  <img src={emailEnvelop} width="15" height="15" alt="" />
                  <span>contato@contato.com.br</span>
                </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                <a>
                  <img src={phone} width="14" height="14" alt="" />
                  <span>Fale conosco</span>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright © 2020 Logo. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer