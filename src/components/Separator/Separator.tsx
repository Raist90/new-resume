type SeparatorProps = {
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ ...rest }) => {
  /** @todo Add some essential styles here like `border-color` so that I don't have to add them in every usage */
  return <hr {...rest} />
}
