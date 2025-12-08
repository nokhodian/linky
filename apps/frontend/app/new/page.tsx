import { auth } from '@/lib/auth-server';
import { NewPageDialog } from '@/components/NewPageDialog';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function NewPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/');
  }

  return <NewPageDialog open={true} />;
}
