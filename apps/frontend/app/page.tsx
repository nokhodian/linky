import { auth } from '@/lib/auth-server';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import LandingPage from './components/LandingPage';

export const dynamic = 'force-dynamic';

export default async function Page() {
  console.log('Root page hit');
  let session;
  
  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch (error) {
    console.error('Auth check failed:', error);
  }

  if (session?.session) {
    redirect('/new');
  }

  return <LandingPage />;
}
