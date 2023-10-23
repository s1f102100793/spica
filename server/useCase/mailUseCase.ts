import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password',
  },
});

const sendVerificationEmail = async (email: string, code: string) => {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: '認証コード',
    text: `あなたの認証コードは ${code} です。`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('メールの送信に失敗しました:', error);
  }
};
