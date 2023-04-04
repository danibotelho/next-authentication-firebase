declare module "js-cookie" {
    export function get(name: string): string | undefined;
    export function set(name: string, value: string | boolean | object , object: object): void;
    export function remove(name: string): void;
    export function getJSON(name: string): object | undefined;
    export function setJSON(name: string, value: string | number | object): void;
    export function withAttributes(value: object): {
      [key: string]: string | number | object;
    };
  }