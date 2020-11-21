import { Div } from './style'
interface TitleProps {
  title: string
}

const SectionTitle: React.FC<TitleProps> = ({title}) => {
  return (
    <Div className="compare-rowheader">
      <h2>
        {title}
      </h2>
    </Div>

  )
}

export default SectionTitle