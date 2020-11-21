import { Container } from "./style"
import SearchIcon from '../../assets/images/icons/search.svg'
import { InputHTMLAttributes } from "react"

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Search: React.FC<SearchProps> = ({ name, ...rest}) => {

  return(
    <Container>
        
          <label htmlFor={name}>
          </label>
          <div>
            <input type="text" autoComplete="off" name={name} {...rest} />
            <button type="submit">
              <img src={SearchIcon} alt="Buscar"/>
            </button>
          </div>
        
    </Container>

  )
}

export default Search