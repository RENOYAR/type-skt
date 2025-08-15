// @ts-nocheck
import styled, {css} from 'styled-components';

const size = {
  none: css``,
  mini: css`
    height: 24px;
    font-size: ${props => props.theme.fontSize.fontSize1};
  `,
  small: css`
    height: 32px;
    font-size: ${props => props.theme.fontSize.fontSize2};
    gap: 4px;
  `,
  large: css`
    height: 36px;
    font-size: ${props => props.theme.fontSize.fontSize3};
    gap: 6px;
  `,
};

const variant = {
  none: css``,
  primary: css`
    color: ${props => props.theme.color.white};
    border: 1px solid ${props => props.theme.color.primary};
    background-color: ${props => props.theme.color.primary};

    &:active,
    &:active:hover {
      border: 1px solid #4c4b9d;
      background-color: #4c4b9d;
    }

    &:disabled,
    &:disabled:hover {
      color: ${props => props.theme.color.gray1};
      border: 1px solid ${props => props.theme.color.gray4};
      background-color: ${props => props.theme.color.gray4};
      .icon {
        opacity: ${props => props.theme.color.opacityDimed};
      }
    }

    &:hover {
      border: 1px solid #7a78ff;
      background-color: #7a78ff;
    }
  `,
  secondaryBlue: css`
    color: #3a38ff;
    border: 1px solid #4341ff;
    background-color: ${props => props.theme.color.white};

    &:active,
    &:active:hover {
      color: #4c4b9d;
      border: 1px solid #0807b4;
      background-color: #e6e4f9;
    }

    &:disabled,
    &:disabled:hover {
      color: #7e8791;
      border: 1px solid #7e8791;
      background-color: ${props => props.theme.color.white};
      .icon {
        opacity: ${props => props.theme.color.opacityDimed};
      }
    }

    &:hover {
      color: #5958ff;
      border: 1px solid #5958ff;
      background-color: #f4f3ff;
    }
  `,
  secondaryGray: css`
    color: ${props => props.theme.color.text2};
    border: 1px solid ${props => props.theme.color.gray3};
    background-color: ${props => props.theme.color.white};

    &:active,
    &:active:hover {
      color: ${props => props.theme.color.text2};
      border: 1px solid ${props => props.theme.color.gray4};
      background-color: #ebedf3;
    }

    &:disabled,
    &:disabled:hover {
      color: ${props => props.theme.color.textDimed};
      border: 1px solid ${props => props.theme.color.gray2};
      background-color: #fbfbfb;
      .icon {
        opacity: ${props => props.theme.color.opacityDimed};
      }
    }

    &:hover {
      border: 1px solid ${props => props.theme.color.gray2};
      background-color: ${props => props.theme.color.gray1};
    }
  `,
  tertiary: css`
    color: ${props => props.theme.color.text1};
    border: 1px solid ${props => props.theme.color.gray3};
    background-color: ${props => props.theme.color.white};

    &:active,
    &:active:hover {
      color: ${props => props.theme.color.text2};
      border: 1px solid ${props => props.theme.color.gray4};
      background-color: #ebedf3;
    }

    &:disabled,
    &:disabled:hover {
      color: ${props => props.theme.color.textDimed};
      border: 1px solid ${props => props.theme.color.gray2};
      background-color: #fbfbfb;
      .icon {
        opacity: ${props => props.theme.color.opacityDimed};
      }
    }

    &:hover {
      border: 1px solid #e8eaf0;
      background-color: #e8eaf0;
    }
  `,
  transparent: css`
    color: ${props => props.theme.color.gray8};
    border: 1px solid transparent;
    background-color: transparent;

    &:active,
    &:active:hover {
      color: ${props => props.theme.color.gray10};
    }

    &:disabled,
    &:disabled:hover {
      color: ${props => props.theme.color.textDimed};
      text-decoration: none;
    }

    &:hover {
      text-decoration: underline;
    }
  `,
  transparentPurple: css`
    color: ${props => props.theme.color.textSub};
    border: 1px solid transparent;
    background-color: transparent;
  `,
};

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  gap: 6px;
  color: ${props => props.theme.color.white};
  width: ${props => (props.$width ? props.$width + 'px' : 'auto')};
  min-width: ${props => (props.$minWidth ? props.$minWidth + 'px' : 'auto')};
  margin: 0;
  line-height: 20px;
  font-weight: 500;
  border-radius: 4px;
  ${props => {
    if (props.$icon && props.$size === 'large') {
      return css`
        padding: 0 19px 0 15px;
      `;
    } else if (props.$icon && props.$size === 'small') {
      return css`
        padding: 0 15px 0 11px;
      `;
    } else if (props.$size === 'mini') {
      return css`
        padding: 0 8px;
      `;
    } else {
      return css`
        padding: 0 15px;
      `;
    }
  }}

  transition: all 150ms;
  cursor: pointer;
  ${props => size[props.$size]};
  ${props => variant[props.$variant]};
  ${props =>
    props.$icon &&
    css`
      .icon {
        background-image: url('/images/icons/${props.$icon}.svg');
      }

      &:active {
        .icon {
          background-image: url('/images/icons/${props.$icon}-active.svg'), background-image: url('/images/icons/${props.$icon}.svg');
          ;
        }
      }

      &:hover {
        .icon {
          background-image: url('/images/icons/${props.$icon}-active.svg'),
            url('/images/icons/${props.$icon}.svg');
        }
      }

      &:disabled {
        .icon {
          background-image: url('/images/icons/${props.$icon}-disabled.svg'), 
          url('/images/icons/${props.$icon}.svg');
        }
      }
    `};

  > span {
    padding-left: ${props =>
      props.$icon ? '6px' : props.$iconOnly ? '0' : ''};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$flexStart ? 'flex-start' : 'center')};
  width: ${props => (props.$width ? props.$width + 'px' : 'auto')};
  gap: ${props => props.$gap}px;
  margin-left: ${props => (props.$marginLeft ? '8px' : '')};
  flex-direction: ${props => props.$direction};
  ${props => {
    if (props.$width) {
      return css`
        > button {
          width: 100%;
        }
      `;
    }
  }}
`;

export const ButtonIcon = styled.button`
  padding: 0;
  > img {
    vertical-align: top;
  }
`;
