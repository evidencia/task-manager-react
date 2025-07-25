import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

export function SidebarButton({ children, color }) {
  const sidebar = tv({
    base: 'flex items-center gap-2 rounded-lg px-6 py-3',
    variants: {
      color: {
        selected: 'bg-brand-primary bg-opacity-15 text-brand-primary',
        unselected: 'text-brand-dark-blue',
      },
    },
  })

  return <a className={sidebar({ color })}>{children}</a>
}

SidebarButton.protoType = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['selected', 'unselected']),
}
