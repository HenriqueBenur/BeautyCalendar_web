// custom.d.ts
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
  declare module '*.webp' {
    const content: string;
    export default content;
  }
  declare module '*.png' {
    const content: string;
    export default content;
  }
  