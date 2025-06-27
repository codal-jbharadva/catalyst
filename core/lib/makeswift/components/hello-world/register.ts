import { runtime } from "../../runtime";
import HelloWorld from "./client";

runtime.registerComponent(HelloWorld, {
  type: "hello-world",
  label: "Basic / Hello World",
});