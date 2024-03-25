import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 48px 24px;

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 96px);
  }

  .table-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    width: 100%;
  }
`
