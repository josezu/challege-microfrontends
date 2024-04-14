/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'header/Header' {
  export * from '@header/components/Header';
}

declare module 'actions/Actions' {
  export * from '@actions/components/Actions';
}

declare module 'list/List' {
  export * from '@list/components/List';
}
