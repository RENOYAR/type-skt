// @ts-nocheck
import {useState} from 'react';
import Box from 'components/box/Box';
import Title from 'components/title/Title';
import Button from 'components/button/Button';
import {Container} from 'components/layout/StyledLayout';
import {BoxContainer, BoxContent} from 'components/box/StyledBox';
import FormControl from 'components/formcontrol/FormControl';
import FormFlex from 'components/formcontrol/FormFlex';
import TextField from 'components/textfiled/TextField';
import Select from 'components/select/Select';
import TableStyle from 'components/table/Table';
import Pagination from 'components/pagination/Pagination';
import Icon from 'components/icon/Icon';
import {ButtonWrap} from 'components/layout/StyledLayout';
import {ButtonGroup} from 'components/button/StyledButton';
import {
  NoticeBox,
  NoticeFlex,
  StateFlex,
  StateTxt,
  StateIcontype1,
  StateIcontype2,
  StateIcontype3,
  StateIcontype4,
  StateIcontype5,
} from './StyledAnchor';

export default function Anchor020() {
  const [isOpen, setIsOpen] = useState(false);
  const option = [
    {
      value: 'SKT판교 7F',
      label: 'SKT판교 7F',
    },
    {
      value: 'SKT본사 10F',
      label: 'SKT본사 10F',
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
    <Container>
      {/* Info Box Container */}
      <BoxContainer>
        <Box $widthSize={900}>
          <Title>
            <h3>Anchor</h3>
            <Button $variant="tertiary" $size="mini">
              Anchor 등록
            </Button>
          </Title>
          <BoxContent>
            <FormControl title="Space" htmlFor="Select01" $gapSmall>
              <Select
                inputId="Select01"
                name="Select01"
                placeholder="선택"
                options={option}
                classNamePrefix="react-select"
              />
            </FormControl>
            <TableStyle $marginTop $paddIngT $paddIngImg $tabletr $table $block>
              <table>
                <thead>
                  <tr>
                    <th>연결상태</th>
                    <th>Space</th>
                    <th>Anchor ID</th>
                    <th>Anchor Name</th>
                    <th>IP</th>
                    <th>Model</th>
                    <th>Anchor 상태</th>
                    <th>구분</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="wifi_on"></span>
                    </td>
                    <td>SKT 판교 10F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-10
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="good">정상</span>
                    </td>
                    <td>Master</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_off"></span>
                    </td>
                    <td>SKT 판교 9F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-09
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="bad">에러</span>
                    </td>
                    <td>Slave</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_on"></span>
                    </td>
                    <td>SKT 판교 8F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-08
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="good">정상</span>
                    </td>
                    <td>Master</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_on"></span>
                    </td>
                    <td>SKT 판교 7F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-07
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="bad">에러</span>
                    </td>
                    <td>Slave</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_off"></span>
                    </td>
                    <td>SKT 판교 6F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-06
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="bad">에러</span>
                    </td>
                    <td>Slave</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_off"></span>
                    </td>
                    <td>SKT 판교 5F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-05
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="good">정상</span>
                    </td>
                    <td>Master</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_on"></span>
                    </td>
                    <td>SKT 판교 4F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-04
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="good">정상</span>
                    </td>
                    <td>Master</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_on"></span>
                    </td>
                    <td>SKT 판교 3F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-03
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="good">정상</span>
                    </td>
                    <td>Master</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_off"></span>
                    </td>
                    <td>SKT 판교 2F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-02
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="bad">에러</span>
                    </td>
                    <td>Slave</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="wifi_off"></span>
                    </td>
                    <td>SKT 판교 1F</td>
                    <td>ACDEG00000033</td>
                    <td>
                      <button onClick={() => setIsOpen(true)}>
                        ANC-01
                        <Icon
                          $widthSize={20}
                          $heightSize={20}
                          $name={'icon-paging-arrow-right'}>
                          다음
                        </Icon>
                      </button>
                    </td>
                    <td>547.548.125.548</td>
                    <td>F-01</td>
                    <td>
                      <span className="bad">에러</span>
                    </td>
                    <td>Slave</td>
                  </tr>
                </tbody>
              </table>
            </TableStyle>
            <Pagination />
          </BoxContent>
        </Box>
        {/* 두번째 BoxWrap */}
        {isOpen && (
          <Box $widthSize={600}>
            <Title>
              <h3>Anchor 정보</h3>
              <Button
                onClick={() => setIsOpen(false)}
                $size="none"
                $variant="none"
                $iconOnly
                $icon={'icon-close'}>
                닫기
              </Button>
            </Title>
            <BoxContent $scroll>
              <FormControl
                title="Space"
                htmlFor="Select02"
                $gapSmall
                required
                $mtop>
                <Select
                  inputId="Select02"
                  name="Select02"
                  placeholder="선택"
                  options={option}
                  classNamePrefix="react-select"
                />
              </FormControl>

              <FormControl
                title="Anchor ID"
                htmlFor="TextField01"
                required
                $gapSmall>
                <TextField id="TextField01" name="TextField01" type="text" />
              </FormControl>

              <FormControl title="Model" htmlFor="Select04" $gapSmall required>
                <Select
                  inputId="Select03"
                  name="Select03"
                  placeholder="F-01"
                  options={option}
                  classNamePrefix="react-select"
                />
              </FormControl>
              <FormControl
                title="Anchor Firmware Version"
                htmlFor="TextField02"
                required
                $gapSmall>
                <TextField
                  id="TextField02"
                  name="TextField02"
                  type="text"
                  placeholder="1.2"
                />
              </FormControl>

              <FormControl
                title="Anchor Protocol Version"
                htmlFor="TextField03"
                required
                $gapSmall>
                <TextField
                  id="TextField03"
                  name="TextField03"
                  type="text"
                  placeholder="1.4"
                />
              </FormControl>

              <FormControl
                title="Timeout(ms)"
                htmlFor="TextField05"
                required
                $gapSmall
                $mtop>
                <FormFlex $start>
                  <TextField id="TextField06" name="TextField06" type="text" />
                  <span style={{paddingTop: '5px'}}>~</span>
                  <TextField id="TextField07" name="TextField07" type="text" />
                </FormFlex>
              </FormControl>
              <FormControl
                title="UWB Type"
                htmlFor="Select04"
                $gapSmall
                required>
                <Select
                  inputId="Select04"
                  name="Select04"
                  placeholder="TDoA Anchor"
                  options={option}
                  classNamePrefix="react-select"
                />
              </FormControl>
              <FormControl
                title="Anchor Name"
                htmlFor="TextField04"
                required
                $gapSmall>
                <TextField
                  id="TextField04"
                  name="TextField04"
                  type="text"
                  placeholder="ANC-04"
                />
              </FormControl>
              <FormControl title="IP" htmlFor="TextField05" required $gapSmall>
                <TextField
                  id="TextField05"
                  name="TextField05"
                  type="text"
                  placeholder="218.548.548.597"
                />
              </FormControl>
              <FormControl
                title="Anchor Location"
                htmlFor="TextField06"
                required
                $gapSmall
                $mtop>
                <FormFlex $start>
                  <TextField
                    id="TextField05"
                    name="TextField05"
                    type="number"
                    placeholder="숫자로 입력하세요"
                    value="10.00"
                    $innerRight="X"
                    disabled
                  />
                  <TextField
                    id="TextField06"
                    name="TextField06"
                    type="number"
                    placeholder="숫자로 입력하세요"
                    value="8.00"
                    $innerRight="Y"
                    disabled
                  />
                  <TextField
                    id="TextField07"
                    name="TextField07"
                    type="number"
                    value="8.00"
                    $innerRight="Z"
                    disabled
                  />
                </FormFlex>
              </FormControl>
              <NoticeBox>
                <NoticeFlex>
                  <StateFlex>
                    <StateTxt>연결 상태</StateTxt>
                    {/* status값이 connect, disconnect*/}
                    <StateIcontype1 $status="connect">Connect</StateIcontype1>
                  </StateFlex>

                  <StateFlex>
                    <StateTxt>WIPI 감도</StateTxt>
                    {/* status값이 on, step3, step2, step1, off */}
                    <StateIcontype2 $status="step3"></StateIcontype2>
                  </StateFlex>

                  <StateFlex>
                    <StateTxt>UWB 감도</StateTxt>
                    {/* status값이 fine, good, nomal, low, bad, none */}
                    <StateIcontype3 $status="good">좋음</StateIcontype3>
                  </StateFlex>

                  <StateFlex>
                    <StateTxt>Anchor Latency(ms)</StateTxt>
                    <StateIcontype4>435</StateIcontype4>
                  </StateFlex>
                </NoticeFlex>

                <NoticeFlex>
                  <StateFlex>
                    <StateTxt>Label Name</StateTxt>
                    <StateIcontype5 $status="error">
                      에러 (ERROR_SYNC_TIMEOUT)
                    </StateIcontype5>
                  </StateFlex>
                </NoticeFlex>
              </NoticeBox>
            </BoxContent>

            {/* button area */}
            <ButtonWrap>
              <ButtonGroup $gap={8} $direction={'row'}>
                <Button
                  onClick={() => {}}
                  $size="large"
                  $variant="tertiary"
                  $width={65}>
                  삭제
                </Button>
                <Button
                  onClick={() => {}}
                  $size="large"
                  $variant="primary"
                  $width={65}>
                  저장
                </Button>
              </ButtonGroup>
            </ButtonWrap>
          </Box>
        )}
      </BoxContainer>
    </Container>
  );
}
