import styled from 'styled-components';

export const Container = styled.section`
  flex-grow: 1;

  width: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(64, 5, 9);
  background: -moz-linear-gradient(
    125deg,
    rgba(64, 5, 9, 1) 0%,
    rgba(255, 20, 36, 1) 50%,
    rgba(194, 16, 27, 1) 100%
  );
  background: -webkit-linear-gradient(
    125deg,
    rgba(64, 5, 9, 1) 0%,
    rgba(255, 20, 36, 1) 50%,
    rgba(194, 16, 27, 1) 100%
  );
  background: linear-gradient(
    125deg,
    rgba(64, 5, 9, 1) 0%,
    rgba(255, 20, 36, 1) 50%,
    rgba(194, 16, 27, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#400509",endColorstr="#c2101b",GradientType=1);

  h1 {
    position: absolute;
    top: 50px;
    text-align: center;
    color: var(--font-color01);
    text-shadow: var(--font-shadow01);

    animation: fade-out 1s;
  }

  @media (max-width: 650px) {
    margin-top: 50px;
  }

  @media (max-width: 524px) {
    margin-top: 85px;
  }

  @keyframes fade-out {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spin-left {
    0% {
      top: -500px;
      font-size: 0px;
      transform: rotate(0);
    }

    85% {
      top: 15px;
      font-size: 0px;
    }

    95% {
      top: -10px;
      font-size: 5px;
      transform: rotate(360deg);
    }

    100% {
      top: 0px;
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.div`
  width: inherit;
  min-height: 250px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;

  box-shadow: var(--shadow01);

  background-color: var(--palette01-bg-color02);

  a {
    position: relative;

    margin: 15px 15px;
    padding-top: 18px;

    width: 100px;
    height: 50px;

    font-weight: 700;
    text-align: center;

    box-shadow: var(--shadow01);

    border-radius: 8px;

    color: var(--font-color01);
    text-shadow: var(--font-shadow01);
    background-color: var(--palette01-bg-color04);

    animation: fade-out 5s;
    animation: spin-left 2.5s;
  }

  a:hover {
    background-color: var(--palette01-bg-color05);
  }
`;

export const BoxA = styled.div`
  position: relative;
  top: 0;

  margin-top: 0;
  padding-top: 0;
  /* overflow: hidden; */

  width: inherit;
  height: 50%;

  img {
    position: relative;
    /* width: 200%; */
    /* height: 200%; */
    overflow: hidden;
  }
`;
export const BoxB = styled.div``;
