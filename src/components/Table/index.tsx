import { ICustomers } from '../../types'
import * as S from './styles'

interface ITable {
  tableData: ICustomers[]
}

export function Table({ tableData }: ITable) {
  return (
    <S.Container>
      <S.Table>
        <thead className='desktop-table'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        {tableData.map((item) => (
          <tbody className='desktop-table' key={item.id}>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
        {tableData.map((item) => (
          <tbody className='mobile-table' key={item.id}>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
              <th>Email</th>
              <td>{item.email}</td>
              <th>Phone</th>
              <td>{item.phone}</td>
              <th>Status</th>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
      </S.Table>
      {/* <S.Table>
        {tableData.map((item) => (
          <tbody className='mobile-table' key={item.id}>
            <tr>
              <th>Name</th>
              <td>{item.name}</td>
              <th>Email</th>
              <td>{item.email}</td>
              <th>Phone</th>
              <td>{item.phone}</td>
              <th>Status</th>
              <td>{item.status}</td>
            </tr>
          </tbody>
        ))}
      </S.Table> */}
    </S.Container>
  )
}
