export const validateComment = ({ name, content }) => {
  const errors = {}
  if (!name?.trim()) errors.name = 'Nombre obligatorio'
  if (!content?.trim()) errors.content = 'El comentario no puede estar vacío'
  return errors
}
