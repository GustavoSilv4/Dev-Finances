import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Background, Container, ModalForm, ModalHeader } from './styles'

interface ModalProps {
  show: boolean
  closeModal: () => void
  createCategory: (category: string) => void
}

const NewCategoryScheme = zod.object({
  category: zod.string().min(1, 'Digite um nome para criar uma nova categoria'),
})

type NewCategoryDate = zod.infer<typeof NewCategoryScheme>

export function ModalCategory({ show, closeModal, createCategory }: ModalProps) {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(NewCategoryScheme),
    defaultValues: {
      category: '',
    },
  })

  function handleCloseModal() {
    closeModal()
  }

  function handleCreateNewCategory(data: NewCategoryDate) {
    createCategory(data.category)
    reset()
  }

  return (
    <Container show={show}>
      <Background show={show}>
        <ModalHeader>
          <h2>Crie uma categoria</h2>
        </ModalHeader>
        <div>
          <ModalForm onSubmit={handleSubmit(handleCreateNewCategory)}>
            <input type="text" {...register('category')} />
            <button type="submit">Criar</button>
          </ModalForm>
        </div>
        <button onClick={handleCloseModal}>Fechar</button>
      </Background>
    </Container>
  )
}
