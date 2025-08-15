// @ts-nocheck
import {
  MapWrap,
  CoordinateWrap,
  CoordinateDiv,
  CoordinateSpan,
  CoordinateNum,
  MapCheckWrap,
  MapCheckBox,
  MapZommWrap,
  MapZommBox,
  MapZommCount,
  MapZommIn,
  MapZommOut,
  CoordinateUnit,
} from './StyledMap';
import CheckBox from 'components/checkbox/Checkbox';
export default function Map() {
  return (
    <MapWrap>
      <CoordinateWrap>
        <CoordinateDiv>
          <CoordinateSpan>좌표 X</CoordinateSpan>
          <CoordinateNum>0000.000</CoordinateNum>
          <CoordinateSpan>좌표 Y</CoordinateSpan>
          <CoordinateNum>0000.000</CoordinateNum>
          <CoordinateSpan>간격</CoordinateSpan>
          <CoordinateNum>0000.000</CoordinateNum>
          <CoordinateUnit>m</CoordinateUnit>
        </CoordinateDiv>
      </CoordinateWrap>
      <MapCheckWrap>
        <MapCheckBox>
          <CheckBox
            id="check01"
            name="check01"
            text="Space"
            htmlFor="check01"
            defaultChecked
          />
          <CheckBox
            id="check02"
            name="check02"
            text="측위영역"
            htmlFor="check02"
          />
          <CheckBox
            id="check03"
            name="check03"
            text="배경 Layer"
            htmlFor="check03"
          />
          <CheckBox
            id="check04"
            name="check04"
            text="Anchor"
            htmlFor="check04"
          />
        </MapCheckBox>
      </MapCheckWrap>
      <MapZommWrap>
        <MapZommBox>
          <MapZommCount>10</MapZommCount>
          <MapZommIn />
          <MapZommOut />
        </MapZommBox>
      </MapZommWrap>
      <img src="/images/common/map-sample.png" alt="" />
    </MapWrap>
  );
}
