import { useState } from 'react'
import { Button } from '../../components/Button'
import { getCustomers } from '../../services'
import { Container } from './styles'
import { ICustomers } from '../../types'
import { Table } from '../../components/Table'

export function Home() {
  const [customers, setCustomers] = useState<ICustomers[]>([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleGetCustomers() {
    try {
      setIsLoading(true)
      const response = await getCustomers()
      setCustomers(response.customers)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      {customers?.length < 1 ? (
        <Button
          size='small'
          variation='primary'
          onClick={handleGetCustomers}
          isLoading={isLoading}
        />
      ) : (
        <Table tableData={customers} />
      )}
    </Container>
  )
}
