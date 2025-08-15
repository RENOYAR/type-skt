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
import {ButtonWrap} from 'components/layout/StyledLayout';
import {ButtonGroup} from 'components/button/StyledButton';
export default function Anchor010() {
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
            <Button
              $variant="tertiary"
              $size="mini"
              onClick={() => setIsOpen(true)}>
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
          </BoxContent>
        </Box>
        {/* 두번째 BoxWrap */}
        {isOpen && (
          <Box $widthSize={600}>
            <Title>
              <h3>Anchor 등록</h3>
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
                <TextField
                  id="TextField01"
                  name="TextField01"
                  type="text"
                  $error
                  $errorMessage="Anchor ID를 입력하여 주세요."
                />
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
                  $error
                  $errorMessage="Anchor Firmware Version을 입력하여 주세요."
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
                  $error
                  $errorMessage="Anchor Protocol Version을 입력하여 주세요."
                />
              </FormControl>

              <FormControl
                title="Timeout(ms)"
                htmlFor="TextField05"
                required
                $gapSmall
                $mtop>
                <FormFlex $start>
                  <TextField
                    id="TextField06"
                    name="TextField06"
                    type="text"
                    $error
                    $errorMessage="Timeout을 입력하여 주세요."
                  />
                  <span style={{paddingTop: '5px'}}>~</span>
                  <TextField
                    id="TextField07"
                    name="TextField07"
                    type="text"
                    $error
                  />
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
                  $error
                  $errorMessage="Anchor Name을 입력하여 주세요."
                />
              </FormControl>
              <FormControl title="IP" htmlFor="TextField05" required $gapSmall>
                <TextField
                  id="TextField05"
                  name="TextField05"
                  type="text"
                  $error
                  $errorMessage="IP를 입력하여 주세요."
                />
              </FormControl>
            </BoxContent>

            {/* button area */}
            <ButtonWrap>
              <ButtonGroup $gap={8} $direction={'row'}>
                <Button
                  onClick={() => {}}
                  $size="large"
                  $variant="tertiary"
                  $width={65}>
                  취소
                </Button>
                <Button
                  onClick={() => {}}
                  $size="large"
                  $variant="primary"
                  $width={65}>
                  등록
                </Button>
              </ButtonGroup>
            </ButtonWrap>
          </Box>
        )}
      </BoxContainer>
    </Container>
  );
}
