import joi from 'joi';

export const UserJoi = joi.object({
    email: joi
        .string()
        .email()
        .required(),
    password: joi
        .string()
        .required(),
        
})