// @ts-nocheck
import Box from 'components/box/Box';
import Title from 'components/title/Title';
import Button from 'components/button/Button';
import {Container} from 'components/layout/StyledLayout';
import {BoxContainer, BoxContent} from 'components/box/StyledBox';
import FormControl from 'components/formcontrol/FormControl';
import Select from 'components/select/Select';
export default function Anchor000() {
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
          </BoxContent>
        </Box>
      </BoxContainer>
    </Container>
  );
}
