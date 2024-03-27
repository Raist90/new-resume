'use client'
import { useEffect, useRef } from 'react'

declare const UNDEFINED_VOID_ONLY: unique symbol
type Destructor = () => void | { [UNDEFINED_VOID_ONLY]: never }

/** @description This is like `useEffect` but it only runs once. */
export const useEffectOnce = (
  effect: () => void | Destructor,
  deps?: readonly unknown[],
): void => {
  const hasRun = useRef(false)

  useEffect(
    () => {
      if (hasRun.current) return

      hasRun.current = true
      effect()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  )
}
