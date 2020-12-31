import React from 'react'
import { Container } from './style'


interface sectionRowsProps {
  labelStrongOne?: string;
  labelOne: string;
  labelStrongTwo?: string;
  labelTwo: string;
  labelStrongThree?: string;
  labelThree: string;
}

const SectionRows: React.FC<sectionRowsProps> = (props) => {
  return (
    <>
      {props.labelStrongOne ?

        <Container>

          <div className="compare-column compare-column-one">
            <p>
              {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
              {props.labelOne}
            </p>
          </div>

          <div className="compare-column compare-column-two">
            <p>
              {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
              {props.labelTwo}
            </p>
          </div>

          <div className="compare-column compare-column-three">
            <p>
              {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
              {props.labelThree}
            </p>
          </div>

        </Container> :
        props.labelOne ?
          <Container>

            <div className="compare-column compare-column-one">
              <p>
                {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
                {props.labelOne}
              </p>
            </div>

            <div className="compare-column compare-column-two">
              <p>
                {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
                {props.labelTwo}
              </p>
            </div>

            <div className="compare-column compare-column-three">
              <p>
                {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
                {props.labelThree}
              </p>
            </div>

          </Container> :
          props.labelStrongTwo ?
            <Container>

              <div className="compare-column compare-column-one">
                <p>
                  {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
                  {props.labelOne}
                </p>
              </div>

              <div className="compare-column compare-column-two">
                <p>
                  {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
                  {props.labelTwo}
                </p>
              </div>

              <div className="compare-column compare-column-three">
                <p>
                  {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
                  {props.labelThree}
                </p>
              </div>

            </Container> :
            props.labelTwo ?
              <Container>

                <div className="compare-column compare-column-one">
                  <p>
                    {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
                    {props.labelOne}
                  </p>
                </div>

                <div className="compare-column compare-column-two">
                  <p>
                    {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
                    {props.labelTwo}
                  </p>
                </div>

                <div className="compare-column compare-column-three">
                  <p>
                    {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
                    {props.labelThree}
                  </p>
                </div>

              </Container> :
              props.labelStrongThree ?
                <Container>

                  <div className="compare-column compare-column-one">
                    <p>
                      {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
                      {props.labelOne}
                    </p>
                  </div>

                  <div className="compare-column compare-column-two">
                    <p>
                      {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
                      {props.labelTwo}
                    </p>
                  </div>

                  <div className="compare-column compare-column-three">
                    <p>
                      {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
                      {props.labelThree}
                    </p>
                  </div>

                </Container> :
                props.labelThree ?
                  <Container>

                    <div className="compare-column compare-column-one">
                      <p>
                        {props.labelStrongOne && <strong>{props.labelStrongOne}</strong>}
                        {props.labelOne}
                      </p>
                    </div>

                    <div className="compare-column compare-column-two">
                      <p>
                        {props.labelStrongTwo && <strong>{props.labelStrongTwo}</strong>}
                        {props.labelTwo}
                      </p>
                    </div>

                    <div className="compare-column compare-column-three">
                      <p>
                        {props.labelStrongThree && <strong>{props.labelStrongThree}</strong>}
                        {props.labelThree}
                      </p>
                    </div>

                  </Container> :
                  ''




      }

    </>
  )
}

export default SectionRows