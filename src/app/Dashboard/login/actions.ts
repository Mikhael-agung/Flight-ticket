'use server'

export interface ActionResult {
    errorTitle: string | null;
    errorDesc: string[] | null;
}

export async function handleSignIn( prevstate: any, formData: FormData ): Promise<ActionResult>  {
    console.log(formData.get('email'));
}