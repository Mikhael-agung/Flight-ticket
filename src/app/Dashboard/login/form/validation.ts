import * as z from 'zod'

export const formSchema = z.object({
    email: z.string({required_error: 'Email tidak boleh kosong'}).email({message: 'Email tidak valid'}),
    password: z.string({required_error: 'Password tidak boleh kosong'}).min(8, {message: 'Password minimal 8 karakter'})
})