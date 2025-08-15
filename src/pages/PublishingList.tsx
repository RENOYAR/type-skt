// @ts-nocheck
import React, {useLayoutEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import GuideTable from './guide/GuideTable';
import Button from '../components/button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 80px;
`;

const StyledH1 = styled.h1`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: ${props => props.theme.fontSize.fontSize8};
  font-weight: 700;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.gray8};
  border-bottom: 1px solid #e6e7e7;
`;

const StyledH2 = styled.h2`
  margin-top: 0.6rem;
  padding: 0.6rem 1rem;
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.color.white};
  font-size: ${props => props.theme.fontSize.fontSize4};
  background: ${props => props.theme.color.gray10};
  border-radius: 4px 4px 0 0;
`;

const StyledFooter = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.gray3};
  background: ${props => props.theme.color.gray8};

  button {
    margin: 0.2rem 0.4rem;
  }
`;

const StyledGuideWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export default function PublishingList({data}) {
  const date = new Date();
  const formatDate = date => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    const year = d.getFullYear();
    const format = `${year}.${`00${month.toString()}`.slice(
      -2,
    )}.${`00${day.toString()}`.slice(-2)}`;

    return format;
  };
  // #hash link
  const ScrollToHashElement = () => {
    const location = useLocation();

    useLayoutEffect(() => {
      const {hash} = location;

      const removeHashCharacter = str => {
        const result = str.slice(1);
        return result;
      };

      if (hash) {
        const element = document.getElementById(removeHashCharacter(hash));

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            inline: 'nearest',
          });
        }
      }
    }, [location]);

    return null;
  };

  const theadTitle = [
    'NO',
    'Screen ID',
    'depth2',
    'depth3',
    'depth4',
    'path',
    'status',
    'create',
    'update',
    'log',
  ];

  return (
    <StyledGuideWrapper>
      <div>
        <StyledH1>SKT RTLS</StyledH1>
      </div>
      <StyledWrapper>
        <div style={{marginBottom: '10px', marginTop: '60px'}}>
          <Link
            to="/guidelist"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: 700,
              padding: '6px 10px',
              borderRadius: '6px',
              backgroundColor: '#5755FF',
            }}>
            Guide List
          </Link>
        </div>
        {data.map((data, idx) => (
          <div key={idx} id={`section-${idx}`}>
            <StyledH2>{data.depth1}</StyledH2>
            <div>
              <GuideTable>
                <colgroup>
                  <col width="50px" />
                  <col width="350px" />
                  <col width="150px" />
                  <col width="150px" />
                  <col width="150px" />
                  <col width="300px" />
                  <col width="80px" />
                  <col width="90px" />
                  <col width="90px" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    {theadTitle.map((title, index) => (
                      <th key={index}>{title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.below &&
                    data.below.map((subdata, subIdx) => (
                      <tr key={subIdx}>
                        <td>{subIdx + 1}</td>
                        <td style={{textAlign: 'left'}}>
                          <Link to={subdata.path} target="_blank">
                            {subdata.id}
                          </Link>
                        </td>
                        <td style={{textAlign: 'left'}}>
                          <Link to={subdata.path} target="_blank">
                            {subdata.depth2}
                          </Link>
                        </td>
                        <td style={{textAlign: 'left'}}>
                          <Link to={subdata.path} target="_blank">
                            {subdata.depth3}
                          </Link>
                        </td>
                        <td style={{textAlign: 'left'}}>
                          <Link to={subdata.path} target="_blank">
                            {subdata.depth4}
                          </Link>
                        </td>
                        <td style={{textAlign: 'left'}}>
                          <Link to={subdata.path} target="_blank">
                            {subdata.path}
                          </Link>
                        </td>
                        <td>
                          {subdata.status === '진행' && (
                            <span className="badge ing">{subdata.status}</span>
                          )}
                          {subdata.status === '수정완료' && (
                            <span className="badge modify">
                              {subdata.status}
                            </span>
                          )}
                          {subdata.status === '완료' && (
                            <span className="badge complete">
                              {subdata.status}
                            </span>
                          )}
                        </td>
                        <td>{subdata.create}</td>
                        <td>{subdata.update}</td>
                        <td style={{textAlign: 'left'}}>
                          <ul>
                            {subdata.log.map((item, logIdx) => {
                              return (
                                <li
                                  style={{textAlign: 'left'}}
                                  className={`${
                                    formatDate(date) === item.date &&
                                    'highlight'
                                  }`}
                                  key={logIdx}>
                                  <span
                                    style={{
                                      paddingRight: '4px',
                                      fontWeight: '600',
                                    }}>
                                    [{item.date}]
                                  </span>
                                  <span>{item.text}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </GuideTable>
            </div>
          </div>
        ))}
      </StyledWrapper>
      <StyledFooter>
        <ScrollToHashElement />
        {data.map((data, index) => (
          <Link to={`#section-${index}`} id={index} key={data.depth1}>
            <Button $variant="secondaryGray" $size="small" onClick={() => {}}>
              {data.depth1}
            </Button>
          </Link>
        ))}
      </StyledFooter>
    </StyledGuideWrapper>
  );
}
