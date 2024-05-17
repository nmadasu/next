import { z } from "zod";


export const validationRegisterForm=z.object({
            firstName:z.string().min(4,'minimum 4 letters').max(25,'maximum 25 letters'),
            lastName:z.string().min(4,'minimum 4 letters').max(25,'maimum 25 letters'),
            email:z.string().email('Invalid email'),
            userName:z.string().min(2,'').max(25,''),
            password:z.string().min(8,'').max(25,''),
            phoneNumber:z.string().min(10,'')
        })
