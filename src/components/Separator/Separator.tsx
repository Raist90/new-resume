type SeparatorProps = {
  className?: string
}

export const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return <hr className={`border-gray-600 ${className}`} />
}
