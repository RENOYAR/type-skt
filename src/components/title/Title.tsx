// @ts-nocheck
import {TitleWrap} from './StyledTitle';

export default function Title({children}) {
  return (
    <TitleWrap>
      <div>{children}</div>
    </TitleWrap>
  );
}
