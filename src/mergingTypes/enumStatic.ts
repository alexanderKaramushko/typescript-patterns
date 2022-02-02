/* eslint-disable no-redeclare */
/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-namespace */

export enum Qq {
  ONE,
}

export namespace Qq {
  export function test(): void {
    // eslint-disable-next-line no-console
    console.log('called in from enum');
  }
}
