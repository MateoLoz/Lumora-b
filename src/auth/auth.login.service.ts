import {  getUserByEmail, insertRefreshToken, updateRefreshToken } from "../auth/auth.service";
import { BadAuthError, NotFoundError } from "../utils/errors";
import { LoginDto } from "./auth.dto";
import { toAuthUserDto } from "./auth.mapper";
import { dbRefreshTokenDto, LoginResponseDto } from "./auth.responses";
import { login } from "./auth.service";
import { checkPassword } from "./utils/password.utils";


export async function loginAuthService (payload : LoginDto) : Promise<LoginResponseDto>  {

    const user = await getUserByEmail(payload);

    if(!user) throw new NotFoundError(`User ${payload.email} was not found`, 'USER_NOT_FOUND', 404);
  
    const isPasswordValid = await checkPassword(payload.password,user.password);

    if(!isPasswordValid) throw new BadAuthError(`Invalid email or password`, 'INVALID_CREDENTIALS', 401);

    const UserDto = toAuthUserDto(user)
   
    const {accessToken , refreshToken} = await login(UserDto);

    const response = new LoginResponseDto(accessToken,UserDto,refreshToken);

    return response;

}

export async function saveRefreshTokenService(payload : LoginResponseDto) : Promise<boolean> {
    const token = new dbRefreshTokenDto(payload.user.id,payload.refreshToken as string);
    const response = await insertRefreshToken(token);

    if(response) return true;

    return false;

}

// export async function updateRefreshTokenService(payload: LoginResponseDto): Promise<boolean>  {
//     const token = new dbRefreshTokenDto(payload.user.id,payload.refreshToken as string);
//     const response = await updateRefreshToken(token)

//     if(response) return true;
//     return false;
// }