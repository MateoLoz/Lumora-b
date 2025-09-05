export class ConflictError extends Error {
    status = 409;
    constructor(message:string) {
        super(message)
    }
}

export class BadRequestError extends Error {
    status = 400;
    constructor(message:string) {
        super(message)
    }
}

export class BadAuthError extends Error {
    status = 401;
    constructor(message:string) {
        super(message)
    }
}