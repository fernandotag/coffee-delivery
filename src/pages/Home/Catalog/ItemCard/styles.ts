import styled from 'styled-components'

export const ItemContainer = styled.li`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;

  @media (max-width: 1024px) {
    width: 44%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  ul.tags {
    list-style: none;
    padding-top: 0.75rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.25rem;

    li {
      font-size: 0.625rem;
      background-color: ${(props) => props.theme.yellowLight};
      color: ${(props) => props.theme.yellowDark};
      border-radius: 100px;
      text-align: center;
      padding: 0.25rem 0.5rem;
      margin: 0;
      line-height: 1.3;
      text-transform: uppercase;
    }
  }

  .description {
    font: 0.875rem 'Roboto', sans-serif;
    color: ${(props) => props.theme.label};
    text-align: center;
    margin-bottom: 2.06rem;
    line-height: 1.3;
  }

  img {
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  .buy {
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    width: 100%;

    .price {
      flex: 2;
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme.text};

      pre {
        font: 0.875rem 'Roboto', sans-serif;
        font-weight: 400;
        display: inline;
      }
    }

    .actions {
      display: flex;
      flex: 0;
      align-items: center;
      gap: 0.25rem;
      background: ${(props) => props.theme.button};
      padding: 0 0.53rem;

      border-radius: 6px;
      font: 1rem 'Roboto', sans-serif;

      button {
        border: 0;
        background: ${(props) => props.theme.button};
        cursor: pointer;
        display: flex;
        padding: 0 0.25rem;
        height: 2rem;
        align-items: center;
        font-family: 'Roboto', sans-serif;
      }

      button.removeAll {
        margin-left: 0.5rem;
        background: ${(props) => props.theme.button};
        border-radius: 6px;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 0.6;
        padding: 0.4rem 0.5rem;
        color: ${(props) => props.theme.text};

        svg {
          margin-right: 0.25rem;
        }
      }

      button.remove {
        border-radius: 6px 0 0 6px;
        padding-left: 0.5rem;
      }

      button.add {
        border-radius: 0 6px 6px 0;
        padding-right: 0.5rem;
      }

      .counter {
        background: ${(props) => props.theme.button};
        height: 2rem;
        display: flex;
        align-items: center;
        padding: 0 0.25rem;
        color: ${(props) => props.theme.title};
      }

      svg {
        color: ${(props) => props.theme.purple};
        width: 0.875rem;
      }
    }

    button.add-cart {
      flex: 0;
      border: 0;
      border-radius: 6px;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      background-color: ${(props) => props.theme.purpleDark};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme.white};
      }

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.purple};
      }

      &:disabled {
        opacity: 0.7;
        cursor: default;
      }
    }
  }
`
