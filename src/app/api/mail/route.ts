


import { Resend } from "resend";
import GooglePlayPolicyUpdateEmail from "../../../../emails";

// creating a new resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    try {
        // getting the user email
        const { name, email, message } = await req.json();
        
        // sending the email
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: 'sparshpandya228@gmail.com',
        subject: `${name} contaced you through your portfolio!`,
        react: GooglePlayPolicyUpdateEmail(name, email, message),
      });
  
      if (error) {
        return Response.json({ error }, { status: 500 });
      }
      
    //   returning the success message
      return Response.json("Message Sent Successfully!!", { status: 201 });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }