import useReveal from '../hooks/useReveal'

/** Wrapper that fades/slides its content in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, shown] = useReveal()
  return (
    <Tag ref={ref} className={`reveal${shown ? ' in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
