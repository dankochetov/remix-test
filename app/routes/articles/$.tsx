import { LoaderFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import 'types-cloudflare-worker';

import { ArticleWithCreators } from '~/types/api';

export const loader: LoaderFunction = async ({ params }) => {
	const response = await fetch(
		`https://apiv3.bookphysio.com/items/articles?filter[slug][_eq]=/${params['*']}`,
		{
			headers: {
				Authorization: `Bearer ${globalThis.DIRECTUS_API_TOKEN}`,
			},
			cf: {
				cacheTtl: 60 * 60 * 24 * 365,
			},
		},
	);

	const { data } = (await response.json()) as unknown as { data: unknown[] };

	return data[0];
};

export default function Index() {
	const data = useLoaderData<ArticleWithCreators>();

	return (
		<div>
			<h1>{data.heading}</h1>
		</div>
	);
}
