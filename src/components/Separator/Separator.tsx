type SeparatorProps = {
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ ...rest }) => {
  return <hr {...rest} />
}
