import DefaultTheme from "./theme-default/without-fonts";
import type { Theme } from "vitepress";
import "../custom.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;
