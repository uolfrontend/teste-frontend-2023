import { useState } from 'react'
import { Button } from '../../components/Button'
import { getCustomers } from '../../services'
import { Container } from './styles'
import { ICustomers } from '../../types'
import { Table } from '../../components/Table'
import { Input } from '../../components/Input'

export function Home() {
  const [customers, setCustomers] = useState<ICustomers[]>([])
  const [filteredCustomers, setfilteredCustomers] = useState<ICustomers[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasResults, setHasResults] = useState(false)
  const [resultNotFound, setResultNotFound] = useState(false)

  async function handleGetCustomers() {
    try {
      setIsLoading(true)
      const response = await getCustomers()
      setCustomers(response.customers)
      setfilteredCustomers(response.customers)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleChange(value: string) {
    const filtered = customers.filter((item) =>
      item.email.includes(value.toLowerCase())
    )

    if (filtered.length < customers.length && filtered.length > 0) {
      setHasResults(true)
    } else {
      setHasResults(false)
    }

    if (filtered.length === 0) {
      setResultNotFound(true)
    } else {
      setResultNotFound(false)
    }

    setfilteredCustomers(filtered)
  }

  return (
    <Container>
      {customers?.length < 1 ? (
        <div className='button-content'>
          <Button
            textButton='Buscar clientes'
            size='small'
            variation='primary'
            onClick={handleGetCustomers}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <div className='table-content'>
          <Input
            inputTitle='Buscar por e-mail'
            handleChangeValue={handleChange}
            hasResults={hasResults}
            resultNotFound={resultNotFound}
          />
          <Table tableData={filteredCustomers} />
        </div>
      )}
    </Container>
  )
}
