// @ts-nocheck
import CheckBox from 'components/checkbox/Checkbox';
import {StyledGuideWrapper, GuideContainer} from './StyledGuide';
import Radio from 'components/radio/Radio';
import TextField from 'components/textfiled/TextField';
import Select from 'components/select/Select';
import Button from 'components/button/Button';
import Icon from 'components/icon/Icon';
import FileUploader from 'components/searchfile/FileUploader';

export default function GuideList() {
  const options = [
    {
      value: '옵션1',
      label: '옵션1',
    },
    {
      value: '옵션2',
      label: '옵션2',
    },
    {
      value: '옵션3',
      label: '옵션3',
    },
    {
      value: '옵션4',
      label: '옵션4',
    },
  ];
  return (
    <StyledGuideWrapper>
      {/* checkbox */}
      <h3>Button</h3>
      <GuideContainer>
        <div className="item" style={{display: 'flex', gap: '10px'}}>
          <Button
            onClick={() => {}}
            $size="small"
            $variant="primary"
            $icon="icon-search-primary">
            <Icon $widthSize={20} $heightSize={20}>
              검색
            </Icon>
            primary
          </Button>
          <Button onClick={() => {}} $size="small" $variant="primary" disabled>
            primary
          </Button>

          <Button
            onClick={() => {}}
            $size="small"
            $variant="secondaryBlue"
            $icon="icon-search-secondaryBlue">
            <Icon $widthSize={20} $heightSize={20}>
              검색
            </Icon>
            secondaryBlue
          </Button>
          <Button
            onClick={() => {}}
            $size="small"
            $variant="secondaryBlue"
            disabled>
            secondaryBlue
          </Button>
          <Button onClick={() => {}} $size="small" $variant="tertiary">
            tertiary
          </Button>
          <Button onClick={() => {}} $size="small" $variant="tertiary" disabled>
            tertiary
          </Button>
          <Button onClick={() => {}} $size="small" $variant="secondaryGray">
            secondaryGray
          </Button>
          <Button
            onClick={() => {}}
            $size="small"
            $variant="secondaryGray"
            disabled>
            secondaryGray
          </Button>
          <Button onClick={() => {}} $size="small" $variant="transparent">
            transparent
          </Button>
          <Button
            onClick={() => {}}
            $size="small"
            $variant="transparent"
            disabled>
            transparent
          </Button>
          <Button
            onClick={() => {}}
            $size="small"
            $variant="transparentPurple"
            disabled>
            transparentPurple
          </Button>
        </div>
      </GuideContainer>
      <h3>CheckBox</h3>
      <GuideContainer>
        <div className="item">
          <h4>라벨이 없는 경우</h4>
          <CheckBox
            id="check01"
            name="check01"
            htmlFor="check01"
            defaultChecked
          />
          <CheckBox
            id="check02"
            name="check02"
            htmlFor="check02"
            defaultChecked
            disabled
          />
          <CheckBox id="check03" name="check03" htmlFor="check03" />
          <CheckBox id="check04" name="check04" htmlFor="check04" disabled />
        </div>
        <div className="item">
          <h4>라벨이 있는 경우</h4>
          <CheckBox
            id="check05"
            name="check05"
            text="Label"
            htmlFor="check05"
            defaultChecked
          />
          <CheckBox
            id="check06"
            name="check06"
            text="Label"
            htmlFor="check06"
            defaultChecked
            disabled
          />
          <CheckBox
            id="check07"
            name="check07"
            text="Label"
            htmlFor="check07"
          />
          <CheckBox
            id="check08"
            name="check08"
            text="Label"
            htmlFor="check08"
            disabled
          />
        </div>
      </GuideContainer>

      {/* radio */}
      <h3>Radio</h3>
      <GuideContainer>
        <Radio
          id="radio05"
          name="radio05"
          text="Label"
          htmlFor="radio05"
          defaultChecked
        />
        <Radio
          id="radio06"
          name="radio06"
          text="Label"
          htmlFor="radio06"
          defaultChecked
          disabled
        />
        <Radio id="radio07" name="radio07" text="Label" htmlFor="radio07" />
        <Radio
          id="radio08"
          name="radio08"
          text="Label"
          htmlFor="radio08"
          disabled
        />
      </GuideContainer>

      {/* TextField */}
      <h3>TextField</h3>
      <GuideContainer>
        <TextField
          id="TextField01"
          name="text"
          type="text"
          placeholder="Placeholder"
        />
        <br />
        <TextField
          id="TextField02"
          name="readOnly"
          type="text"
          value="readOnly"
          readOnly
        />
        <br />
        <TextField
          id="TextField03"
          name="disabled"
          type="text"
          value="disabled"
          disabled
        />
        <br />
        <TextField
          id="TextField04"
          name="number"
          type="number"
          placeholder="숫자만 입력해주세요"
        />
      </GuideContainer>

      {/* select */}
      <h3>select</h3>
      <GuideContainer>
        <Select
          inputId="Select01"
          name="Select01"
          placeholder="Text"
          options={options}
          classNamePrefix="react-select"
        />
        <br />
        <Select
          inputId="Select03"
          name="Select03"
          options={options}
          classNamePrefix="react-select"
          placeholder="Text"
          defaultValue={options[0]}
          disabled
        />
        <br />
        <Select
          inputId="Select04"
          name="Select04"
          options={options}
          classNamePrefix="react-select"
          placeholder="Text"
          defaultValue={options[0]}
          readonly
        />
        <br />
        <Select
          $all={true}
          inputId="Select06"
          name="Select06"
          placeholder="Text"
          options={options}
          classNamePrefix="react-select"
          $checkbox
          // $button
          isMulti
          hideSelectedOptions={false}
        />
        <br />
        <Select
          inputId="Select05"
          name="Select05"
          options={options}
          classNamePrefix="react-select"
          placeholder="Text"
          defaultValue={options[0]}
          $transparent
        />
      </GuideContainer>

      {/* SearchFile */}
      <h3>FileUploader</h3>
      <GuideContainer>
        <FileUploader />
      </GuideContainer>
    </StyledGuideWrapper>
  );
}
