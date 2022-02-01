/* eslint-disable @typescript-eslint/no-namespace */
/**
 * @description Паттерн объект-компаньон, реализованный с помощью пространства имен и интерфейсов
 */

interface Currency {
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD';
  value: number;
}

export namespace Currency {
  export const DEFAULT: Currency['unit'] = 'USD';

  export function from(value: number, unit = Currency.DEFAULT): Currency {
    return {
      unit,
      value,
    };
  }
}
