import { RichText } from "@makeswift/runtime/controls"
import { runtime } from "../../runtime"
import { Hero } from "./hero"

runtime.registerComponent(Hero, {
  type: "hero",
  label: "Hero",
  props: {
    headline: RichText(),
  },
})