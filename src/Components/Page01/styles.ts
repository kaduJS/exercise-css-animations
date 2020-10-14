import styled from 'styled-components';

export const Container = styled.section`
  width: inherit;
  height: inherit;

  div:nth-child(1) {
    background-color: var(--palette02-bg-color05);
  }
  div:nth-child(2) {
    background-color: var(--palette02-bg-color02);
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  animation: fade-in 1s;
`;

export const Button = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5%;
  a {
    position: inherit;

    padding: 5px;
    padding-top: 10px;

    width: 75px;
    height: 95px;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    border: 5px solid var(--palette02-bg-color02);
    background-color: transparent;

    h4 {
      margin-left: 2px;
      color: var(--palette02-bg-color02);
    }
    svg {
      color: var(--palette02-bg-color02);
    }
  }

  z-index: 10;
`;

export const Title = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 5px;
  justify-self: center;
  align-self: center;
  text-shadow: var(--font-shadow02);
  box-shadow: var(--shadow01);
  border: 5px solid var(--palette02-bg-color02);
  border-radius: 8px;

  background-color: rgba(0, 0, 0, 0.2) !important;

  a {
    padding: 25px;
    width: inherit;
    height: inherit;
    color: var(--palette02-bg-color02);
    background-color: transparent !important;
  }
  z-index: 10;
`;

export const Title02 = styled.div`
  position: absolute;
  top: 150%;
  padding: 5px;
  justify-self: center;
  align-self: center;
  text-shadow: var(--font-shadow02);
  box-shadow: var(--shadow01);
  border: 5px solid var(--palette02-bg-color02);
  border-radius: 8px;

  background-color: var(--palette02-bg-color05) !important;

  a {
    padding: 25px;
    width: 120px;
    height: 120px;
    color: var(--palette02-bg-color02);
    background-color: transparent !important;
    /* background-color: orange; */
  }

  z-index: 10;
`;

export const Content = styled.div`
  width: inherit;
  height: inherit;

  display: flex;
  flex-direction: column;
`;

export const Waves = styled.div`
  position: absolute;
  bottom: 0;
  width: inherit;
  height: 100%;

  overflow: hidden;

  background-color: transparent !important;

  svg {
    position: absolute;
    bottom: 0;

    width: 175%;

    path {
      fill-opacity: 1;
    }

    @keyframes move-wave01 {
      from {
        transform: translateX(-500px);
      }
    }

    @keyframes move-wave02 {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(-500px);
      }
    }

    @keyframes move-wave03 {
      from {
        transform: translateX(500px);
      }
    }

    path.wave01 {
      fill: var(--palette02-bg-color03);
      animation: move-wave01 15s infinite alternate-reverse;
    }

    path.wave02 {
      fill: var(--palette02-bg-color04);
      animation: move-wave02 15s infinite alternate-reverse;
    }

    path.wave03 {
      fill: var(--palette02-bg-color02);
      animation: move-wave02 20s infinite alternate;
    }
  }
`;
