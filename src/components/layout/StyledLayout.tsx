// @ts-nocheck
import styled from 'styled-components';

export const LayoutWrap = styled.div`
  background-color: ${props => props.theme.color.white};
  min-width: 1920px;
`;

export const SubLayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const SidebarButton = styled.button`
  position: absolute;
  top: 0;
  right: -1px;
  width: 30px;
  height: 40px;
  border: 1px solid #e1e2e2;
  border-right: 0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background: #fff url('/images/icons/icon-double-arrow-left.svg') no-repeat
    center / 10px 11px;
  margin-top: 16px;
  z-index: 100;
`;

export const LnbWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-right: 1px solid #e1e2e2;
  background: linear-gradient(to left, #f4f5f5, #f9fafa 3%);

  z-index: 100;
  &.collapse {
    .lnb-depth-list {
      display: none;
    }

    ${SidebarButton} {
      background-image: url('/images/icons/icon-double-arrow-right.svg');
    }
    .lnb-wrap {
      overflow-y: visible;
    }
    .lnb-list {
      padding: 0 10px;
      > li {
        justify-content: center;

        .lnb-item-left {
          gap: 0;
          width: auto;
        }
      }
    }

    .lnb-logo {
      opacity: 0;
      transition: 0.1s ease-in all;
    }

    width: 60px;
    transition: 0.1s ease-in width;

    & ~ .main-content-wrap {
      margin-left: 60px;
      transition: 0.1s ease-in margin-left;
    }
    overflow: visible;
  }
`;

export const LnbHeader = styled.div`
  width: 100%;
  height: 88px;
  padding: 25px 20px 0 24px;
`;

export const LnbHeaderLogo = styled.div`
  width: 114px;
  height: 20px;
  background: url('/images/common/skt-logo.svg') no-repeat center;
  opacity: 1;
`;

export const LnbBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

export const LnbList = styled.ul`
  padding: 0 24px;
`;

export const LnbItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  border-bottom: 1px solid #e4ebf1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  .lnb-item-left:hover {
    > a {
      text-decoration: underline;
    }
  }

  .icon {
    flex: 0 0 auto;
    margin-left: auto;
  }

  .lnb-item-left {
    position: relative;
    width: 100%;
    height: 49px;
    display: flex;
    align-items: center;

    &.active {
      > .icon {
        background-image: url('/images/icons/icon-minus-16.svg');
      }
      & + .lnb-depth-list {
        height: auto;
        min-height: 48px;
        margin-top: 2px;
      }
    }

    > a {
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      pointer-events: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .text-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.active {
      color: #4130df;
    }
  }

  .lnb-depth-list {
    width: 100%;
    height: 0;
    overflow: hidden;

    .lnb-depth-item {
      width: 100%;

      &.active {
        .lnb-depth-item-top {
          .icon:last-child {
            background-image: url('/images/icons/icon-minus-16.svg');
          }
        }

        > .lnb-depth-list {
          height: auto;
        }
      }
      .lnb-depth-item-top {
        display: flex;
        gap: 8px;
        align-items: center;
        height: 48px;
        &:hover {
          text-decoration: underline;
        }
        &.active {
          color: #4130df;
        }
      }

      .icon {
        &:first-child {
          margin-left: 0;
        }
      }

      .low-depth {
        padding-left: 46px;

        .lnb-depth-item {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #575e7d;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const LnbFooter = styled.div`
  display: flex;
  align-items: center;
  height: 66px;
  margin: 20px 20px 0;
  border-top: 1px solid #e4ebf1;

  button[aria-expanded] {
    padding: 0;
  }

  [role='option'] {
    text-align: left;
  }
  .normal-text {
    display: none;
  }
  .dropdown-group {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  &.collapse {
    .dropdown-group {
      display: none;
    }
    .normal-text {
      display: block;
    }
  }
`;

export const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
`;

export const ButtonWrap = styled.div`
  position: ${props => (props.$absolute ? 'absolute' : 'relative')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(100% - 40px);
  padding: 23px 0 30px 0;
  margin: 0 auto;
  /* border-top: 1px solid ${props => props.theme.color.gray2}; */
  border-top: ${props =>
    props.$borderNone ? 'none' : `1px solid ${props.theme.color.gray2}`};
  ${props => props.$absolute && 'left: 20px; bottom: 0;'}
  > button + button {
    margin-left: 8px;
  }
`;

export const CenterPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const FooterWrap = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 48px;
  background-color: ${props => props.theme.color.footerbg};
  border-top: 1px solid ${props => props.theme.color.footerborder};
  > div {
    padding-right: 40px;
    color: ${props => props.theme.color.text5};
    font-size: ${props => props.theme.fontSize.fontSize2};
    > span {
      &:first-child:before {
        content: none;
      }
      &:before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 0 10px;
        background-color: #afafaf;
      }
    }
    &:nth-child(2) {
      padding-right: 40px;
      color: ${props => props.theme.color.text5};
      font-size: ${props => props.theme.fontSize.fontSize2};
    }
  }
  > img {
    padding-right: 40px;
  }
`;
