export interface ArticleWithCreators {
	articleId: number;
	metaTitle: string;
	metaDescription: string;
	slug: string;
	heading: string;
	subHeading: string;
	content: string;
	image: string | null;
	imageAltText: string | null;
	sources: Citation[] | [];
	publishedAt: string;
	contributed_at: string;
	lastUpdated: string;
	lastReviewed: string;
	markupSchema: MarkupSchema;
	authors: CreatorInArticle[] | [];
	contributors: CreatorInArticle[] | [];
	reviewers: CreatorInArticle[] | [];
	categories: string[];
	tableOfContents: TableOfContentsData[] | [];
}

export interface Citation {
	citation: string;
	source_url: string;
}

export interface MarkupSchema {
	logo: MarkupSchemaLogo;
	'@type': string;
	author: Author[] | [];
	audience: AlumniOf[];
	citation: [];
	headline: string;
	keywords: string;
	publisher: Publisher;
	reviewedBy: CreatedBy[] | [];
	contributor: CreatedBy[] | [];
	datePublished: string;
	dateModified: string;
	lastReviewed: string;
}

export interface MarkupSchemaLogo {
	url: string;
	'@type': string;
	width: number;
	height: number;
}

export interface AlumniOf {
	name: string;
	'@type': string;
}
export interface Author {
	url: string;
	name: string;
	'@type': string;
	sameAs: string[];
	alumniOf: AlumniOf[];
	knowsAbout: string;
	description: string;
	medicalTitle: string;
}
export interface CreatedBy {
	url: string;
	name: string;
	'@type': string;
	sameAs: string[];
	alumniOf: AlumniOf[];
	knowsAbout: string;
	description: string;
	medicalTitle: string;
}
export interface Publisher {
	name: string;
	'@type': string;
	sameAs: string[];
	publishingPrinciples: string;
}

export interface CreatorInArticle {
	personId: number;
	slug: string;
	name: string;
	miniDescription: string;
	profilePicture: string | null;
	medicalTitle: string | null;
	education: Education[] | [];
}

export interface Education {
	degree: string;
	graduation_year: number;
	university: string;
}

interface TableOfContentsData {
	anchor_text: string;
	anchor_link: string;
}
