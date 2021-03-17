import { GlobalStyles } from './styles/global'

export const App: React.FC = () => {
  return (
    <div>
      <h1>Hello create-app</h1>
      <div style={{ fontSize: '1.6rem' }}>Teste 16</div>
      <div style={{ fontSize: '16px' }}>Teste 16</div>
      <div style={{ fontSize: '1.4rem' }}>Teste 14</div>
      <div style={{ fontSize: '1rem' }}>Teste 10</div>
      <GlobalStyles />
    </div>
  )
}
