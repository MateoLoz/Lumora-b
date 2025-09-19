import { Request, Response } from "express";
import { loginAuthService, saveRefreshTokenService } from "./auth.login.service";
import { LoginDto } from "./auth.dto";

export async function loginAuthController(req: Request , res: Response)  {
    const data : LoginDto = req.body;
    const response = await loginAuthService(data);
    await saveRefreshTokenService(response);
    res.send(response);
}

export async function refreshAuthController (req: Request , res: Response) {
    
}
