export class ConflictError extends Error {
    status = 0;
    code = '';
    constructor(message:string,code: string,status : number) {
        super(message)
        this.code = code;
        this.status = status;
    }
}

export class BadRequestError extends Error {
      status = 0;
    code = '';
    constructor(message:string, code: string,status : number) {
        super(message)
         this.code = code;
        this.status = status
    }
}

export class BadAuthError extends Error {
    status = 0;
    code = '';
    constructor(message:string, code: string,status : number) {
        super(message)
         this.code = code;
        this.status = status
    }
}

export class NotFoundError extends Error {
    status = 0;
    code = '';
    constructor(message:string, code: string,status : number) {
        super(message)
         this.code = code;
        this.status = status
    }
}