import { Button } from '../../components/Button'
import { getCustomers } from '../../services'
import { Container } from './styles'

export function Home() {
  async function handleGetCustomers() {
    const response = await getCustomers()
    console.log(response)
  }
  return (
    <Container>
      <Button size='small' variation='primary' onClick={handleGetCustomers} />
    </Container>
  )
}
