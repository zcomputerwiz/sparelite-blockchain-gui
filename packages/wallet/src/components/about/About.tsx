import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import icon from './flaxlight_circle.svg';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    width: 100%;
    height: 100%;
    user-select: none;
    background-color: silver;
  }

  body { 
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(31, 31, 31);
    background-color: rgb(238, 238, 238);
    font-size: 12px;
    font-family: 'Helvetica', 'Arial', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLogoContainer = styled.div`
  width: 200px;

  img {
    height: 200px;
    margin-bottom: 2rem;
  }
`;

const StyledTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  color: rgb(31, 31, 31);
`;

const StyledSubTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  color: rgb(31, 31, 31);
`;

const BugReport = styled.a`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  color: rgb(128, 160, 194);
`;

const VersionsTable = styled.table`
  border-collapse: collapse;
  color: rgb(153, 153, 153);
  font-size: 12px;
`;

const Spacer = styled.div`
  margin-bottom: 1rem;
`;

const url = 'https://flaxnetwork.org';

type Props = {
  version: string;
  packageJson: {
    productName: string;
    description: string;
  };
  versions: {
    [key: string]: string;
  };
};

export default function About(props: Props) {
  const {
    version,
    packageJson: { productName, description },
    versions,
  } = props;

  return (
    <html>
      <head>
        <base href="./" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, initial-scale=1, user-scalable=yes"
        />
        <title>About {productName}</title>
      </head>
      <body>
        <GlobalStyle />
        <StyledLink href={url}>
          <StyledLogoContainer>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4wIgogICB3aWR0aD0iMTAyNHB4IgogICBoZWlnaHQ9IjEwMjRweCIKICAgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIKICAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIKICAgaWQ9InN2ZzEwIgogICBzb2RpcG9kaTpkb2NuYW1lPSJmbGF4bGlnaHRfY2lyY2xlLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45Mi41ICgyMDYwZWMxZjlmLCAyMDIwLTA0LTA4KSIKICAgaW5rc2NhcGU6ZXhwb3J0LWZpbGVuYW1lPSIvaG9tZS9mbGF4L2dpdC9vdmVycmlkZXNfbGlnaHQvZmxheC1ibG9ja2NoYWluLWd1aS9wYWNrYWdlcy93YWxsZXQvc3JjL2Fzc2V0cy9pbWcvY2lyY2xlLWNyb3BwZWQucG5nIgogICBpbmtzY2FwZTpleHBvcnQteGRwaT0iMzYuMTY5OTk4IgogICBpbmtzY2FwZTpleHBvcnQteWRwaT0iMzYuMTY5OTk4Ij4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGExNiI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczE0Ij4KICAgIDxmaWx0ZXIKICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgIHN0eWxlPSJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6c1JHQiIKICAgICAgIGlkPSJmaWx0ZXIxNTczIgogICAgICAgeD0iLTAuMDczMjAwMDAyIgogICAgICAgd2lkdGg9IjEuMTQ2NCIKICAgICAgIHk9Ii0wLjA3MzIwMDAwMiIKICAgICAgIGhlaWdodD0iMS4xNDY0Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyCiAgICAgICAgIGlua3NjYXBlOmNvbGxlY3Q9ImFsd2F5cyIKICAgICAgICAgc3RkRGV2aWF0aW9uPSIwLjM3OTA1NSIKICAgICAgICAgaWQ9ImZlR2F1c3NpYW5CbHVyMTU3NSIgLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpZD0ibmFtZWR2aWV3MTIiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjAuNDY3NzczNDQiCiAgICAgaW5rc2NhcGU6Y3g9IjkuMTUwMTY5NSIKICAgICBpbmtzY2FwZTpjeT0iODQ1LjcwMjY1IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTg0OCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMTM2IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI3MiIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjciCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcxMCIgLz4KICA8ZwogICAgIGlkPSJnMTU4NCIKICAgICB0cmFuc2Zvcm09Im1hdHJpeCg3NS4zMzMxMjIsMCwwLDc1LjMzMzEyMiwtMzc2Mi43NjI0LC03NzUwLjg0ODYpIj4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNzU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtmaWx0ZXI6dXJsKCNmaWx0ZXIxNTczKSIKICAgICAgIGlkPSJwYXRoOTQwLTIiCiAgICAgICBjeD0iNTYuOTM1NTIiCiAgICAgICBjeT0iMTA5Ljc4NDc5IgogICAgICAgcj0iNi4yMTQwMTY0IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC45NDk0NzA0NCwwLDAsMC45NDk0NzA0NCwyLjcwMjc3MDksNS40NDAwMzg5KSIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuOTgxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC43NTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGg5NDAiCiAgICAgICBjeD0iNTYuNzk0NzczIgogICAgICAgY3k9IjEwOS42NDQwNiIKICAgICAgIHI9IjYuMjE0MDE2NCIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuOTQ5NDcwNDQsMCwwLDAuOTQ5NDcwNDQsMi43MDI3NzA5LDUuNDQwMDM4OSkiIC8+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC44NzEyNDAwNSwwLDAsMC44NzEyNDAwNSwxLjQ4MjE0NTQsMy4wODYyMjE2KSIKICAgICAgIGlkPSJnMTE3MSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuNjY2MDAwMDE7ZmlsbDojMDA0ZTgwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozLjA3NzY2MTc1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gNjUuOTc2ODI1LDExNy4zMzk1NyBjIC0wLjI4NTI3MSwtMC4wMDcgLTAuNTI5NjE2LDAuMDAyIC0wLjc0NTY5MSwwLjAzMTUgLTAuMDgyNzQsMC4wNDk1IC0wLjcwOTg2OSwwLjY3NTQgLTEuNTE0MTE4LDEuNTczNTUgMC4xOTEyNDYsMC4xNjQ5NSAwLjM4MDQ4NCwwLjMzNzAzIDAuNTY1ODU3LDAuNTE2NzYgMC4zMTY1MDUsMC4zMDY4NyAwLjYxOTI3OCwwLjYzOTI1IDAuOTA3NDM5LDAuOTg3NTQgMC42ODc0ODgsLTAuOTU3MzMgMS4zMTU4MSwtMS45Nzk4MiAxLjc3ODcwMSwtMy4wNDMyMiAtMC4zODA3OTcsLTAuMDM2MSAtMC43MDY5MTQsLTAuMDU5MiAtMC45OTIxODgsLTAuMDY2MiB6IG0gLTQuNTc2NDYzLDQuNDQ4ODIgYyAtMC43MjgyMTMsMS4wMDQ1MSAtMS4zNTkwMTksMi4wMjg0OCAtMS42Njc2LDIuODkxMyAwLjYzNzQxOCwwLjE1MjkgMS40NjczNzYsMC4xMTA2NCAxLjg4NTY3NSwwLjAzNDYgMC4zNzU0NzUsLTAuNDI1MDIgMC44MDc1MjksLTAuOTAyMjkgMS4yNTcyODYsLTEuNDExOCAtMC40NjAxMzksLTAuMzk5MjkgLTAuODkyMDkzLC0wLjgyNzIyIC0xLjI4MTU3NSwtMS4yNzY5MiAtMC4wNjc0OCwtMC4wNzc5IC0wLjEyODU3NywtMC4xNTgzMSAtMC4xOTM3ODYsLTAuMjM3MiB6IgogICAgICAgICBpZD0icmVjdDQ1OTEtNi0zLTIiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDRlODA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMTA1MDg5MDZweDtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJtIDU5LjcxNjc0NCwxMTcuMjM2MjIgYyAwLjI5Nzk4OSwyLjY1MjE1IDMuMzM3MzY5LDYuNjE0MjEgNi45Nzc4NjcsNy42NjcyMyAtMi4wMjE3MTksLTIuMTM4OTIgLTQuMjgwMjM5LC00LjUzMDA0IC01LjY1MDI5OSwtNS45Mjc4IDEuODQ4NzczLDEuMjEzMDkgMy45MDkzNTYsMy4yMTQ2IDUuNTEyODQsNS4wMDY0MSAtMS4wMDk3NDYsLTMuNTIxNyAtNC42MTE2NjQsLTYuMTY0NDEgLTYuODQwNDA4LC02Ljc0NTg0IHoiCiAgICAgICAgIGlkPSJwYXRoNDUzNy02LTQtNSIgLz4KICAgIDwvZz4KICA8L2c+CiAgPHRleHQKICAgICB4bWw6c3BhY2U9InByZXNlcnZlIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2OS4xMzAxNDIyMXB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1vcGFjaXR5OjE7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmUiCiAgICAgeD0iMjI2LjgxNzE4IgogICAgIHk9IjgyNi44OTM0MyIKICAgICBpZD0idGV4dDE1NS01Ij48dHNwYW4KICAgICAgIHNvZGlwb2RpOnJvbGU9ImxpbmUiCiAgICAgICBpZD0idHNwYW4xNTMtOSIKICAgICAgIHg9IjIyNi44MTcxOCIKICAgICAgIHk9IjgyNi44OTM0MyIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTonRGVqYVZ1IFNhbnMnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0RlamFWdSBTYW5zIEJvbGQnO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MjA7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZSI+TElHSFQ8L3RzcGFuPjwvdGV4dD4KICA8ZwogICAgIGFyaWEtbGFiZWw9IkxJR0hUIgogICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zaXplOjE2MS4xMzU2OTY0MXB4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiMwMDRlODA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjQuMDI4MzkyMzEiCiAgICAgaWQ9InRleHQxNTUiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMTM3Nzg3KSI+CiAgICA8cGF0aAogICAgICAgZD0ibSAyNTguMTMwMDMsNzE1LjUzODEgaCAzMC4yOTE2MiB2IDk0LjU3MjgxIGggNTMuMTg3MzcgdiAyMi44OTU3NCBoIC04My40Nzg5OSB6IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OidEZWphVnUgU2Fucyc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonRGVqYVZ1IFNhbnMgQm9sZCc7ZmlsbDojMDA0ZTgwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDo0LjAyODM5MjMxIgogICAgICAgaWQ9InBhdGg1MzY4IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDM2MC44MDY4Miw3MTUuNTM4MSBoIDMwLjI5MTYyIHYgMTE3LjQ2ODU1IGggLTMwLjI5MTYyIHoiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6J0RlamFWdSBTYW5zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidEZWphVnUgU2FucyBCb2xkJztmaWxsOiMwMDRlODA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjQuMDI4MzkyMzEiCiAgICAgICBpZD0icGF0aDUzNzAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gNTI2LjM0ODU3LDgyNC4yNzMyMiBxIC0xMS4zMjk4Niw1LjUwNzU3IC0yMy41MjUxOSw4LjI2MTM2IC0xMi4xOTUzMiwyLjc1Mzc4IC0yNS4xNzc0NSwyLjc1Mzc4IC0yOS4zNDc0NywwIC00Ni40OTk2MSwtMTYuMzY1MzQgLTE3LjE1MjEzLC0xNi40NDQwMyAtMTcuMTUyMTMsLTQ0LjUzMjYyIDAsLTI4LjQwMzMyIDE3LjQ2Njg1LC00NC42ODk5OCAxNy40NjY4NiwtMTYuMjg2NjcgNDcuODM3MTYsLTE2LjI4NjY3IDExLjcyMzI1LDAgMjIuNDIzNjcsMi4yMDMwMyAxMC43NzkxLDIuMjAzMDMgMjAuMjk5MzIsNi41MzA0IHYgMjQuMzExOTggcSAtOS44MzQ5NCwtNS41ODYyNSAtMTkuNTkxMiwtOC4zNDAwMyAtOS42Nzc1OSwtMi43NTM3OSAtMTkuNDMzODUsLTIuNzUzNzkgLTE4LjA5NjI5LDAgLTI3LjkzMTI0LDEwLjE0OTY3IC05Ljc1NjI2LDEwLjA3MDk4IC05Ljc1NjI2LDI4Ljg3NTM5IDAsMTguNjQ3MDUgOS40NDE1NSwyOC43OTY3MSA5LjQ0MTU0LDEwLjE0OTY2IDI2LjgyOTcyLDEwLjE0OTY2IDQuNzIwNzcsMCA4LjczMzQzLC0wLjU1MDc2IDQuMDkxMzMsLTAuNjI5NDQgNy4zMTcyLC0xLjg4ODMxIHYgLTIyLjgxNzA2IGggLTE4LjQ4OTcgdiAtMjAuMjk5MzMgaCA0Ny4yMDc3MyB6IgogICAgICAgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtZmFtaWx5OidEZWphVnUgU2Fucyc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonRGVqYVZ1IFNhbnMgQm9sZCc7ZmlsbDojMDA0ZTgwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDo0LjAyODM5MjMxIgogICAgICAgaWQ9InBhdGg1MzcyIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDU1My4wMjA5Myw3MTUuNTM4MSBoIDMwLjI5MTYyIHYgNDQuNzY4NjYgaCA0NC42ODk5OCBWIDcxNS41MzgxIGggMzAuMjkxNjIgViA4MzMuMDA2NjUgSCA2MjguMDAyNTMgViA3ODMuMjAyNSBoIC00NC42ODk5OCB2IDQ5LjgwNDE1IGggLTMwLjI5MTYyIHoiCiAgICAgICBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1mYW1pbHk6J0RlamFWdSBTYW5zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidEZWphVnUgU2FucyBCb2xkJztmaWxsOiMwMDRlODA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjQuMDI4MzkyMzEiCiAgICAgICBpZD0icGF0aDUzNzQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gNjczLjg3MjcyLDcxNS41MzgxIGggMTA4LjI2MzA0IHYgMjIuODk1NzUgaCAtMzguOTQ2MzcgdiA5NC41NzI4IGggLTMwLjI5MTYyIHYgLTk0LjU3MjggaCAtMzkuMDI1MDUgeiIKICAgICAgIHN0eWxlPSJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LWZhbWlseTonRGVqYVZ1IFNhbnMnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0RlamFWdSBTYW5zIEJvbGQnO2ZpbGw6IzAwNGU4MDtmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6NC4wMjgzOTIzMSIKICAgICAgIGlkPSJwYXRoNTM3NiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgPC9nPgo8L3N2Zz4K" />
          </StyledLogoContainer>

          <StyledTitle>
            {productName} {version}
          </StyledTitle>
        </StyledLink>
        <StyledSubTitle>{description}</StyledSubTitle>
        <Spacer />
        <div className="copyright">Copyright (c) 2021 Chia Network, Flax Network</div>
        <Spacer />
        <VersionsTable>
          {versions?.electron && (
            <tr>
              <td>Electron</td>
              <td>{versions?.electron}</td>
            </tr>
          )}
          {versions?.chrome && (
            <tr>
              <td>Chrome</td>
              <td>{versions?.chrome}</td>
            </tr>
          )}
          {versions?.node && (
            <tr>
              <td>Node</td>
              <td>{versions?.node}</td>
            </tr>
          )}
          {versions?.v8 && (
            <tr>
              <td>V8</td>
              <td>{versions?.v8}</td>
            </tr>
          )}
        </VersionsTable>

        <BugReport
          href="https://github.com/Flax-Network/flax-blockchain/issues"
          target="_blank"
        >
          Report an issue
        </BugReport>
        {'{{CSS}}'}
      </body>
    </html>
  );
}
