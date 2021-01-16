
import { JSXElementConstructor } from 'react'
import {Div, Figure} from './style'

interface DatasheetRowProps {
  title: string
  figure?: true
  figureClass?: string;
  figureUrl?: string;
  line1Strong?: string;
  line1String?: string | JSX.Element;
  line1?: string;
  line2Strong?: string;
  line2String?: string | JSX.Element;
  line2?: string;
  line3String?: string | JSX.Element;
  line3Strong?: string;
  line3?: string;
  line4String?: string | JSX.Element;
  line4Strong?: string;
  line4?: string;
  line5String?: string | JSX.Element;
  line5Strong?: string;
  line5?: string
  line6String?: string;
  line6Strong?: string;
  line6?: string;
  line7String?: string;
  line7Strong?: string;
  line7?: string;
  line8String?: string;
  line8Strong?: string;
  line8?: string;
  line9String?: string;
  line9Strong?: string;
  line9?: string;
  line10String?: string;
  line10Strong?: string;
  line10?: string;
  line11String?: string;
  line11Strong?: string;
  line11?: string;
  line12String?: string;
  line12Strong?: string;
  line12?: string;
  line13String?: string;
  line13Strong?: string;
  line13?: string;
  line14String?: string;
  line14Strong?: string;
  line14?: string;
  line15String?: string;
  line15Strong?: string;
  line15?: string;
}

const DatasheetRow: React.FC<DatasheetRowProps> = (props) => {
  return (
    <Div className="rowgroup">
      <div className="rowheader">
        <h2>
          {props.title}
        </h2>
      </div>
      <div className="rowcolumn">
        { props.figure && <Figure backgroundImage={props.figureUrl} className={props.figureClass}> </Figure>}
        <ul>
          <li>
            {props.line1Strong && <strong>{props.line1Strong}</strong> } 
            {props.line1String && props.line1String } 
            {props.line1 && props.line1 } 
          </li>
          <li>
            {props.line2Strong && <strong>{props.line2Strong}</strong> } 
            {props.line2String && props.line2String } 
            {props.line2 && props.line2 } 
          </li>
          <li>
            {props.line3Strong && <strong>{props.line3Strong}</strong> } 
            {props.line3String && props.line3String } 
            {props.line3 && props.line3 } 
          </li>
          <li>
            {props.line4Strong && <strong>{props.line4Strong}</strong> } 
            {props.line4String && props.line4String } 
            {props.line4 && props.line4 } 
          </li>
          <li>
            {props.line5Strong && <strong>{props.line5Strong}</strong> } 
            {props.line5String && props.line5String } 
            {props.line5 && props.line5 } 
          </li>
          <li>
            {props.line6Strong && <strong>{props.line6Strong}</strong> } 
            {props.line6String && props.line6String } 
            {props.line6 && props.line6 } 
          </li>
          <li>
            {props.line7Strong && <strong>{props.line7Strong}</strong> } 
            {props.line7String && props.line7String } 
            {props.line7 && props.line7 } 
          </li>
          <li>
            {props.line8Strong && <strong>{props.line8Strong}</strong> } 
            {props.line8String && props.line8String } 
            {props.line8 && props.line8 } 
          </li>
          <li>
            {props.line9Strong && <strong>{props.line9Strong}</strong> } 
            {props.line9String && props.line9String } 
            {props.line9 && props.line9 } 
          </li>
          <li>
            {props.line10Strong && <strong>{props.line10Strong}</strong> } 
            {props.line10String && props.line10String } 
            {props.line10 && props.line10 } 
          </li>
          <li>
            {props.line11Strong && <strong>{props.line11Strong}</strong> } 
            {props.line11String && props.line11String } 
            {props.line11 && props.line11 } 
          </li>
          <li>
            {props.line12Strong && <strong>{props.line12Strong}</strong> } 
            {props.line12String && props.line12String } 
            {props.line12 && props.line12 } 
          </li>
          <li>
            {props.line13Strong && <strong>{props.line13Strong}</strong> } 
            {props.line13String && props.line13String } 
            {props.line13 && props.line13 } 
          </li>
          <li>
            {props.line14Strong && <strong>{props.line14Strong}</strong> } 
            {props.line14String && props.line14String } 
            {props.line14 && props.line14 } 
          </li>
          <li>
            {props.line15Strong && <strong>{props.line15Strong}</strong> } 
            {props.line15String && props.line15String } 
            {props.line15 && props.line15 } 
          </li>
        </ul>
      </div>
    </Div>
  )
}

export default DatasheetRow