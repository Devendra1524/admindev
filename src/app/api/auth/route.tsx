import { NextApiHandler } from 'next';
import { signIn } from 'next-auth/next';
import { Session } from 'next-auth';
import { Provider } from 'next-auth/providers';
import { connectToDB } from '@/database';
import User from '@/models/user';

const authOptions = {
  providers: [
    new GoogleProvider({
      clientId: '977343913580-83i2einc6e40pec56gknd2ejlf6pkar2.apps.googleusercontent.com',
      clientSecret: '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',
    }) as Provider,
  ],
  callbacks: {
    async signIn({ user, account }: { user: Session; account: any }) {
      if (account.provider === 'google') {
        const { name, email } = user;

        try {
          await connectToDB();
          const isUserExists = await User.findOne({ email });

          if (!isUserExists) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email }),
            });

            const responseData = await res.json();

            if (res.ok && responseData.success) {
              return user;
            }
          }
        } catch (error) {
        }
      }

      return user;
    },
  },
};

const handler: NextApiHandler = signIn(authOptions);

export { handler as GET, handler as POST };
