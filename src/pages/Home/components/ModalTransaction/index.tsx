import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CategoriesData, TransactionListData } from '../..'
import { Background, Container, ModalForm, ModalHeader } from './styles'

interface ModalProps {
  show: boolean
  closeModal: () => void
  categories: CategoriesData[]
  createTransaction: (data: TransactionListData) => void
}

const TransactionValidationScheme = zod.object({
  title: zod.string().min(1, 'Digite um titulo para a transação!'),
  value: zod.string().min(1),
  category: zod.string().min(1),
  date: zod.string().min(1),
  type: zod.string().min(1),
})

type TransactionData = zod.infer<typeof TransactionValidationScheme>

export function ModalTransaction({ show, closeModal, categories, createTransaction }: ModalProps) {
  const { register, handleSubmit, reset } = useForm<TransactionData>({
    resolver: zodResolver(TransactionValidationScheme),
    defaultValues: {
      title: '',
      value: '',
    },
  })

  function handleCreateNewTransaction(data: TransactionData) {
    createTransaction({ ...data, id: new Date().getTime() })
    reset()
  }

  function handleCloseModal() {
    closeModal()
  }

  return (
    <Container show={show}>
      <Background show={show}>
        <ModalHeader>
          <h2>Crie uma nova Transação</h2>
        </ModalHeader>
        <div>
          <ModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input type="text" placeholder="Digite o titulo" {...register('title')} />
            <input
              type="number"
              min="0.00"
              step="0.01"
              placeholder="Digite o valor (Ex: 250,00)"
              {...register('value')}
            />
            <label>Tipo da Transação</label>
            <div>
              <div>
                <label htmlFor="deposito">Deposito</label>
                <input type="radio" id="deposito" value={'Deposito'} {...register('type')} />
              </div>
              <div>
                <label htmlFor="saque">Saque</label>
                <input type="radio" id="saque" value={'Saque'} {...register('type')} />
              </div>
            </div>
            <label htmlFor="categorias">Selecione uma categoria</label>
            <select id="categorias" {...register('category')}>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <input type="date" {...register('date')} />
            <button type="submit">Criar</button>
          </ModalForm>
        </div>
        <button onClick={handleCloseModal}>Fechar</button>
      </Background>
    </Container>
  )
}
