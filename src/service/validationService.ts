import joi from 'joi'
import { IRegisterRequestBody } from '../types/userTypes'

export const validateRegisterBody = joi.object<IRegisterRequestBody>({
    name: joi.string().min(2).max(25).trim().required(),
    emailAddress: joi.string().email().required(),
    phoneNumber: joi.string().min(9).max(15).required(),
    password: joi.string().min(6).max(18).trim().required(),
    concent: joi.boolean().valid(true).required()
})

export const validateJoiSchema = <T>(schema: joi.Schema, value: unknown) => {
    const result = schema.validate(value)

    return {
        value: result.value as T,
        error: result.error
    }
}
