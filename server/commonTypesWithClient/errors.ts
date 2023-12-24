export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class CompanyNotFoundError extends CustomError {
  constructor(message = 'Company not found') {
    super(message);
  }
}
export class InvalidFieldsError extends CustomError {
  constructor(message = 'Invalid fields parameter') {
    super(message);
  }
}
