"use server";
export default async function SendMessage(formData: FormData) {
    const baseUrl = process.env.BASE_URL;
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
        console.log("h");
        
        try {
            const response = await fetch(`${baseUrl}/api/mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, message })
            });
            const result = await response.json();
            console.log(result);
            
            if (result.status === 201) {
                return true;
            }
        } catch (e) {
            console.error(e);
        }
    }
}