export type CreateStatus = {
  status: 'OK' | 'ERR';
  msg: string;
};

export function createContext(
  componentName: string,
  contextPath: string
): Promise<CreateStatus>;

export function createComponent(
  componentName: string,
  componentPath: string,
  noStyles: boolean,
  noTypes: boolean
): Promise<CreateStatus>;

export function validateInput(name: string): true | string;
