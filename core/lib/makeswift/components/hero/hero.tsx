import { RichText } from "@makeswift/runtime/controls"
import { ReactNode } from "react"

interface Props {
  headline: ReactNode
}

export function Hero({headline}: Props) {
  return (
    <div className="flex gap-4 justify-center">
      <img src="https://placehold.it/500" />
      <h1>{headline}</h1>
    </div>
  )
}