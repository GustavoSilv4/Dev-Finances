import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CategoriesData, TransactionListData } from '../..'
import { Background, ButtonClose, ButtonIncome, ButtonOutcome, Container, ModalForm, ModalHeader } from './styles'
import { useState } from 'react'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'

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
})

type TransactionData = zod.infer<typeof TransactionValidationScheme>

export function ModalTransaction({ show, closeModal, categories, createTransaction }: ModalProps) {
  const [buttonType, setButtonType] = useState<'income' | 'outcome' | null>(null)

  const { register, handleSubmit, reset } = useForm<TransactionData>({
    resolver: zodResolver(TransactionValidationScheme),
    defaultValues: {
      title: '',
      value: '',
    },
  })

  function handleCreateNewTransaction(data: TransactionData) {
    if (buttonType === null) {
      return
    }
    createTransaction({ ...data, id: new Date().getTime(), type: buttonType, date: new Date() })
    reset()
  }

  function handleCloseModal() {
    closeModal()
    setButtonType(null)
    reset()
  }

  return (
    <Container show={show}>
      <Background show={show}>
        <ModalHeader>
          <h2>Cadastrar nova Transação</h2>
        </ModalHeader>
        <div>
          <ModalForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input type="text" placeholder="Titulo" {...register('title')} />
            <input type="number" min="0.00" step="0.01" placeholder="Preço (Ex: 250,00)" {...register('value')} />
            <div>
              <ButtonIncome type="button" onClick={(e) => setButtonType('income')} typeButtonProps={buttonType}>
                <ArrowCircleUp size={24} />
                Income
              </ButtonIncome>
              <ButtonOutcome type="button" onClick={(e) => setButtonType('outcome')} typeButtonProps={buttonType}>
                <ArrowCircleDown size={24} />
                Outcome
              </ButtonOutcome>
            </div>
            <select id="categorias" {...register('category')}>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            <button type="submit">Enviar</button>
          </ModalForm>
        </div>
        <ButtonClose onClick={handleCloseModal}>Fechar</ButtonClose>
      </Background>
    </Container>
  )
}
