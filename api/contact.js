import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'dosmildosmo1999@gmail.com',
      reply_to: email,
      subject: `Portfolio — ${name} te escribió`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f9f7;border-radius:12px">
          <h2 style="margin:0 0 24px;color:#2d5a1e">Nuevo mensaje desde tu portafolio</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;width:80px">Nombre</td>
              <td style="padding:8px 0;color:#111;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#2d5a1e">${email}</a></td>
            </tr>
          </table>
          <hr style="margin:20px 0;border:none;border-top:1px solid #e0ddd8"/>
          <p style="color:#666;font-size:13px;margin:0 0 8px">Mensaje</p>
          <p style="color:#111;line-height:1.6;white-space:pre-wrap">${message}</p>
          <hr style="margin:24px 0;border:none;border-top:1px solid #e0ddd8"/>
          <p style="color:#aaa;font-size:12px;margin:0">Respondele directamente a este email — irá a ${email}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
