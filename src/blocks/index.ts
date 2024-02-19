import dynamic from 'next/dynamic'

export const Image = dynamic(() => import('./Image').then((mod) => mod.Image))
export const Text = dynamic(() => import('./Text').then((mod) => mod.Text))
export const TextImage = dynamic(() =>
  import('./TextImage').then((mod) => mod.TextImage),
)
