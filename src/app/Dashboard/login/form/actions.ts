'use server'

import { redirect } from"next/navigation";
import { formSchema } from "./validation";
import { lucia } from "@/lib/auth";
import { cookies } from "next/dist/client/components/headers";
import bcrypt from 'bcrypt';


export interface ActionResult {
    errorTitle: string | null;
    errorDesc: string[] | null;
}

export async function handleSignIn( prevstate: any, formData: FormData ): Promise<ActionResult>  {
    console.log(formData.get('email'));

    const values = formSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!values.success) {
        const errorDesc = values.error.issues.map((issue) => issue.message);
        return {
            errorTitle: 'Error',
            errorDesc
        }
    }
    
    const existingUser = await prisma.user.findFirst({
        where: {
            email: values.data.email
        }
    });

    if (!existingUser) {
        return {
            errorTitle: 'Error',
            errorDesc: ['User not found']
        }
    }

    const validPassword = bcrypt.compare(values.data.password, existingUser.password);

    if(!validPassword) {
        return {
            errorTitle: 'Error',
            errorDesc: ['Invalid password']
        }
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);

    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return redirect('/Dashboard');
}

