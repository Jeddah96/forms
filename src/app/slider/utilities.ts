

/*Utilities */
export class Utilities {

  public isNumberArray(arr: number[]): boolean {
    return (arr && arr.length && arr.filter((value) => !isNaN(value)).length === arr.length) ? true : false;
  }
  public isNullOrEmpty(obj: any): boolean {
    return obj === undefined || obj === null || obj === '';
  }
  public toBoolean(obj: any, ...allowedValues): boolean {
    return (obj === '' || obj === 'true' || allowedValues.indexOf(obj) !== -1) ? true : false;
  }

}
