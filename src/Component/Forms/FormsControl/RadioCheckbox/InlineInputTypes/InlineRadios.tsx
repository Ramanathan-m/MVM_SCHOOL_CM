import { Col, Input, Label } from 'reactstrap'
import { H6 } from '../../../../../AbstractElements'
import { InlineRadio } from '../../../../../utils/Constant'
import { inlineRadioData } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'

const InlineRadios = () => {
  return (
    <Col md="6" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <H6 className="sub-title">{InlineRadio}</H6>
        <div className="form-check-size rtl-input">
          <div className="form-check form-check-inline">
            <Input className="me-2" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultChecked />
            <Label for='inlineRadio1' check>1</Label>
          </div>
          {inlineRadioData.map(({ id, text, disabled }, index) => (
            <div className="form-check form-check-inline" key={index}>
              <Input className="me-2" id={id} type="radio" name="inlineRadioOptions" disabled={disabled} />
              <Label for={id} check>
                {text}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </Col>
  )
}

export default InlineRadios