declare module '*.css' {
  const styles: { [className: string]: string };
  export default styles;
}

declare var window: Window;
