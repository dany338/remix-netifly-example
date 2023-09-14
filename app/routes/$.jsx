import { redirect } from '@remix-run/node';

export function loader({ params }) {
  console.log('🚀 ~ file: $.jsx:4 ~ loader ~ params:', params)
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  throw new Response('Not found', { status: 404 });
}