import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type Accordion = Entry & _Node & {
  __typename?: 'Accordion';
  _id: Scalars['ID']['output'];
  accordionContentCollection?: Maybe<AccordionAccordionContentCollection>;
  collapseIcon?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  expandIcon?: Maybe<Asset>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AccordionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionAccordionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionAccordionContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionContentFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionCollapseIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionExpandIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordion) */
export type AccordionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionAccordionContentCollection = {
  __typename?: 'AccordionAccordionContentCollection';
  items: Array<Maybe<AccordionContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AccordionAccordionContentCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AccordionCollection = {
  __typename?: 'AccordionCollection';
  items: Array<Maybe<Accordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContent = Entry & _Node & {
  __typename?: 'AccordionContent';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  headlineSubText?: Maybe<HeadingWithSubText>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<AccordionContentLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContentCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContentHeadlineSubTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContentInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/accordionContent) */
export type AccordionContentUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionContentCollection = {
  __typename?: 'AccordionContentCollection';
  items: Array<Maybe<AccordionContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AccordionContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineSubText?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headlineSubText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionContentLinkingCollections = {
  __typename?: 'AccordionContentLinkingCollections';
  accordionCollection?: Maybe<AccordionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  globalMapProductCardCollection?: Maybe<GlobalMapProductCardCollection>;
};


export type AccordionContentLinkingCollectionsAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionContentLinkingCollectionsAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionContentLinkingCollectionsGlobalMapProductCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionContentLinkingCollectionsGlobalMapProductCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionContentLinkingCollectionsAccordionCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AccordionContentLinkingCollectionsGlobalMapProductCardCollectionOrder {
  CtaAlignmentAsc = 'ctaAlignment_ASC',
  CtaAlignmentDesc = 'ctaAlignment_DESC',
  DescriptionPart2Asc = 'descriptionPart2_ASC',
  DescriptionPart2Desc = 'descriptionPart2_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreHeadingAsc = 'preHeading_ASC',
  PreHeadingDesc = 'preHeading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionContentOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AccordionFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  accordionContent?: InputMaybe<CfAccordionContentNestedFilter>;
  accordionContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  collapseIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  expandIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccordionLinkingCollections = {
  __typename?: 'AccordionLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  globalMapProductCardCollection?: Maybe<GlobalMapProductCardCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  tabCollection?: Maybe<TabCollection>;
};


export type AccordionLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsGlobalMapProductCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsGlobalMapProductCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsTabCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsGlobalMapProductCardCollectionOrder {
  CtaAlignmentAsc = 'ctaAlignment_ASC',
  CtaAlignmentDesc = 'ctaAlignment_DESC',
  DescriptionPart2Asc = 'descriptionPart2_ASC',
  DescriptionPart2Desc = 'descriptionPart2_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreHeadingAsc = 'preHeading_ASC',
  PreHeadingDesc = 'preHeading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AccordionLinkingCollectionsTabCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AccordionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  accordionCollection?: Maybe<AccordionCollection>;
  cardItemsCollection?: Maybe<CardItemsCollection>;
  ctaCollection?: Maybe<CtaCollection>;
  entryCollection?: Maybe<EntryCollection>;
  hotSpotContainerCollection?: Maybe<HotSpotContainerCollection>;
  hotspotSectionCollection?: Maybe<HotspotSectionCollection>;
  listRowsCollection?: Maybe<ListRowsCollection>;
  mediaItemCollection?: Maybe<MediaItemCollection>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  tableSectionCollection?: Maybe<TableSectionCollection>;
  videoCollection?: Maybe<VideoCollection>;
};


export type AssetLinkingCollectionsAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHotSpotContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHotspotSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsListRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsMediaItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTableSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItems = Entry & _Node & {
  __typename?: 'CardItems';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  date?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingTextColor?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  image?: Maybe<MediaItem>;
  imagePosition?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardItemsLinkingCollections>;
  paragraphText?: Maybe<CardItemsParagraphText>;
  paragraphTextColor?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  video?: Maybe<Asset>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsHeadingTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsParagraphTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsParagraphTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the content type Cards Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardItems) */
export type CardItemsVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardItemsCollection = {
  __typename?: 'CardItemsCollection';
  items: Array<Maybe<CardItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardItemsFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  icon_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_not?: InputMaybe<Scalars['String']['input']>;
  icon_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<CfMediaItemNestedFilter>;
  imagePosition?: InputMaybe<Scalars['String']['input']>;
  imagePosition_contains?: InputMaybe<Scalars['String']['input']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagePosition_not?: InputMaybe<Scalars['String']['input']>;
  imagePosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  imagePosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor_not?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphText_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardItemsLinkingCollections = {
  __typename?: 'CardItemsLinkingCollections';
  cardRowsCollection?: Maybe<CardRowsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CardItemsLinkingCollectionsCardRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardItemsLinkingCollectionsCardRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardItemsLinkingCollectionsCardRowsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CardItemsOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CardItemsParagraphText = {
  __typename?: 'CardItemsParagraphText';
  json: Scalars['JSON']['output'];
  links: CardItemsParagraphTextLinks;
};

export type CardItemsParagraphTextAssets = {
  __typename?: 'CardItemsParagraphTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CardItemsParagraphTextEntries = {
  __typename?: 'CardItemsParagraphTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CardItemsParagraphTextLinks = {
  __typename?: 'CardItemsParagraphTextLinks';
  assets: CardItemsParagraphTextAssets;
  entries: CardItemsParagraphTextEntries;
  resources: CardItemsParagraphTextResources;
};

export type CardItemsParagraphTextResources = {
  __typename?: 'CardItemsParagraphTextResources';
  block: Array<CardItemsParagraphTextResourcesBlock>;
  hyperlink: Array<CardItemsParagraphTextResourcesHyperlink>;
  inline: Array<CardItemsParagraphTextResourcesInline>;
};

export type CardItemsParagraphTextResourcesBlock = ResourceLink & {
  __typename?: 'CardItemsParagraphTextResourcesBlock';
  sys: ResourceSys;
};

export type CardItemsParagraphTextResourcesHyperlink = ResourceLink & {
  __typename?: 'CardItemsParagraphTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CardItemsParagraphTextResourcesInline = ResourceLink & {
  __typename?: 'CardItemsParagraphTextResourcesInline';
  sys: ResourceSys;
};

/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRows = Entry & _Node & {
  __typename?: 'CardRows';
  _id: Scalars['ID']['output'];
  cardItemsCollection?: Maybe<CardRowsCardItemsCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CardRowsLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRowsCardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardRowsCardItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardItemsFilter>;
};


/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRowsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRowsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRowsUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Container to store card items [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cardRows) */
export type CardRowsVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardRowsCardItemsCollection = {
  __typename?: 'CardRowsCardItemsCollection';
  items: Array<Maybe<CardItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CardRowsCardItemsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CardRowsCollection = {
  __typename?: 'CardRowsCollection';
  items: Array<Maybe<CardRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardRowsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardRowsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardRowsFilter>>>;
  cardItems?: InputMaybe<CfCardItemsNestedFilter>;
  cardItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardRowsLinkingCollections = {
  __typename?: 'CardRowsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  portraitIconCardCollection?: Maybe<PortraitIconCardCollection>;
};


export type CardRowsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardRowsLinkingCollectionsPortraitIconCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardRowsLinkingCollectionsPortraitIconCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardRowsLinkingCollectionsPortraitIconCardCollectionOrder {
  HeadingAlignmentAsc = 'headingAlignment_ASC',
  HeadingAlignmentDesc = 'headingAlignment_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PragraphTextAlignmentAsc = 'pragraphTextAlignment_ASC',
  PragraphTextAlignmentDesc = 'pragraphTextAlignment_DESC',
  PragraphTextColorAsc = 'pragraphTextColor_ASC',
  PragraphTextColorDesc = 'pragraphTextColor_DESC',
  SectionBackgroundColorAsc = 'sectionBackgroundColor_ASC',
  SectionBackgroundColorDesc = 'sectionBackgroundColor_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CardRowsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type Carousel = Entry & _Node & {
  __typename?: 'Carousel';
  _id: Scalars['ID']['output'];
  autoRotationIntervalInSeconds?: Maybe<Scalars['Int']['output']>;
  carouselItemCollection?: Maybe<CarouselCarouselItemCollection>;
  contentfulMetadata: ContentfulMetadata;
  enableAutoRotation?: Maybe<Scalars['Boolean']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CarouselLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  timelineWidget?: Maybe<TimelineWidget>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselAutoRotationIntervalInSecondsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselCarouselItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselCarouselItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselItemFilter>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselEnableAutoRotationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselSectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselTimelineWidgetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TimelineWidgetFilter>;
};


/** Create carousel [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carousel) */
export type CarouselUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CarouselCarouselItemCollection = {
  __typename?: 'CarouselCarouselItemCollection';
  items: Array<Maybe<CarouselItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CarouselCarouselItemCollectionOrder {
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeadlineSizeAsc = 'headlineSize_ASC',
  HeadlineSizeDesc = 'headlineSize_DESC',
  HeadlineTextColorAsc = 'headlineTextColor_ASC',
  HeadlineTextColorDesc = 'headlineTextColor_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC'
}

export type CarouselCollection = {
  __typename?: 'CarouselCollection';
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  autoRotationIntervalInSeconds?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoRotationIntervalInSeconds_gt?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_gte?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  autoRotationIntervalInSeconds_lt?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_lte?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_not?: InputMaybe<Scalars['Int']['input']>;
  autoRotationIntervalInSeconds_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  carouselItem?: InputMaybe<CfCarouselItemNestedFilter>;
  carouselItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  enableAutoRotation?: InputMaybe<Scalars['Boolean']['input']>;
  enableAutoRotation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  enableAutoRotation_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timelineWidget?: InputMaybe<CfTimelineWidgetNestedFilter>;
  timelineWidget_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItem = Entry & _Node & {
  __typename?: 'CarouselItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaCollection?: Maybe<CarouselItemCtaCollection>;
  darkeningLayerOpacity?: Maybe<Scalars['String']['output']>;
  headingWithSubtext?: Maybe<HeadingWithSubText>;
  headline?: Maybe<Scalars['String']['output']>;
  headlineSize?: Maybe<Scalars['String']['output']>;
  headlineTextColor?: Maybe<Scalars['String']['output']>;
  image?: Maybe<MediaItem>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CarouselItemLinkingCollections>;
  paragraphText?: Maybe<CarouselItemParagraphText>;
  paragraphTextColor?: Maybe<Scalars['String']['output']>;
  styledHeadline?: Maybe<CarouselItemStyledHeadline>;
  sys: Sys;
  textAlignment?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselItemCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemDarkeningLayerOpacityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemHeadlineSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemHeadlineTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemParagraphTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemParagraphTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemStyledHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create items required for the carousel component [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/carouselItem) */
export type CarouselItemUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CarouselItemCollection = {
  __typename?: 'CarouselItemCollection';
  items: Array<Maybe<CarouselItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselItemCtaCollection = {
  __typename?: 'CarouselItemCtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CarouselItemCtaCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BrandColorAsc = 'brandColor_ASC',
  BrandColorDesc = 'brandColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  OpenerTypeAsc = 'openerType_ASC',
  OpenerTypeDesc = 'openerType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlTypeAsc = 'urlType_ASC',
  UrlTypeDesc = 'urlType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type CarouselItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  darkeningLayerOpacity?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  darkeningLayerOpacity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  darkeningLayerOpacity_not?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingWithSubtext?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headlineSize?: InputMaybe<Scalars['String']['input']>;
  headlineSize_contains?: InputMaybe<Scalars['String']['input']>;
  headlineSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineSize_not?: InputMaybe<Scalars['String']['input']>;
  headlineSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineTextColor?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image?: InputMaybe<CfMediaItemNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor_not?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphText_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphText_not_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  textAlignment?: InputMaybe<Scalars['String']['input']>;
  textAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  textAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textAlignment_not?: InputMaybe<Scalars['String']['input']>;
  textAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  textAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselItemLinkingCollections = {
  __typename?: 'CarouselItemLinkingCollections';
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CarouselItemLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselItemLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CarouselItemLinkingCollectionsCarouselCollectionOrder {
  AutoRotationIntervalInSecondsAsc = 'autoRotationIntervalInSeconds_ASC',
  AutoRotationIntervalInSecondsDesc = 'autoRotationIntervalInSeconds_DESC',
  EnableAutoRotationAsc = 'enableAutoRotation_ASC',
  EnableAutoRotationDesc = 'enableAutoRotation_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselItemOrder {
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeadlineSizeAsc = 'headlineSize_ASC',
  HeadlineSizeDesc = 'headlineSize_DESC',
  HeadlineTextColorAsc = 'headlineTextColor_ASC',
  HeadlineTextColorDesc = 'headlineTextColor_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC'
}

export type CarouselItemParagraphText = {
  __typename?: 'CarouselItemParagraphText';
  json: Scalars['JSON']['output'];
  links: CarouselItemParagraphTextLinks;
};

export type CarouselItemParagraphTextAssets = {
  __typename?: 'CarouselItemParagraphTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CarouselItemParagraphTextEntries = {
  __typename?: 'CarouselItemParagraphTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CarouselItemParagraphTextLinks = {
  __typename?: 'CarouselItemParagraphTextLinks';
  assets: CarouselItemParagraphTextAssets;
  entries: CarouselItemParagraphTextEntries;
  resources: CarouselItemParagraphTextResources;
};

export type CarouselItemParagraphTextResources = {
  __typename?: 'CarouselItemParagraphTextResources';
  block: Array<CarouselItemParagraphTextResourcesBlock>;
  hyperlink: Array<CarouselItemParagraphTextResourcesHyperlink>;
  inline: Array<CarouselItemParagraphTextResourcesInline>;
};

export type CarouselItemParagraphTextResourcesBlock = ResourceLink & {
  __typename?: 'CarouselItemParagraphTextResourcesBlock';
  sys: ResourceSys;
};

export type CarouselItemParagraphTextResourcesHyperlink = ResourceLink & {
  __typename?: 'CarouselItemParagraphTextResourcesHyperlink';
  sys: ResourceSys;
};

export type CarouselItemParagraphTextResourcesInline = ResourceLink & {
  __typename?: 'CarouselItemParagraphTextResourcesInline';
  sys: ResourceSys;
};

export type CarouselItemStyledHeadline = {
  __typename?: 'CarouselItemStyledHeadline';
  json: Scalars['JSON']['output'];
  links: CarouselItemStyledHeadlineLinks;
};

export type CarouselItemStyledHeadlineAssets = {
  __typename?: 'CarouselItemStyledHeadlineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CarouselItemStyledHeadlineEntries = {
  __typename?: 'CarouselItemStyledHeadlineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CarouselItemStyledHeadlineLinks = {
  __typename?: 'CarouselItemStyledHeadlineLinks';
  assets: CarouselItemStyledHeadlineAssets;
  entries: CarouselItemStyledHeadlineEntries;
  resources: CarouselItemStyledHeadlineResources;
};

export type CarouselItemStyledHeadlineResources = {
  __typename?: 'CarouselItemStyledHeadlineResources';
  block: Array<CarouselItemStyledHeadlineResourcesBlock>;
  hyperlink: Array<CarouselItemStyledHeadlineResourcesHyperlink>;
  inline: Array<CarouselItemStyledHeadlineResourcesInline>;
};

export type CarouselItemStyledHeadlineResourcesBlock = ResourceLink & {
  __typename?: 'CarouselItemStyledHeadlineResourcesBlock';
  sys: ResourceSys;
};

export type CarouselItemStyledHeadlineResourcesHyperlink = ResourceLink & {
  __typename?: 'CarouselItemStyledHeadlineResourcesHyperlink';
  sys: ResourceSys;
};

export type CarouselItemStyledHeadlineResourcesInline = ResourceLink & {
  __typename?: 'CarouselItemStyledHeadlineResourcesInline';
  sys: ResourceSys;
};

export type CarouselLinkingCollections = {
  __typename?: 'CarouselLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type CarouselLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CarouselLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CarouselOrder {
  AutoRotationIntervalInSecondsAsc = 'autoRotationIntervalInSeconds_ASC',
  AutoRotationIntervalInSecondsDesc = 'autoRotationIntervalInSeconds_DESC',
  EnableAutoRotationAsc = 'enableAutoRotation_ASC',
  EnableAutoRotationDesc = 'enableAutoRotation_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type Column = Entry & _Node & {
  __typename?: 'Column';
  _id: Scalars['ID']['output'];
  columnGap?: Maybe<Scalars['String']['output']>;
  columnNumber?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ColumnLinkingCollections>;
  rowGap?: Maybe<Scalars['String']['output']>;
  sectionsCollection?: Maybe<ColumnSectionsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnColumnGapArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnColumnNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnRowGapArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColumnSectionsFilter>;
};


/** Use this content type for the column definitions in the column layout container content type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/column) */
export type ColumnUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ColumnCollection = {
  __typename?: 'ColumnCollection';
  items: Array<Maybe<Column>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ColumnFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColumnFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColumnFilter>>>;
  columnGap?: InputMaybe<Scalars['String']['input']>;
  columnGap_contains?: InputMaybe<Scalars['String']['input']>;
  columnGap_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnGap_not?: InputMaybe<Scalars['String']['input']>;
  columnGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  columnGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnNumber?: InputMaybe<Scalars['String']['input']>;
  columnNumber_contains?: InputMaybe<Scalars['String']['input']>;
  columnNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnNumber_not?: InputMaybe<Scalars['String']['input']>;
  columnNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  columnNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowGap?: InputMaybe<Scalars['String']['input']>;
  rowGap_contains?: InputMaybe<Scalars['String']['input']>;
  rowGap_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rowGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowGap_not?: InputMaybe<Scalars['String']['input']>;
  rowGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  rowGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainer = Entry & _Node & {
  __typename?: 'ColumnLayoutContainer';
  _id: Scalars['ID']['output'];
  alignment?: Maybe<Scalars['String']['output']>;
  columnCollection?: Maybe<ColumnLayoutContainerColumnCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ColumnLayoutContainerLinkingCollections>;
  numberOfColumns?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerColumnCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColumnFilter>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerNumberOfColumnsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this as the first building block for creating a columned style layout on a page. Use this along with the column content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/columnLayoutContainer) */
export type ColumnLayoutContainerUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ColumnLayoutContainerCollection = {
  __typename?: 'ColumnLayoutContainerCollection';
  items: Array<Maybe<ColumnLayoutContainer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ColumnLayoutContainerColumnCollection = {
  __typename?: 'ColumnLayoutContainerColumnCollection';
  items: Array<Maybe<Column>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ColumnLayoutContainerColumnCollectionOrder {
  ColumnGapAsc = 'columnGap_ASC',
  ColumnGapDesc = 'columnGap_DESC',
  ColumnNumberAsc = 'columnNumber_ASC',
  ColumnNumberDesc = 'columnNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowGapAsc = 'rowGap_ASC',
  RowGapDesc = 'rowGap_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ColumnLayoutContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerFilter>>>;
  alignment?: InputMaybe<Scalars['String']['input']>;
  alignment_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alignment_not?: InputMaybe<Scalars['String']['input']>;
  alignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  alignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  column?: InputMaybe<CfColumnNestedFilter>;
  columnCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfColumns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns_not?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ColumnLayoutContainerLinkingCollections = {
  __typename?: 'ColumnLayoutContainerLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type ColumnLayoutContainerLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLayoutContainerLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ColumnLayoutContainerLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnLayoutContainerOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ColumnLinkingCollections = {
  __typename?: 'ColumnLinkingCollections';
  columnLayoutContainerCollection?: Maybe<ColumnLayoutContainerCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ColumnLinkingCollectionsColumnLayoutContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLinkingCollectionsColumnLayoutContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ColumnLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ColumnLinkingCollectionsColumnLayoutContainerCollectionOrder {
  AlignmentAsc = 'alignment_ASC',
  AlignmentDesc = 'alignment_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ColumnOrder {
  ColumnGapAsc = 'columnGap_ASC',
  ColumnGapDesc = 'columnGap_DESC',
  ColumnNumberAsc = 'columnNumber_ASC',
  ColumnNumberDesc = 'columnNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowGapAsc = 'rowGap_ASC',
  RowGapDesc = 'rowGap_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ColumnSectionsCollection = {
  __typename?: 'ColumnSectionsCollection';
  items: Array<Maybe<ColumnSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ColumnSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ColumnSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ColumnSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ColumnSectionsItem = Cta | MediaItem | TextContentSection;

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** This content type is used to store values for the Engines website Cost Calculator [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/costCalculator) */
export type CostCalculator = Entry & _Node & {
  __typename?: 'CostCalculator';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  costDataCollection?: Maybe<CostCalculatorCostDataCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CostCalculatorLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This content type is used to store values for the Engines website Cost Calculator [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/costCalculator) */
export type CostCalculatorCostDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorCostDataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnginesCostDataFilter>;
};


/** This content type is used to store values for the Engines website Cost Calculator [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/costCalculator) */
export type CostCalculatorInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This content type is used to store values for the Engines website Cost Calculator [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/costCalculator) */
export type CostCalculatorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This content type is used to store values for the Engines website Cost Calculator [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/costCalculator) */
export type CostCalculatorUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CostCalculatorCollection = {
  __typename?: 'CostCalculatorCollection';
  items: Array<Maybe<CostCalculator>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CostCalculatorCostDataCollection = {
  __typename?: 'CostCalculatorCostDataCollection';
  items: Array<Maybe<EnginesCostData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CostCalculatorCostDataCollectionOrder {
  CurrentFilterAsc = 'currentFilter_ASC',
  CurrentFilterDesc = 'currentFilter_DESC',
  EnginesAsc = 'engines_ASC',
  EnginesDesc = 'engines_DESC',
  FiltersAsc = 'filters_ASC',
  FiltersDesc = 'filters_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  KitsAsc = 'kits_ASC',
  KitsDesc = 'kits_DESC',
  OilUnitCostAsc = 'oilUnitCost_ASC',
  OilUnitCostDesc = 'oilUnitCost_DESC',
  QuartsAsc = 'quarts_ASC',
  QuartsDesc = 'quarts_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC'
}

export type CostCalculatorFilter = {
  AND?: InputMaybe<Array<InputMaybe<CostCalculatorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CostCalculatorFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  costData?: InputMaybe<CfEnginesCostDataNestedFilter>;
  costDataCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CostCalculatorLinkingCollections = {
  __typename?: 'CostCalculatorLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type CostCalculatorLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CostCalculatorLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CostCalculatorLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CostCalculatorOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type Cta = Entry & _Node & {
  __typename?: 'Cta';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  brandColor?: Maybe<Scalars['String']['output']>;
  buttonMediaItem?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CtaLinkingCollections>;
  mediaUrl?: Maybe<Asset>;
  openerType?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlType?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  visible?: Maybe<Scalars['String']['output']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaAriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaBrandColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaButtonMediaItemArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaMediaUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaOpenerTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaUrlTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Displays a CTA with options for configuring a button or plain text with brand colors [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/cta) */
export type CtaVisibleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CtaCollection = {
  __typename?: 'CtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CtaFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  brandColor_contains?: InputMaybe<Scalars['String']['input']>;
  brandColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandColor_not?: InputMaybe<Scalars['String']['input']>;
  brandColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  brandColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonMediaItem_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openerType?: InputMaybe<Scalars['String']['input']>;
  openerType_contains?: InputMaybe<Scalars['String']['input']>;
  openerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openerType_not?: InputMaybe<Scalars['String']['input']>;
  openerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  openerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlType?: InputMaybe<Scalars['String']['input']>;
  urlType_contains?: InputMaybe<Scalars['String']['input']>;
  urlType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlType_not?: InputMaybe<Scalars['String']['input']>;
  urlType_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  visible?: InputMaybe<Scalars['String']['input']>;
  visible_contains?: InputMaybe<Scalars['String']['input']>;
  visible_exists?: InputMaybe<Scalars['Boolean']['input']>;
  visible_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  visible_not?: InputMaybe<Scalars['String']['input']>;
  visible_not_contains?: InputMaybe<Scalars['String']['input']>;
  visible_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CtaLinkingCollections = {
  __typename?: 'CtaLinkingCollections';
  accordionContentCollection?: Maybe<AccordionContentCollection>;
  cardItemsCollection?: Maybe<CardItemsCollection>;
  carouselItemCollection?: Maybe<CarouselItemCollection>;
  columnCollection?: Maybe<ColumnCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
  globalMapProductCardCollection?: Maybe<GlobalMapProductCardCollection>;
  headingWithSubTextCollection?: Maybe<HeadingWithSubTextCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  informationModulesCollection?: Maybe<InformationModulesCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  textBannerCollection?: Maybe<TextBannerCollection>;
  textContentSectionCollection?: Maybe<TextContentSectionCollection>;
};


export type CtaLinkingCollectionsAccordionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsAccordionContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsCardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsCardItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsCarouselItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsCarouselItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsColumnCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsGlobalMapProductCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsGlobalMapProductCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsHeadingWithSubTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsHeadingWithSubTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsInformationModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsInformationModulesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsTextBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsTextBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CtaLinkingCollectionsTextContentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaLinkingCollectionsTextContentSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CtaLinkingCollectionsAccordionContentCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsCardItemsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsCarouselItemCollectionOrder {
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeadlineSizeAsc = 'headlineSize_ASC',
  HeadlineSizeDesc = 'headlineSize_DESC',
  HeadlineTextColorAsc = 'headlineTextColor_ASC',
  HeadlineTextColorDesc = 'headlineTextColor_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC'
}

export enum CtaLinkingCollectionsColumnCollectionOrder {
  ColumnGapAsc = 'columnGap_ASC',
  ColumnGapDesc = 'columnGap_DESC',
  ColumnNumberAsc = 'columnNumber_ASC',
  ColumnNumberDesc = 'columnNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowGapAsc = 'rowGap_ASC',
  RowGapDesc = 'rowGap_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CtaLinkingCollectionsGlobalMapProductCardCollectionOrder {
  CtaAlignmentAsc = 'ctaAlignment_ASC',
  CtaAlignmentDesc = 'ctaAlignment_DESC',
  DescriptionPart2Asc = 'descriptionPart2_ASC',
  DescriptionPart2Desc = 'descriptionPart2_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreHeadingAsc = 'preHeading_ASC',
  PreHeadingDesc = 'preHeading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsHeadingWithSubTextCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ContentCopyAlignmentAsc = 'contentCopyAlignment_ASC',
  ContentCopyAlignmentDesc = 'contentCopyAlignment_DESC',
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTextColorAsc = 'subTextColor_ASC',
  SubTextColorDesc = 'subTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsInformationModulesCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CtaLinkingCollectionsTextBannerCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BannerBackgroundColorAsc = 'bannerBackgroundColor_ASC',
  BannerBackgroundColorDesc = 'bannerBackgroundColor_DESC',
  BannerTextFontColorAsc = 'bannerTextFontColor_ASC',
  BannerTextFontColorDesc = 'bannerTextFontColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum CtaLinkingCollectionsTextContentSectionCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingFontColorAsc = 'headingFontColor_ASC',
  HeadingFontColorDesc = 'headingFontColor_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextContentAlignmentAsc = 'textContentAlignment_ASC',
  TextContentAlignmentDesc = 'textContentAlignment_DESC',
  TextContentFontColorAsc = 'textContentFontColor_ASC',
  TextContentFontColorDesc = 'textContentFontColor_DESC'
}

export enum CtaOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BrandColorAsc = 'brandColor_ASC',
  BrandColorDesc = 'brandColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  OpenerTypeAsc = 'openerType_ASC',
  OpenerTypeDesc = 'openerType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlTypeAsc = 'urlType_ASC',
  UrlTypeDesc = 'urlType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPage = Entry & _Node & {
  __typename?: 'DealerPortalLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DealerPortalLandingPageLinkingCollections>;
  sectionsCollection?: Maybe<DealerPortalLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DealerPortalLandingPageSectionsFilter>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dealer Portal landing page [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dealerPortalLandingPage) */
export type DealerPortalLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DealerPortalLandingPageCollection = {
  __typename?: 'DealerPortalLandingPageCollection';
  items: Array<Maybe<DealerPortalLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DealerPortalLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<DealerPortalLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DealerPortalLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerPortalLandingPageLinkingCollections = {
  __typename?: 'DealerPortalLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type DealerPortalLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DealerPortalLandingPageOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type DealerPortalLandingPageSectionsCollection = {
  __typename?: 'DealerPortalLandingPageSectionsCollection';
  items: Array<Maybe<DealerPortalLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DealerPortalLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<DealerPortalLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DealerPortalLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerPortalLandingPageSectionsItem = Carousel | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | Quiz | SideBySideContent | SidePanel | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItem = Entry & _Node & {
  __typename?: 'DropdownItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DropdownItemLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemIsDefaultArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Dropdown Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/dropdownItem) */
export type DropdownItemValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DropdownItemCollection = {
  __typename?: 'DropdownItemCollection';
  items: Array<Maybe<DropdownItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DropdownItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<DropdownItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DropdownItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault?: InputMaybe<Scalars['String']['input']>;
  isDefault_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault_not?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DropdownItemLinkingCollections = {
  __typename?: 'DropdownItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemDropdownCollection?: Maybe<FormItemDropdownCollection>;
};


export type DropdownItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DropdownItemLinkingCollectionsFormItemDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DropdownItemLinkingCollectionsFormItemDropdownCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DropdownItemLinkingCollectionsFormItemDropdownCollectionOrder {
  ApiLinkAsc = 'apiLink_ASC',
  ApiLinkDesc = 'apiLink_DESC',
  FetchFromApiAsc = 'fetchFromApi_ASC',
  FetchFromApiDesc = 'fetchFromApi_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum DropdownItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type Email = Entry & _Node & {
  __typename?: 'Email';
  _id: Scalars['ID']['output'];
  bcc?: Maybe<Scalars['String']['output']>;
  cc?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  from?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EmailLinkingCollections>;
  priority?: Maybe<Scalars['String']['output']>;
  recipients?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  subject?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailBccArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailCcArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailFromArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailPriorityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailRecipientsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailSubjectArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is used to store email attributes like Subject, Recipients, From,  cc, bcc, Priority. This is referenced to the Form content type. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/email) */
export type EmailUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EmailCollection = {
  __typename?: 'EmailCollection';
  items: Array<Maybe<Email>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EmailFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmailFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmailFilter>>>;
  bcc?: InputMaybe<Scalars['String']['input']>;
  bcc_contains?: InputMaybe<Scalars['String']['input']>;
  bcc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bcc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bcc_not?: InputMaybe<Scalars['String']['input']>;
  bcc_not_contains?: InputMaybe<Scalars['String']['input']>;
  bcc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cc?: InputMaybe<Scalars['String']['input']>;
  cc_contains?: InputMaybe<Scalars['String']['input']>;
  cc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cc_not?: InputMaybe<Scalars['String']['input']>;
  cc_not_contains?: InputMaybe<Scalars['String']['input']>;
  cc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_exists?: InputMaybe<Scalars['Boolean']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priority_contains?: InputMaybe<Scalars['String']['input']>;
  priority_exists?: InputMaybe<Scalars['Boolean']['input']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority_not?: InputMaybe<Scalars['String']['input']>;
  priority_not_contains?: InputMaybe<Scalars['String']['input']>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_contains?: InputMaybe<Scalars['String']['input']>;
  subject_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subject_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subject_not?: InputMaybe<Scalars['String']['input']>;
  subject_not_contains?: InputMaybe<Scalars['String']['input']>;
  subject_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmailLinkingCollections = {
  __typename?: 'EmailLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type EmailLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmailLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmailLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EmailLinkingCollectionsFormCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FormErrorMessageHeadingAsc = 'formErrorMessageHeading_ASC',
  FormErrorMessageHeadingDesc = 'formErrorMessageHeading_DESC',
  FormSuccessMessageHeadingAsc = 'formSuccessMessageHeading_ASC',
  FormSuccessMessageHeadingDesc = 'formSuccessMessageHeading_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmailOrder {
  BccAsc = 'bcc_ASC',
  BccDesc = 'bcc_DESC',
  CcAsc = 'cc_ASC',
  CcDesc = 'cc_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PriorityAsc = 'priority_ASC',
  PriorityDesc = 'priority_DESC',
  SubjectAsc = 'subject_ASC',
  SubjectDesc = 'subject_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type Embed = Entry & _Node & {
  __typename?: 'Embed';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  dataPolicy?: Maybe<Scalars['String']['output']>;
  elementId?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EmbedLinkingCollections>;
  scriptId?: Maybe<Scalars['String']['output']>;
  scriptUrl?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedDataPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedElementIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedScriptIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedScriptUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to embed code/scripts onto your pages. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/embed) */
export type EmbedUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EmbedCollection = {
  __typename?: 'EmbedCollection';
  items: Array<Maybe<Embed>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EmbedFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmbedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmbedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataPolicy?: InputMaybe<Scalars['String']['input']>;
  dataPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  dataPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPolicy_not?: InputMaybe<Scalars['String']['input']>;
  dataPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  elementId?: InputMaybe<Scalars['String']['input']>;
  elementId_contains?: InputMaybe<Scalars['String']['input']>;
  elementId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  elementId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  elementId_not?: InputMaybe<Scalars['String']['input']>;
  elementId_not_contains?: InputMaybe<Scalars['String']['input']>;
  elementId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scriptId?: InputMaybe<Scalars['String']['input']>;
  scriptId_contains?: InputMaybe<Scalars['String']['input']>;
  scriptId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  scriptId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scriptId_not?: InputMaybe<Scalars['String']['input']>;
  scriptId_not_contains?: InputMaybe<Scalars['String']['input']>;
  scriptId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scriptUrl?: InputMaybe<Scalars['String']['input']>;
  scriptUrl_contains?: InputMaybe<Scalars['String']['input']>;
  scriptUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  scriptUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scriptUrl_not?: InputMaybe<Scalars['String']['input']>;
  scriptUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  scriptUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmbedLinkingCollections = {
  __typename?: 'EmbedLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type EmbedLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EmbedLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EmbedLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EmbedOrder {
  DataPolicyAsc = 'dataPolicy_ASC',
  DataPolicyDesc = 'dataPolicy_DESC',
  ElementIdAsc = 'elementId_ASC',
  ElementIdDesc = 'elementId_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ScriptIdAsc = 'scriptId_ASC',
  ScriptIdDesc = 'scriptId_DESC',
  ScriptUrlAsc = 'scriptUrl_ASC',
  ScriptUrlDesc = 'scriptUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPage = Entry & _Node & {
  __typename?: 'EnergyBlueLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  externalContent?: Maybe<Scalars['Boolean']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EnergyBlueLandingPageLinkingCollections>;
  sectionsCollection?: Maybe<EnergyBlueLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageExternalContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnergyBlueLandingPageSectionsFilter>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create site landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyBlueLandingPage) */
export type EnergyBlueLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EnergyBlueLandingPageCollection = {
  __typename?: 'EnergyBlueLandingPageCollection';
  items: Array<Maybe<EnergyBlueLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnergyBlueLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnergyBlueLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnergyBlueLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalContent?: InputMaybe<Scalars['Boolean']['input']>;
  externalContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalContent_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnergyBlueLandingPageLinkingCollections = {
  __typename?: 'EnergyBlueLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EnergyBlueLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EnergyBlueLandingPageOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EnergyBlueLandingPageSectionsCollection = {
  __typename?: 'EnergyBlueLandingPageSectionsCollection';
  items: Array<Maybe<EnergyBlueLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnergyBlueLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnergyBlueLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnergyBlueLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnergyBlueLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPage = Entry & _Node & {
  __typename?: 'EnergyHubLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EnergyHubLandingPageLinkingCollections>;
  sectionsCollection?: Maybe<EnergyHubLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnergyHubLandingPageSectionsFilter>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a landing page content type for energy hub application [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/energyHubLandingPage) */
export type EnergyHubLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EnergyHubLandingPageCollection = {
  __typename?: 'EnergyHubLandingPageCollection';
  items: Array<Maybe<EnergyHubLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnergyHubLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnergyHubLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnergyHubLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnergyHubLandingPageLinkingCollections = {
  __typename?: 'EnergyHubLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EnergyHubLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EnergyHubLandingPageOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EnergyHubLandingPageSectionsCollection = {
  __typename?: 'EnergyHubLandingPageSectionsCollection';
  items: Array<Maybe<EnergyHubLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnergyHubLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnergyHubLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnergyHubLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnergyHubLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostData = Entry & _Node & {
  __typename?: 'EnginesCostData';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  currentFilter?: Maybe<Scalars['Float']['output']>;
  engines?: Maybe<Scalars['String']['output']>;
  filters?: Maybe<Scalars['Int']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  kits?: Maybe<Scalars['Float']['output']>;
  linkedFrom?: Maybe<EnginesCostDataLinkingCollections>;
  oilUnitCost?: Maybe<Scalars['Float']['output']>;
  quarts?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  uid?: Maybe<Scalars['Int']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataCurrentFilterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataEnginesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataFiltersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataKitsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataOilUnitCostArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataQuartsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataUidArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesCostData) */
export type EnginesCostDataUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EnginesCostDataCollection = {
  __typename?: 'EnginesCostDataCollection';
  items: Array<Maybe<EnginesCostData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnginesCostDataFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnginesCostDataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnginesCostDataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentFilter?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  currentFilter_gt?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_gte?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  currentFilter_lt?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_lte?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_not?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  engines?: InputMaybe<Scalars['String']['input']>;
  engines_contains?: InputMaybe<Scalars['String']['input']>;
  engines_exists?: InputMaybe<Scalars['Boolean']['input']>;
  engines_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  engines_not?: InputMaybe<Scalars['String']['input']>;
  engines_not_contains?: InputMaybe<Scalars['String']['input']>;
  engines_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<Scalars['Int']['input']>;
  filters_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filters_gt?: InputMaybe<Scalars['Int']['input']>;
  filters_gte?: InputMaybe<Scalars['Int']['input']>;
  filters_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  filters_lt?: InputMaybe<Scalars['Int']['input']>;
  filters_lte?: InputMaybe<Scalars['Int']['input']>;
  filters_not?: InputMaybe<Scalars['Int']['input']>;
  filters_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kits?: InputMaybe<Scalars['Float']['input']>;
  kits_exists?: InputMaybe<Scalars['Boolean']['input']>;
  kits_gt?: InputMaybe<Scalars['Float']['input']>;
  kits_gte?: InputMaybe<Scalars['Float']['input']>;
  kits_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  kits_lt?: InputMaybe<Scalars['Float']['input']>;
  kits_lte?: InputMaybe<Scalars['Float']['input']>;
  kits_not?: InputMaybe<Scalars['Float']['input']>;
  kits_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  oilUnitCost?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  oilUnitCost_gt?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_gte?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  oilUnitCost_lt?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_lte?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_not?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  quarts?: InputMaybe<Scalars['Int']['input']>;
  quarts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quarts_gt?: InputMaybe<Scalars['Int']['input']>;
  quarts_gte?: InputMaybe<Scalars['Int']['input']>;
  quarts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quarts_lt?: InputMaybe<Scalars['Int']['input']>;
  quarts_lte?: InputMaybe<Scalars['Int']['input']>;
  quarts_not?: InputMaybe<Scalars['Int']['input']>;
  quarts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  uid?: InputMaybe<Scalars['Int']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_gt?: InputMaybe<Scalars['Int']['input']>;
  uid_gte?: InputMaybe<Scalars['Int']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  uid_lt?: InputMaybe<Scalars['Int']['input']>;
  uid_lte?: InputMaybe<Scalars['Int']['input']>;
  uid_not?: InputMaybe<Scalars['Int']['input']>;
  uid_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnginesCostDataLinkingCollections = {
  __typename?: 'EnginesCostDataLinkingCollections';
  costCalculatorCollection?: Maybe<CostCalculatorCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type EnginesCostDataLinkingCollectionsCostCalculatorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EnginesCostDataLinkingCollectionsCostCalculatorCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EnginesCostDataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EnginesCostDataLinkingCollectionsCostCalculatorCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EnginesCostDataOrder {
  CurrentFilterAsc = 'currentFilter_ASC',
  CurrentFilterDesc = 'currentFilter_DESC',
  EnginesAsc = 'engines_ASC',
  EnginesDesc = 'engines_DESC',
  FiltersAsc = 'filters_ASC',
  FiltersDesc = 'filters_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  KitsAsc = 'kits_ASC',
  KitsDesc = 'kits_DESC',
  OilUnitCostAsc = 'oilUnitCost_ASC',
  OilUnitCostDesc = 'oilUnitCost_DESC',
  QuartsAsc = 'quarts_ASC',
  QuartsDesc = 'quarts_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UidAsc = 'uid_ASC',
  UidDesc = 'uid_DESC'
}

/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPage = Entry & _Node & {
  __typename?: 'EnginesLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingPosition?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<EnginesLandingPageLinkingCollections>;
  pageHeading?: Maybe<Scalars['String']['output']>;
  sectionsCollection?: Maybe<EnginesLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageHeadingPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPagePageHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnginesLandingPageSectionsFilter>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Engines landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/enginesLandingPage) */
export type EnginesLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EnginesLandingPageCollection = {
  __typename?: 'EnginesLandingPageCollection';
  items: Array<Maybe<EnginesLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnginesLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnginesLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnginesLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingPosition?: InputMaybe<Scalars['String']['input']>;
  headingPosition_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingPosition_not?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading?: InputMaybe<Scalars['String']['input']>;
  pageHeading_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading_not?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnginesLandingPageLinkingCollections = {
  __typename?: 'EnginesLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type EnginesLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EnginesLandingPageOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EnginesLandingPageSectionsCollection = {
  __typename?: 'EnginesLandingPageSectionsCollection';
  items: Array<Maybe<EnginesLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EnginesLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EnginesLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EnginesLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EnginesLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | GlobalMapProductCard | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  copyright?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  logo?: Maybe<MediaItem>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  primaryNavigationCollection?: Maybe<FooterPrimaryNavigationCollection>;
  secondaryNavigation?: Maybe<SecondaryNavigation>;
  subText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<FooterTitle>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterLogoUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterPrimaryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterPrimaryNavigationFilter>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterSecondaryNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SecondaryNavigationFilter>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterSubTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global type footer [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/footer) */
export type FooterUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  copyright_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyright_not?: InputMaybe<Scalars['String']['input']>;
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo?: InputMaybe<CfMediaItemNestedFilter>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoUrl_not?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryNavigation?: InputMaybe<CfprimaryNavigationMultiTypeNestedFilter>;
  primaryNavigationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryNavigation?: InputMaybe<CfSecondaryNavigationNestedFilter>;
  secondaryNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subText?: InputMaybe<Scalars['String']['input']>;
  subText_contains?: InputMaybe<Scalars['String']['input']>;
  subText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subText_not?: InputMaybe<Scalars['String']['input']>;
  subText_not_contains?: InputMaybe<Scalars['String']['input']>;
  subText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SubTextAsc = 'subText_ASC',
  SubTextDesc = 'subText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterPrimaryNavigationCollection = {
  __typename?: 'FooterPrimaryNavigationCollection';
  items: Array<Maybe<FooterPrimaryNavigationItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterPrimaryNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterPrimaryNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterPrimaryNavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterPrimaryNavigationItem = HeadingWithSubText | PrimaryNavigation;

export type FooterTitle = {
  __typename?: 'FooterTitle';
  json: Scalars['JSON']['output'];
  links: FooterTitleLinks;
};

export type FooterTitleAssets = {
  __typename?: 'FooterTitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterTitleEntries = {
  __typename?: 'FooterTitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterTitleLinks = {
  __typename?: 'FooterTitleLinks';
  assets: FooterTitleAssets;
  entries: FooterTitleEntries;
  resources: FooterTitleResources;
};

export type FooterTitleResources = {
  __typename?: 'FooterTitleResources';
  block: Array<FooterTitleResourcesBlock>;
  hyperlink: Array<FooterTitleResourcesHyperlink>;
  inline: Array<FooterTitleResourcesInline>;
};

export type FooterTitleResourcesBlock = ResourceLink & {
  __typename?: 'FooterTitleResourcesBlock';
  sys: ResourceSys;
};

export type FooterTitleResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterTitleResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterTitleResourcesInline = ResourceLink & {
  __typename?: 'FooterTitleResourcesInline';
  sys: ResourceSys;
};

/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type Form = Entry & _Node & {
  __typename?: 'Form';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Email>;
  formErrorMessageHeading?: Maybe<Scalars['String']['output']>;
  formErrorMessageSubheading?: Maybe<FormFormErrorMessageSubheading>;
  formItemRowsCollection?: Maybe<FormFormItemRowsCollection>;
  formSuccessMessageHeading?: Maybe<Scalars['String']['output']>;
  formSuccessMessageSubheading?: Maybe<FormFormSuccessMessageSubheading>;
  heading?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormLinkingCollections>;
  subHeading?: Maybe<FormSubHeading>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EmailFilter>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormFormErrorMessageHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormFormErrorMessageSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormFormItemRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormFormItemRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemRowFilter>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormFormSuccessMessageHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormFormSuccessMessageSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Model to build Form in website [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/form) */
export type FormUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  items: Array<Maybe<Form>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<CfEmailNestedFilter>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formErrorMessageHeading?: InputMaybe<Scalars['String']['input']>;
  formErrorMessageHeading_contains?: InputMaybe<Scalars['String']['input']>;
  formErrorMessageHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formErrorMessageHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formErrorMessageHeading_not?: InputMaybe<Scalars['String']['input']>;
  formErrorMessageHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  formErrorMessageHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formErrorMessageSubheading_contains?: InputMaybe<Scalars['String']['input']>;
  formErrorMessageSubheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formErrorMessageSubheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  formItemRows?: InputMaybe<CfFormItemRowNestedFilter>;
  formItemRowsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formSuccessMessageHeading?: InputMaybe<Scalars['String']['input']>;
  formSuccessMessageHeading_contains?: InputMaybe<Scalars['String']['input']>;
  formSuccessMessageHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formSuccessMessageHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formSuccessMessageHeading_not?: InputMaybe<Scalars['String']['input']>;
  formSuccessMessageHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  formSuccessMessageHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formSuccessMessageSubheading_contains?: InputMaybe<Scalars['String']['input']>;
  formSuccessMessageSubheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  formSuccessMessageSubheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormFormErrorMessageSubheading = {
  __typename?: 'FormFormErrorMessageSubheading';
  json: Scalars['JSON']['output'];
  links: FormFormErrorMessageSubheadingLinks;
};

export type FormFormErrorMessageSubheadingAssets = {
  __typename?: 'FormFormErrorMessageSubheadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormFormErrorMessageSubheadingEntries = {
  __typename?: 'FormFormErrorMessageSubheadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormFormErrorMessageSubheadingLinks = {
  __typename?: 'FormFormErrorMessageSubheadingLinks';
  assets: FormFormErrorMessageSubheadingAssets;
  entries: FormFormErrorMessageSubheadingEntries;
  resources: FormFormErrorMessageSubheadingResources;
};

export type FormFormErrorMessageSubheadingResources = {
  __typename?: 'FormFormErrorMessageSubheadingResources';
  block: Array<FormFormErrorMessageSubheadingResourcesBlock>;
  hyperlink: Array<FormFormErrorMessageSubheadingResourcesHyperlink>;
  inline: Array<FormFormErrorMessageSubheadingResourcesInline>;
};

export type FormFormErrorMessageSubheadingResourcesBlock = ResourceLink & {
  __typename?: 'FormFormErrorMessageSubheadingResourcesBlock';
  sys: ResourceSys;
};

export type FormFormErrorMessageSubheadingResourcesHyperlink = ResourceLink & {
  __typename?: 'FormFormErrorMessageSubheadingResourcesHyperlink';
  sys: ResourceSys;
};

export type FormFormErrorMessageSubheadingResourcesInline = ResourceLink & {
  __typename?: 'FormFormErrorMessageSubheadingResourcesInline';
  sys: ResourceSys;
};

export type FormFormItemRowsCollection = {
  __typename?: 'FormFormItemRowsCollection';
  items: Array<Maybe<FormItemRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FormFormItemRowsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type FormFormSuccessMessageSubheading = {
  __typename?: 'FormFormSuccessMessageSubheading';
  json: Scalars['JSON']['output'];
  links: FormFormSuccessMessageSubheadingLinks;
};

export type FormFormSuccessMessageSubheadingAssets = {
  __typename?: 'FormFormSuccessMessageSubheadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormFormSuccessMessageSubheadingEntries = {
  __typename?: 'FormFormSuccessMessageSubheadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormFormSuccessMessageSubheadingLinks = {
  __typename?: 'FormFormSuccessMessageSubheadingLinks';
  assets: FormFormSuccessMessageSubheadingAssets;
  entries: FormFormSuccessMessageSubheadingEntries;
  resources: FormFormSuccessMessageSubheadingResources;
};

export type FormFormSuccessMessageSubheadingResources = {
  __typename?: 'FormFormSuccessMessageSubheadingResources';
  block: Array<FormFormSuccessMessageSubheadingResourcesBlock>;
  hyperlink: Array<FormFormSuccessMessageSubheadingResourcesHyperlink>;
  inline: Array<FormFormSuccessMessageSubheadingResourcesInline>;
};

export type FormFormSuccessMessageSubheadingResourcesBlock = ResourceLink & {
  __typename?: 'FormFormSuccessMessageSubheadingResourcesBlock';
  sys: ResourceSys;
};

export type FormFormSuccessMessageSubheadingResourcesHyperlink = ResourceLink & {
  __typename?: 'FormFormSuccessMessageSubheadingResourcesHyperlink';
  sys: ResourceSys;
};

export type FormFormSuccessMessageSubheadingResourcesInline = ResourceLink & {
  __typename?: 'FormFormSuccessMessageSubheadingResourcesInline';
  sys: ResourceSys;
};

/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckbox = Entry & _Node & {
  __typename?: 'FormItemCheckbox';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['String']['output']>;
  label?: Maybe<FormItemCheckboxLabel>;
  linkedFrom?: Maybe<FormItemCheckboxLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxIsDefaultArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxIsRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An checkbox field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemCheckbox) */
export type FormItemCheckboxValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormItemCheckboxCollection = {
  __typename?: 'FormItemCheckboxCollection';
  items: Array<Maybe<FormItemCheckbox>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemCheckboxFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemCheckboxFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemCheckboxFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault?: InputMaybe<Scalars['String']['input']>;
  isDefault_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault_not?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired?: InputMaybe<Scalars['String']['input']>;
  isRequired_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired_not?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormItemCheckboxLabel = {
  __typename?: 'FormItemCheckboxLabel';
  json: Scalars['JSON']['output'];
  links: FormItemCheckboxLabelLinks;
};

export type FormItemCheckboxLabelAssets = {
  __typename?: 'FormItemCheckboxLabelAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormItemCheckboxLabelEntries = {
  __typename?: 'FormItemCheckboxLabelEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormItemCheckboxLabelLinks = {
  __typename?: 'FormItemCheckboxLabelLinks';
  assets: FormItemCheckboxLabelAssets;
  entries: FormItemCheckboxLabelEntries;
  resources: FormItemCheckboxLabelResources;
};

export type FormItemCheckboxLabelResources = {
  __typename?: 'FormItemCheckboxLabelResources';
  block: Array<FormItemCheckboxLabelResourcesBlock>;
  hyperlink: Array<FormItemCheckboxLabelResourcesHyperlink>;
  inline: Array<FormItemCheckboxLabelResourcesInline>;
};

export type FormItemCheckboxLabelResourcesBlock = ResourceLink & {
  __typename?: 'FormItemCheckboxLabelResourcesBlock';
  sys: ResourceSys;
};

export type FormItemCheckboxLabelResourcesHyperlink = ResourceLink & {
  __typename?: 'FormItemCheckboxLabelResourcesHyperlink';
  sys: ResourceSys;
};

export type FormItemCheckboxLabelResourcesInline = ResourceLink & {
  __typename?: 'FormItemCheckboxLabelResourcesInline';
  sys: ResourceSys;
};

export type FormItemCheckboxLinkingCollections = {
  __typename?: 'FormItemCheckboxLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
};


export type FormItemCheckboxLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormItemCheckboxLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemCheckboxLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormItemCheckboxLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum FormItemCheckboxOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdown = Entry & _Node & {
  __typename?: 'FormItemDropdown';
  _id: Scalars['ID']['output'];
  apiLink?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dropdownItemsCollection?: Maybe<FormItemDropdownDropdownItemsCollection>;
  fetchFromApi?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormItemDropdownLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownApiLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownDropdownItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemDropdownDropdownItemsFilter>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownFetchFromApiArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownIsRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Dropdown Item field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemDropdown) */
export type FormItemDropdownVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormItemDropdownCollection = {
  __typename?: 'FormItemDropdownCollection';
  items: Array<Maybe<FormItemDropdown>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemDropdownDropdownItemsCollection = {
  __typename?: 'FormItemDropdownDropdownItemsCollection';
  items: Array<Maybe<FormItemDropdownDropdownItemsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemDropdownDropdownItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemDropdownDropdownItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemDropdownDropdownItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormItemDropdownDropdownItemsItem = DropdownItem | MediaItem;

export type FormItemDropdownFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemDropdownFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemDropdownFilter>>>;
  apiLink?: InputMaybe<Scalars['String']['input']>;
  apiLink_contains?: InputMaybe<Scalars['String']['input']>;
  apiLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  apiLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  apiLink_not?: InputMaybe<Scalars['String']['input']>;
  apiLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  apiLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dropdownItems?: InputMaybe<CfdropdownItemsMultiTypeNestedFilter>;
  dropdownItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fetchFromApi?: InputMaybe<Scalars['String']['input']>;
  fetchFromApi_contains?: InputMaybe<Scalars['String']['input']>;
  fetchFromApi_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fetchFromApi_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fetchFromApi_not?: InputMaybe<Scalars['String']['input']>;
  fetchFromApi_not_contains?: InputMaybe<Scalars['String']['input']>;
  fetchFromApi_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired?: InputMaybe<Scalars['String']['input']>;
  isRequired_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired_not?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormItemDropdownLinkingCollections = {
  __typename?: 'FormItemDropdownLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
};


export type FormItemDropdownLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormItemDropdownLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemDropdownLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormItemDropdownLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum FormItemDropdownOrder {
  ApiLinkAsc = 'apiLink_ASC',
  ApiLinkDesc = 'apiLink_DESC',
  FetchFromApiAsc = 'fetchFromApi_ASC',
  FetchFromApiDesc = 'fetchFromApi_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputText = Entry & _Node & {
  __typename?: 'FormItemInputText';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormItemInputTextLinkingCollections>;
  placeholder?: Maybe<Scalars['String']['output']>;
  requiredErrorMessage?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  validationErrorMessage?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextIsRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextPlaceholderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextRequiredErrorMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextValidationErrorMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An Input text field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemInputText) */
export type FormItemInputTextVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormItemInputTextCollection = {
  __typename?: 'FormItemInputTextCollection';
  items: Array<Maybe<FormItemInputText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemInputTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemInputTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemInputTextFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired?: InputMaybe<Scalars['String']['input']>;
  isRequired_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired_not?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeholder_not?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  requiredErrorMessage?: InputMaybe<Scalars['String']['input']>;
  requiredErrorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  requiredErrorMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  requiredErrorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  requiredErrorMessage_not?: InputMaybe<Scalars['String']['input']>;
  requiredErrorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  requiredErrorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  validationErrorMessage?: InputMaybe<Scalars['String']['input']>;
  validationErrorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  validationErrorMessage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  validationErrorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  validationErrorMessage_not?: InputMaybe<Scalars['String']['input']>;
  validationErrorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  validationErrorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormItemInputTextLinkingCollections = {
  __typename?: 'FormItemInputTextLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
};


export type FormItemInputTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormItemInputTextLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemInputTextLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormItemInputTextLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum FormItemInputTextOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  RequiredErrorMessageAsc = 'requiredErrorMessage_ASC',
  RequiredErrorMessageDesc = 'requiredErrorMessage_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValidationErrorMessageAsc = 'validationErrorMessage_ASC',
  ValidationErrorMessageDesc = 'validationErrorMessage_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadio = Entry & _Node & {
  __typename?: 'FormItemRadio';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  isDefault?: Maybe<Scalars['String']['output']>;
  isRequired?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormItemRadioLinkingCollections>;
  radioGroupName?: Maybe<Scalars['String']['output']>;
  radioItemsCollection?: Maybe<FormItemRadioRadioItemsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioIsDefaultArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioIsRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioRadioGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioRadioItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemRadioRadioItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RadioItemFilter>;
};


/** A Radio Button field as part of Form [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRadio) */
export type FormItemRadioUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormItemRadioCollection = {
  __typename?: 'FormItemRadioCollection';
  items: Array<Maybe<FormItemRadio>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemRadioFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemRadioFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemRadioFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault?: InputMaybe<Scalars['String']['input']>;
  isDefault_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDefault_not?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_contains?: InputMaybe<Scalars['String']['input']>;
  isDefault_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired?: InputMaybe<Scalars['String']['input']>;
  isRequired_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isRequired_not?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  isRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  radioGroupName?: InputMaybe<Scalars['String']['input']>;
  radioGroupName_contains?: InputMaybe<Scalars['String']['input']>;
  radioGroupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  radioGroupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  radioGroupName_not?: InputMaybe<Scalars['String']['input']>;
  radioGroupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  radioGroupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  radioItems?: InputMaybe<CfRadioItemNestedFilter>;
  radioItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormItemRadioLinkingCollections = {
  __typename?: 'FormItemRadioLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
};


export type FormItemRadioLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormItemRadioLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemRadioLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormItemRadioLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum FormItemRadioOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  RadioGroupNameAsc = 'radioGroupName_ASC',
  RadioGroupNameDesc = 'radioGroupName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FormItemRadioRadioItemsCollection = {
  __typename?: 'FormItemRadioRadioItemsCollection';
  items: Array<Maybe<RadioItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FormItemRadioRadioItemsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRow = Entry & _Node & {
  __typename?: 'FormItemRow';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  formItemSectionCollection?: Maybe<FormItemRowFormItemSectionCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FormItemRowLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRowFormItemSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemRowFormItemSectionFilter>;
};


/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRowInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRowUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Row of the Form Content Type [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/formItemRow) */
export type FormItemRowVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormItemRowCollection = {
  __typename?: 'FormItemRowCollection';
  items: Array<Maybe<FormItemRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemRowFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  formItemSection?: InputMaybe<CfformItemSectionMultiTypeNestedFilter>;
  formItemSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormItemRowFormItemSectionCollection = {
  __typename?: 'FormItemRowFormItemSectionCollection';
  items: Array<Maybe<FormItemRowFormItemSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormItemRowFormItemSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormItemRowFormItemSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormItemRowFormItemSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormItemRowFormItemSectionItem = Cta | FormItemCheckbox | FormItemDropdown | FormItemInputText | FormItemRadio | TextContentSection;

export type FormItemRowLinkingCollections = {
  __typename?: 'FormItemRowLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type FormItemRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormItemRowLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemRowLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormItemRowLinkingCollectionsFormCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FormErrorMessageHeadingAsc = 'formErrorMessageHeading_ASC',
  FormErrorMessageHeadingDesc = 'formErrorMessageHeading_DESC',
  FormSuccessMessageHeadingAsc = 'formSuccessMessageHeading_ASC',
  FormSuccessMessageHeadingDesc = 'formSuccessMessageHeading_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormItemRowOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type FormLinkingCollections = {
  __typename?: 'FormLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
};


export type FormLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum FormOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FormErrorMessageHeadingAsc = 'formErrorMessageHeading_ASC',
  FormErrorMessageHeadingDesc = 'formErrorMessageHeading_DESC',
  FormSuccessMessageHeadingAsc = 'formSuccessMessageHeading_ASC',
  FormSuccessMessageHeadingDesc = 'formSuccessMessageHeading_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FormSubHeading = {
  __typename?: 'FormSubHeading';
  json: Scalars['JSON']['output'];
  links: FormSubHeadingLinks;
};

export type FormSubHeadingAssets = {
  __typename?: 'FormSubHeadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormSubHeadingEntries = {
  __typename?: 'FormSubHeadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormSubHeadingLinks = {
  __typename?: 'FormSubHeadingLinks';
  assets: FormSubHeadingAssets;
  entries: FormSubHeadingEntries;
  resources: FormSubHeadingResources;
};

export type FormSubHeadingResources = {
  __typename?: 'FormSubHeadingResources';
  block: Array<FormSubHeadingResourcesBlock>;
  hyperlink: Array<FormSubHeadingResourcesHyperlink>;
  inline: Array<FormSubHeadingResourcesInline>;
};

export type FormSubHeadingResourcesBlock = ResourceLink & {
  __typename?: 'FormSubHeadingResourcesBlock';
  sys: ResourceSys;
};

export type FormSubHeadingResourcesHyperlink = ResourceLink & {
  __typename?: 'FormSubHeadingResourcesHyperlink';
  sys: ResourceSys;
};

export type FormSubHeadingResourcesInline = ResourceLink & {
  __typename?: 'FormSubHeadingResourcesInline';
  sys: ResourceSys;
};

/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCard = Entry & _Node & {
  __typename?: 'GlobalMapProductCard';
  _id: Scalars['ID']['output'];
  addContentType?: Maybe<GlobalMapProductCardAddContentType>;
  brochureCta?: Maybe<Cta>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  ctaAlignment?: Maybe<Scalars['String']['output']>;
  descriptionPart1?: Maybe<GlobalMapProductCardDescriptionPart1>;
  descriptionPart2?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  icons?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  image?: Maybe<MediaItem>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<GlobalMapProductCardLinkingCollections>;
  preHeading?: Maybe<Scalars['String']['output']>;
  regionAvailability?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  subHeading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardAddContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardBrochureCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardCtaAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardDescriptionPart1Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardDescriptionPart2Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardHeadingColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardIconsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardPreHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardRegionAvailabilityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is a test model designed for Global Map Product display [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/globalMapProductCard) */
export type GlobalMapProductCardSubHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GlobalMapProductCardAddContentType = Accordion | AccordionContent;

export type GlobalMapProductCardCollection = {
  __typename?: 'GlobalMapProductCardCollection';
  items: Array<Maybe<GlobalMapProductCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GlobalMapProductCardDescriptionPart1 = {
  __typename?: 'GlobalMapProductCardDescriptionPart1';
  json: Scalars['JSON']['output'];
  links: GlobalMapProductCardDescriptionPart1Links;
};

export type GlobalMapProductCardDescriptionPart1Assets = {
  __typename?: 'GlobalMapProductCardDescriptionPart1Assets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type GlobalMapProductCardDescriptionPart1Entries = {
  __typename?: 'GlobalMapProductCardDescriptionPart1Entries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type GlobalMapProductCardDescriptionPart1Links = {
  __typename?: 'GlobalMapProductCardDescriptionPart1Links';
  assets: GlobalMapProductCardDescriptionPart1Assets;
  entries: GlobalMapProductCardDescriptionPart1Entries;
  resources: GlobalMapProductCardDescriptionPart1Resources;
};

export type GlobalMapProductCardDescriptionPart1Resources = {
  __typename?: 'GlobalMapProductCardDescriptionPart1Resources';
  block: Array<GlobalMapProductCardDescriptionPart1ResourcesBlock>;
  hyperlink: Array<GlobalMapProductCardDescriptionPart1ResourcesHyperlink>;
  inline: Array<GlobalMapProductCardDescriptionPart1ResourcesInline>;
};

export type GlobalMapProductCardDescriptionPart1ResourcesBlock = ResourceLink & {
  __typename?: 'GlobalMapProductCardDescriptionPart1ResourcesBlock';
  sys: ResourceSys;
};

export type GlobalMapProductCardDescriptionPart1ResourcesHyperlink = ResourceLink & {
  __typename?: 'GlobalMapProductCardDescriptionPart1ResourcesHyperlink';
  sys: ResourceSys;
};

export type GlobalMapProductCardDescriptionPart1ResourcesInline = ResourceLink & {
  __typename?: 'GlobalMapProductCardDescriptionPart1ResourcesInline';
  sys: ResourceSys;
};

export type GlobalMapProductCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<GlobalMapProductCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GlobalMapProductCardFilter>>>;
  addContentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brochureCta?: InputMaybe<CfCtaNestedFilter>;
  brochureCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaAlignment?: InputMaybe<Scalars['String']['input']>;
  ctaAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  ctaAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaAlignment_not?: InputMaybe<Scalars['String']['input']>;
  ctaAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionPart1_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionPart1_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionPart1_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionPart2?: InputMaybe<Scalars['String']['input']>;
  descriptionPart2_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionPart2_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionPart2_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionPart2_not?: InputMaybe<Scalars['String']['input']>;
  descriptionPart2_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionPart2_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingColor_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingColor_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingColor_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icons_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icons_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icons_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icons_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image?: InputMaybe<CfMediaItemNestedFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preHeading?: InputMaybe<Scalars['String']['input']>;
  preHeading_contains?: InputMaybe<Scalars['String']['input']>;
  preHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  preHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preHeading_not?: InputMaybe<Scalars['String']['input']>;
  preHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  preHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionAvailability_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionAvailability_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionAvailability_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regionAvailability_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subHeading?: InputMaybe<Scalars['String']['input']>;
  subHeading_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subHeading_not?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GlobalMapProductCardLinkingCollections = {
  __typename?: 'GlobalMapProductCardLinkingCollections';
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type GlobalMapProductCardLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GlobalMapProductCardLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type GlobalMapProductCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GlobalMapProductCardLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum GlobalMapProductCardOrder {
  CtaAlignmentAsc = 'ctaAlignment_ASC',
  CtaAlignmentDesc = 'ctaAlignment_DESC',
  DescriptionPart2Asc = 'descriptionPart2_ASC',
  DescriptionPart2Desc = 'descriptionPart2_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreHeadingAsc = 'preHeading_ASC',
  PreHeadingDesc = 'preHeading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heRdTestTestingToBeDeleted) */
export type HeRdTestTestingToBeDeleted = Entry & _Node & {
  __typename?: 'HeRdTestTestingToBeDeleted';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HeRdTestTestingToBeDeletedLinkingCollections>;
  sys: Sys;
  testField?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heRdTestTestingToBeDeleted) */
export type HeRdTestTestingToBeDeletedLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heRdTestTestingToBeDeleted) */
export type HeRdTestTestingToBeDeletedTestFieldArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeRdTestTestingToBeDeletedCollection = {
  __typename?: 'HeRdTestTestingToBeDeletedCollection';
  items: Array<Maybe<HeRdTestTestingToBeDeleted>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeRdTestTestingToBeDeletedFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeRdTestTestingToBeDeletedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeRdTestTestingToBeDeletedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  testField?: InputMaybe<Scalars['String']['input']>;
  testField_contains?: InputMaybe<Scalars['String']['input']>;
  testField_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testField_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testField_not?: InputMaybe<Scalars['String']['input']>;
  testField_not_contains?: InputMaybe<Scalars['String']['input']>;
  testField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeRdTestTestingToBeDeletedLinkingCollections = {
  __typename?: 'HeRdTestTestingToBeDeletedLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeRdTestTestingToBeDeletedLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeRdTestTestingToBeDeletedOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestFieldAsc = 'testField_ASC',
  TestFieldDesc = 'testField_DESC'
}

/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type Header = Entry & _Node & {
  __typename?: 'Header';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  logo?: Maybe<MediaItem>;
  logoAltText?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  primaryNav?: Maybe<PrimaryNavigation>;
  promotionRibbonBar?: Maybe<TextBanner>;
  secondaryNav?: Maybe<SecondaryNavigation>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderLogoAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderLogoUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderPrimaryNavArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PrimaryNavigationFilter>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderPromotionRibbonBarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TextBannerFilter>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderSecondaryNavArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SecondaryNavigationFilter>;
};


/** Global site header [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/header) */
export type HeaderUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo?: InputMaybe<CfMediaItemNestedFilter>;
  logoAltText?: InputMaybe<Scalars['String']['input']>;
  logoAltText_contains?: InputMaybe<Scalars['String']['input']>;
  logoAltText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoAltText_not?: InputMaybe<Scalars['String']['input']>;
  logoAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  logoAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  logoUrl_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoUrl_not?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  logoUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  primaryNav?: InputMaybe<CfPrimaryNavigationNestedFilter>;
  primaryNav_exists?: InputMaybe<Scalars['Boolean']['input']>;
  promotionRibbonBar?: InputMaybe<CfTextBannerNestedFilter>;
  promotionRibbonBar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  secondaryNav?: InputMaybe<CfSecondaryNavigationNestedFilter>;
  secondaryNav_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoAltTextAsc = 'logoAltText_ASC',
  LogoAltTextDesc = 'logoAltText_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubText = Entry & _Node & {
  __typename?: 'HeadingWithSubText';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  contentCopyAlignment?: Maybe<Scalars['String']['output']>;
  contentPosition?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<Cta>;
  date?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingSize?: Maybe<Scalars['String']['output']>;
  headingTextColor?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeadingWithSubTextLinkingCollections>;
  ntExperiencesCollection?: Maybe<HeadingWithSubTextNt_ExperiencesCollection>;
  styledHeading?: Maybe<HeadingWithSubTextStyledHeading>;
  subText?: Maybe<HeadingWithSubTextSubText>;
  subTextColor?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextContentCopyAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextContentPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextHeadingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextHeadingTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextNtExperiencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextNt_ExperiencesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtExperienceFilter>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextStyledHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextSubTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextSubTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A heading with sub text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/headingWithSubText) */
export type HeadingWithSubTextUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeadingWithSubTextCollection = {
  __typename?: 'HeadingWithSubTextCollection';
  items: Array<Maybe<HeadingWithSubText>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeadingWithSubTextFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeadingWithSubTextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeadingWithSubTextFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentCopyAlignment?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentCopyAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentCopyAlignment_not?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition?: InputMaybe<Scalars['String']['input']>;
  contentPosition_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition_not?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experiences?: InputMaybe<CfNtExperienceNestedFilter>;
  nt_experiencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor?: InputMaybe<Scalars['String']['input']>;
  subTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTextColor_not?: InputMaybe<Scalars['String']['input']>;
  subTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subText_contains?: InputMaybe<Scalars['String']['input']>;
  subText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingWithSubTextLinkingCollections = {
  __typename?: 'HeadingWithSubTextLinkingCollections';
  accordionContentCollection?: Maybe<AccordionContentCollection>;
  carouselItemCollection?: Maybe<CarouselItemCollection>;
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  navItemsCollection?: Maybe<NavItemsCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  quizCollection?: Maybe<QuizCollection>;
  quizOptionCollection?: Maybe<QuizOptionCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
  sidePanelCollection?: Maybe<SidePanelCollection>;
  videoCollection?: Maybe<VideoCollection>;
  videoGalleryCollection?: Maybe<VideoGalleryCollection>;
};


export type HeadingWithSubTextLinkingCollectionsAccordionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsAccordionContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsCarouselItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsCarouselItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsNavItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsQuizCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsQuizCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsQuizOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsQuizOptionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsSidePanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsSidePanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsVideoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeadingWithSubTextLinkingCollectionsVideoGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextLinkingCollectionsVideoGalleryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeadingWithSubTextLinkingCollectionsAccordionContentCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsCarouselItemCollectionOrder {
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeadlineSizeAsc = 'headlineSize_ASC',
  HeadlineSizeDesc = 'headlineSize_DESC',
  HeadlineTextColorAsc = 'headlineTextColor_ASC',
  HeadlineTextColorDesc = 'headlineTextColor_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsFooterCollectionOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SubTextAsc = 'subText_ASC',
  SubTextDesc = 'subText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsNavItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsQuizCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsQuizOptionCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsSidePanelCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsVideoCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextLinkingCollectionsVideoGalleryCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeadingWithSubTextNt_ExperiencesCollection = {
  __typename?: 'HeadingWithSubTextNt_experiencesCollection';
  items: Array<Maybe<NtExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeadingWithSubTextNt_ExperiencesCollectionOrder {
  NtExperienceIdAsc = 'nt_experience_id_ASC',
  NtExperienceIdDesc = 'nt_experience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  NtTypeAsc = 'nt_type_ASC',
  NtTypeDesc = 'nt_type_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeadingWithSubTextOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ContentCopyAlignmentAsc = 'contentCopyAlignment_ASC',
  ContentCopyAlignmentDesc = 'contentCopyAlignment_DESC',
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTextColorAsc = 'subTextColor_ASC',
  SubTextColorDesc = 'subTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeadingWithSubTextStyledHeading = {
  __typename?: 'HeadingWithSubTextStyledHeading';
  json: Scalars['JSON']['output'];
  links: HeadingWithSubTextStyledHeadingLinks;
};

export type HeadingWithSubTextStyledHeadingAssets = {
  __typename?: 'HeadingWithSubTextStyledHeadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeadingWithSubTextStyledHeadingEntries = {
  __typename?: 'HeadingWithSubTextStyledHeadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeadingWithSubTextStyledHeadingLinks = {
  __typename?: 'HeadingWithSubTextStyledHeadingLinks';
  assets: HeadingWithSubTextStyledHeadingAssets;
  entries: HeadingWithSubTextStyledHeadingEntries;
  resources: HeadingWithSubTextStyledHeadingResources;
};

export type HeadingWithSubTextStyledHeadingResources = {
  __typename?: 'HeadingWithSubTextStyledHeadingResources';
  block: Array<HeadingWithSubTextStyledHeadingResourcesBlock>;
  hyperlink: Array<HeadingWithSubTextStyledHeadingResourcesHyperlink>;
  inline: Array<HeadingWithSubTextStyledHeadingResourcesInline>;
};

export type HeadingWithSubTextStyledHeadingResourcesBlock = ResourceLink & {
  __typename?: 'HeadingWithSubTextStyledHeadingResourcesBlock';
  sys: ResourceSys;
};

export type HeadingWithSubTextStyledHeadingResourcesHyperlink = ResourceLink & {
  __typename?: 'HeadingWithSubTextStyledHeadingResourcesHyperlink';
  sys: ResourceSys;
};

export type HeadingWithSubTextStyledHeadingResourcesInline = ResourceLink & {
  __typename?: 'HeadingWithSubTextStyledHeadingResourcesInline';
  sys: ResourceSys;
};

export type HeadingWithSubTextSubText = {
  __typename?: 'HeadingWithSubTextSubText';
  json: Scalars['JSON']['output'];
  links: HeadingWithSubTextSubTextLinks;
};

export type HeadingWithSubTextSubTextAssets = {
  __typename?: 'HeadingWithSubTextSubTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeadingWithSubTextSubTextEntries = {
  __typename?: 'HeadingWithSubTextSubTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeadingWithSubTextSubTextLinks = {
  __typename?: 'HeadingWithSubTextSubTextLinks';
  assets: HeadingWithSubTextSubTextAssets;
  entries: HeadingWithSubTextSubTextEntries;
  resources: HeadingWithSubTextSubTextResources;
};

export type HeadingWithSubTextSubTextResources = {
  __typename?: 'HeadingWithSubTextSubTextResources';
  block: Array<HeadingWithSubTextSubTextResourcesBlock>;
  hyperlink: Array<HeadingWithSubTextSubTextResourcesHyperlink>;
  inline: Array<HeadingWithSubTextSubTextResourcesInline>;
};

export type HeadingWithSubTextSubTextResourcesBlock = ResourceLink & {
  __typename?: 'HeadingWithSubTextSubTextResourcesBlock';
  sys: ResourceSys;
};

export type HeadingWithSubTextSubTextResourcesHyperlink = ResourceLink & {
  __typename?: 'HeadingWithSubTextSubTextResourcesHyperlink';
  sys: ResourceSys;
};

export type HeadingWithSubTextSubTextResourcesInline = ResourceLink & {
  __typename?: 'HeadingWithSubTextSubTextResourcesInline';
  sys: ResourceSys;
};

/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2 = Entry & _Node & {
  __typename?: 'HeroSectionV2';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<MediaItem>;
  backgroundVideo?: Maybe<MediaItem>;
  contentItemsCollection?: Maybe<HeroSectionV2ContentItemsCollection>;
  contentfulMetadata: ContentfulMetadata;
  darkeningLayerOpacity?: Maybe<Scalars['String']['output']>;
  heroHeight?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  heroHeightVariant?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HeroSectionV2LinkingCollections>;
  ntExperiencesCollection?: Maybe<HeroSectionV2Nt_ExperiencesCollection>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2AriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2BackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2BackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2BackgroundVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2ContentItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroSectionV2ContentItemsFilter>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2DarkeningLayerOpacityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2HeroHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2HeroHeightVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2InternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2LinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2NtExperiencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2Nt_ExperiencesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtExperienceFilter>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2SectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Hero Section Content Model Updated [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/heroSectionV2) */
export type HeroSectionV2UserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroSectionV2Collection = {
  __typename?: 'HeroSectionV2Collection';
  items: Array<Maybe<HeroSectionV2>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroSectionV2ContentItemsCollection = {
  __typename?: 'HeroSectionV2ContentItemsCollection';
  items: Array<Maybe<HeroSectionV2ContentItemsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroSectionV2ContentItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroSectionV2ContentItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroSectionV2ContentItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroSectionV2ContentItemsItem = Carousel | Form | HeadingWithSubText | SideBySideContent;

export type HeroSectionV2Filter = {
  AND?: InputMaybe<Array<InputMaybe<HeroSectionV2Filter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroSectionV2Filter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundImage?: InputMaybe<CfMediaItemNestedFilter>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundVideo?: InputMaybe<CfMediaItemNestedFilter>;
  backgroundVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentItems?: InputMaybe<CfcontentItemsMultiTypeNestedFilter>;
  contentItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  darkeningLayerOpacity?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  darkeningLayerOpacity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  darkeningLayerOpacity_not?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeightVariant?: InputMaybe<Scalars['String']['input']>;
  heroHeightVariant_contains?: InputMaybe<Scalars['String']['input']>;
  heroHeightVariant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroHeightVariant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeightVariant_not?: InputMaybe<Scalars['String']['input']>;
  heroHeightVariant_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroHeightVariant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeight_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeight_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeight_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroHeight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experiences?: InputMaybe<CfNtExperienceNestedFilter>;
  nt_experiencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroSectionV2LinkingCollections = {
  __typename?: 'HeroSectionV2LinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type HeroSectionV2LinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroSectionV2LinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2LinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroSectionV2LinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2LinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HeroSectionV2Nt_ExperiencesCollection = {
  __typename?: 'HeroSectionV2Nt_experiencesCollection';
  items: Array<Maybe<NtExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeroSectionV2Nt_ExperiencesCollectionOrder {
  NtExperienceIdAsc = 'nt_experience_id_ASC',
  NtExperienceIdDesc = 'nt_experience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  NtTypeAsc = 'nt_type_ASC',
  NtTypeDesc = 'nt_type_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroSectionV2Order {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPage = Entry & _Node & {
  __typename?: 'HomeEnergyLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  externalContent?: Maybe<Scalars['Boolean']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HomeEnergyLandingPageLinkingCollections>;
  ntExperiencesCollection?: Maybe<HomeEnergyLandingPageNt_ExperiencesCollection>;
  sectionsCollection?: Maybe<HomeEnergyLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageExternalContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageNtExperiencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageNt_ExperiencesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtExperienceFilter>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeEnergyLandingPageSectionsFilter>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to create landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/homeEnergyLandingPage) */
export type HomeEnergyLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HomeEnergyLandingPageCollection = {
  __typename?: 'HomeEnergyLandingPageCollection';
  items: Array<Maybe<HomeEnergyLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeEnergyLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  externalContent?: InputMaybe<Scalars['Boolean']['input']>;
  externalContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalContent_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experiences?: InputMaybe<CfNtExperienceNestedFilter>;
  nt_experiencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeEnergyLandingPageLinkingCollections = {
  __typename?: 'HomeEnergyLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeEnergyLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type HomeEnergyLandingPageNt_ExperiencesCollection = {
  __typename?: 'HomeEnergyLandingPageNt_experiencesCollection';
  items: Array<Maybe<NtExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HomeEnergyLandingPageNt_ExperiencesCollectionOrder {
  NtExperienceIdAsc = 'nt_experience_id_ASC',
  NtExperienceIdDesc = 'nt_experience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  NtTypeAsc = 'nt_type_ASC',
  NtTypeDesc = 'nt_type_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HomeEnergyLandingPageOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type HomeEnergyLandingPageSectionsCollection = {
  __typename?: 'HomeEnergyLandingPageSectionsCollection';
  items: Array<Maybe<HomeEnergyLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeEnergyLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomeEnergyLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainer = Entry & _Node & {
  __typename?: 'HotSpotContainer';
  _id: Scalars['ID']['output'];
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  hotspotSize?: Maybe<Scalars['String']['output']>;
  hotspotsCollection?: Maybe<HotSpotContainerHotspotsCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HotSpotContainerLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerHotspotSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerHotspotsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotSpotContainerHotspotsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotspotSectionFilter>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This is the container element for hotSpot. It has background image and reference with hot spot items. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotSpotContainer) */
export type HotSpotContainerUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HotSpotContainerCollection = {
  __typename?: 'HotSpotContainerCollection';
  items: Array<Maybe<HotSpotContainer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HotSpotContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<HotSpotContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HotSpotContainerFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hotspotSize?: InputMaybe<Scalars['String']['input']>;
  hotspotSize_contains?: InputMaybe<Scalars['String']['input']>;
  hotspotSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hotspotSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hotspotSize_not?: InputMaybe<Scalars['String']['input']>;
  hotspotSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  hotspotSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hotspots?: InputMaybe<CfHotspotSectionNestedFilter>;
  hotspotsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HotSpotContainerHotspotsCollection = {
  __typename?: 'HotSpotContainerHotspotsCollection';
  items: Array<Maybe<HotspotSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HotSpotContainerHotspotsCollectionOrder {
  HotspoticonNumberAsc = 'hotspoticonNumber_ASC',
  HotspoticonNumberDesc = 'hotspoticonNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PopupContentColorAsc = 'popupContentColor_ASC',
  PopupContentColorDesc = 'popupContentColor_DESC',
  PopupHeadingColorAsc = 'popupHeadingColor_ASC',
  PopupHeadingColorDesc = 'popupHeadingColor_DESC',
  PopupHeadingAsc = 'popupHeading_ASC',
  PopupHeadingDesc = 'popupHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  XCoordinateAsc = 'xCoordinate_ASC',
  XCoordinateDesc = 'xCoordinate_DESC',
  YCoordinateAsc = 'yCoordinate_ASC',
  YCoordinateDesc = 'yCoordinate_DESC'
}

export type HotSpotContainerLinkingCollections = {
  __typename?: 'HotSpotContainerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
};


export type HotSpotContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HotSpotContainerLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotSpotContainerLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HotSpotContainerLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum HotSpotContainerOrder {
  HotspotSizeAsc = 'hotspotSize_ASC',
  HotspotSizeDesc = 'hotspotSize_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type Hotspot = Entry & _Node & {
  __typename?: 'Hotspot';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  hotspots?: Maybe<Scalars['JSON']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HotspotLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type HotspotHotspotsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type HotspotImageUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type HotspotLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type HotspotTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This content model will be a hotspot plugin to generate the hotspot coordinates. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspot) */
export type HotspotUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HotspotCollection = {
  __typename?: 'HotspotCollection';
  items: Array<Maybe<Hotspot>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HotspotFilter = {
  AND?: InputMaybe<Array<InputMaybe<HotspotFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HotspotFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hotspots_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  imageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  imageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageUrl_not?: InputMaybe<Scalars['String']['input']>;
  imageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HotspotLinkingCollections = {
  __typename?: 'HotspotLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HotspotLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HotspotOrder {
  ImageUrlAsc = 'imageUrl_ASC',
  ImageUrlDesc = 'imageUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSection = Entry & _Node & {
  __typename?: 'HotspotSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  hotspoticonNumber?: Maybe<Scalars['Int']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HotspotSectionLinkingCollections>;
  popupContent?: Maybe<HotspotSectionPopupContent>;
  popupContentColor?: Maybe<Scalars['String']['output']>;
  popupCta?: Maybe<Entry>;
  popupHeading?: Maybe<Scalars['String']['output']>;
  popupHeadingColor?: Maybe<Scalars['String']['output']>;
  popupImage?: Maybe<Asset>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  xCoordinate?: Maybe<Scalars['Float']['output']>;
  yCoordinate?: Maybe<Scalars['Float']['output']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionHotspoticonNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupContentColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupHeadingColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionPopupImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionXCoordinateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This will be the actual hotspot item which will be displayed as " + " icon on the image. And on click it will open a pop-up with details. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/hotspotSection) */
export type HotspotSectionYCoordinateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HotspotSectionCollection = {
  __typename?: 'HotspotSectionCollection';
  items: Array<Maybe<HotspotSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HotspotSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<HotspotSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HotspotSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hotspoticonNumber?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hotspoticonNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hotspoticonNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_not?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContentColor?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_contains?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupContentColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContentColor_not?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContent_contains?: InputMaybe<Scalars['String']['input']>;
  popupContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeading?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeadingColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeadingColor_not?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeading_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeading_not?: InputMaybe<Scalars['String']['input']>;
  popupHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  xCoordinate?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  xCoordinate_gt?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_gte?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  xCoordinate_lt?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_lte?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_not?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  yCoordinate?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yCoordinate_gt?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_gte?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  yCoordinate_lt?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_lte?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_not?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type HotspotSectionLinkingCollections = {
  __typename?: 'HotspotSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  hotSpotContainerCollection?: Maybe<HotSpotContainerCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
};


export type HotspotSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HotspotSectionLinkingCollectionsHotSpotContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotspotSectionLinkingCollectionsHotSpotContainerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HotspotSectionLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotspotSectionLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HotspotSectionLinkingCollectionsHotSpotContainerCollectionOrder {
  HotspotSizeAsc = 'hotspotSize_ASC',
  HotspotSizeDesc = 'hotspotSize_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HotspotSectionLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum HotspotSectionOrder {
  HotspoticonNumberAsc = 'hotspoticonNumber_ASC',
  HotspoticonNumberDesc = 'hotspoticonNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PopupContentColorAsc = 'popupContentColor_ASC',
  PopupContentColorDesc = 'popupContentColor_DESC',
  PopupHeadingColorAsc = 'popupHeadingColor_ASC',
  PopupHeadingColorDesc = 'popupHeadingColor_DESC',
  PopupHeadingAsc = 'popupHeading_ASC',
  PopupHeadingDesc = 'popupHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  XCoordinateAsc = 'xCoordinate_ASC',
  XCoordinateDesc = 'xCoordinate_DESC',
  YCoordinateAsc = 'yCoordinate_ASC',
  YCoordinateDesc = 'yCoordinate_DESC'
}

export type HotspotSectionPopupContent = {
  __typename?: 'HotspotSectionPopupContent';
  json: Scalars['JSON']['output'];
  links: HotspotSectionPopupContentLinks;
};

export type HotspotSectionPopupContentAssets = {
  __typename?: 'HotspotSectionPopupContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HotspotSectionPopupContentEntries = {
  __typename?: 'HotspotSectionPopupContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HotspotSectionPopupContentLinks = {
  __typename?: 'HotspotSectionPopupContentLinks';
  assets: HotspotSectionPopupContentAssets;
  entries: HotspotSectionPopupContentEntries;
  resources: HotspotSectionPopupContentResources;
};

export type HotspotSectionPopupContentResources = {
  __typename?: 'HotspotSectionPopupContentResources';
  block: Array<HotspotSectionPopupContentResourcesBlock>;
  hyperlink: Array<HotspotSectionPopupContentResourcesHyperlink>;
  inline: Array<HotspotSectionPopupContentResourcesInline>;
};

export type HotspotSectionPopupContentResourcesBlock = ResourceLink & {
  __typename?: 'HotspotSectionPopupContentResourcesBlock';
  sys: ResourceSys;
};

export type HotspotSectionPopupContentResourcesHyperlink = ResourceLink & {
  __typename?: 'HotspotSectionPopupContentResourcesHyperlink';
  sys: ResourceSys;
};

export type HotspotSectionPopupContentResourcesInline = ResourceLink & {
  __typename?: 'HotspotSectionPopupContentResourcesInline';
  sys: ResourceSys;
};

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRows = Entry & _Node & {
  __typename?: 'InformationModuleRows';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  informationModulesCollection?: Maybe<InformationModuleRowsInformationModulesCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<InformationModuleRowsLinkingCollections>;
  rowHeading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRowsInformationModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleRowsInformationModulesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InformationModulesFilter>;
};


/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRowsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRowsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRowsRowHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this with the Information Module Section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleRows) */
export type InformationModuleRowsUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type InformationModuleRowsCollection = {
  __typename?: 'InformationModuleRowsCollection';
  items: Array<Maybe<InformationModuleRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InformationModuleRowsFilter = {
  AND?: InputMaybe<Array<InputMaybe<InformationModuleRowsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InformationModuleRowsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  informationModules?: InputMaybe<CfInformationModulesNestedFilter>;
  informationModulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowHeading?: InputMaybe<Scalars['String']['input']>;
  rowHeading_contains?: InputMaybe<Scalars['String']['input']>;
  rowHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rowHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowHeading_not?: InputMaybe<Scalars['String']['input']>;
  rowHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  rowHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InformationModuleRowsInformationModulesCollection = {
  __typename?: 'InformationModuleRowsInformationModulesCollection';
  items: Array<Maybe<InformationModules>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum InformationModuleRowsInformationModulesCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type InformationModuleRowsLinkingCollections = {
  __typename?: 'InformationModuleRowsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  informationModuleSectionCollection?: Maybe<InformationModuleSectionCollection>;
};


export type InformationModuleRowsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleRowsLinkingCollectionsInformationModuleSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleRowsLinkingCollectionsInformationModuleSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum InformationModuleRowsLinkingCollectionsInformationModuleSectionCollectionOrder {
  HeadingSizesAsc = 'headingSizes_ASC',
  HeadingSizesDesc = 'headingSizes_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NumberOfRowsAsc = 'numberOfRows_ASC',
  NumberOfRowsDesc = 'numberOfRows_DESC',
  SectionBackgroundColorAsc = 'sectionBackgroundColor_ASC',
  SectionBackgroundColorDesc = 'sectionBackgroundColor_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleRowsOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowHeadingAsc = 'rowHeading_ASC',
  RowHeadingDesc = 'rowHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSection = Entry & _Node & {
  __typename?: 'InformationModuleSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  headingSizes?: Maybe<Scalars['String']['output']>;
  headingTextColor?: Maybe<Scalars['String']['output']>;
  informationModuleRowsCollection?: Maybe<InformationModuleSectionInformationModuleRowsCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<InformationModuleSectionLinkingCollections>;
  numberOfRows?: Maybe<Scalars['Int']['output']>;
  sectionBackgroundColor?: Maybe<Scalars['String']['output']>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionHeadingSizesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionHeadingTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionInformationModuleRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionInformationModuleRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InformationModuleRowsFilter>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionNumberOfRowsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionSectionBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionSectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to outputs 2 modules side by side with the option to create as many rows of modules as required. Each module has an image, heading, rich text area and CTAs. The background colour of the section can be changed to suit the branding requirements. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModuleSection) */
export type InformationModuleSectionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type InformationModuleSectionCollection = {
  __typename?: 'InformationModuleSectionCollection';
  items: Array<Maybe<InformationModuleSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InformationModuleSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<InformationModuleSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InformationModuleSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingSizes?: InputMaybe<Scalars['String']['input']>;
  headingSizes_contains?: InputMaybe<Scalars['String']['input']>;
  headingSizes_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSizes_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSizes_not?: InputMaybe<Scalars['String']['input']>;
  headingSizes_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSizes_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  informationModuleRows?: InputMaybe<CfInformationModuleRowsNestedFilter>;
  informationModuleRowsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfRows?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfRows_gt?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_gte?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  numberOfRows_lt?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_lte?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_not?: InputMaybe<Scalars['Int']['input']>;
  numberOfRows_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sectionBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionBackgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionBackgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InformationModuleSectionInformationModuleRowsCollection = {
  __typename?: 'InformationModuleSectionInformationModuleRowsCollection';
  items: Array<Maybe<InformationModuleRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum InformationModuleSectionInformationModuleRowsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowHeadingAsc = 'rowHeading_ASC',
  RowHeadingDesc = 'rowHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type InformationModuleSectionLinkingCollections = {
  __typename?: 'InformationModuleSectionLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type InformationModuleSectionLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModuleSectionLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum InformationModuleSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModuleSectionOrder {
  HeadingSizesAsc = 'headingSizes_ASC',
  HeadingSizesDesc = 'headingSizes_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  NumberOfRowsAsc = 'numberOfRows_ASC',
  NumberOfRowsDesc = 'numberOfRows_DESC',
  SectionBackgroundColorAsc = 'sectionBackgroundColor_ASC',
  SectionBackgroundColorDesc = 'sectionBackgroundColor_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModules = Entry & _Node & {
  __typename?: 'InformationModules';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaCollection?: Maybe<InformationModulesCtaCollection>;
  date?: Maybe<Scalars['DateTime']['output']>;
  informationSection?: Maybe<InformationModulesInformationSection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<InformationModulesLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModulesCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesInformationSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This Content type is added to an Information Module Row [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/informationModules) */
export type InformationModulesUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type InformationModulesCollection = {
  __typename?: 'InformationModulesCollection';
  items: Array<Maybe<InformationModules>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InformationModulesCtaCollection = {
  __typename?: 'InformationModulesCtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum InformationModulesCtaCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BrandColorAsc = 'brandColor_ASC',
  BrandColorDesc = 'brandColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  OpenerTypeAsc = 'openerType_ASC',
  OpenerTypeDesc = 'openerType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlTypeAsc = 'urlType_ASC',
  UrlTypeDesc = 'urlType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type InformationModulesFilter = {
  AND?: InputMaybe<Array<InputMaybe<InformationModulesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InformationModulesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  informationSection_contains?: InputMaybe<Scalars['String']['input']>;
  informationSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  informationSection_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InformationModulesInformationSection = {
  __typename?: 'InformationModulesInformationSection';
  json: Scalars['JSON']['output'];
  links: InformationModulesInformationSectionLinks;
};

export type InformationModulesInformationSectionAssets = {
  __typename?: 'InformationModulesInformationSectionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InformationModulesInformationSectionEntries = {
  __typename?: 'InformationModulesInformationSectionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InformationModulesInformationSectionLinks = {
  __typename?: 'InformationModulesInformationSectionLinks';
  assets: InformationModulesInformationSectionAssets;
  entries: InformationModulesInformationSectionEntries;
  resources: InformationModulesInformationSectionResources;
};

export type InformationModulesInformationSectionResources = {
  __typename?: 'InformationModulesInformationSectionResources';
  block: Array<InformationModulesInformationSectionResourcesBlock>;
  hyperlink: Array<InformationModulesInformationSectionResourcesHyperlink>;
  inline: Array<InformationModulesInformationSectionResourcesInline>;
};

export type InformationModulesInformationSectionResourcesBlock = ResourceLink & {
  __typename?: 'InformationModulesInformationSectionResourcesBlock';
  sys: ResourceSys;
};

export type InformationModulesInformationSectionResourcesHyperlink = ResourceLink & {
  __typename?: 'InformationModulesInformationSectionResourcesHyperlink';
  sys: ResourceSys;
};

export type InformationModulesInformationSectionResourcesInline = ResourceLink & {
  __typename?: 'InformationModulesInformationSectionResourcesInline';
  sys: ResourceSys;
};

export type InformationModulesLinkingCollections = {
  __typename?: 'InformationModulesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  informationModuleRowsCollection?: Maybe<InformationModuleRowsCollection>;
};


export type InformationModulesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type InformationModulesLinkingCollectionsInformationModuleRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModulesLinkingCollectionsInformationModuleRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum InformationModulesLinkingCollectionsInformationModuleRowsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowHeadingAsc = 'rowHeading_ASC',
  RowHeadingDesc = 'rowHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InformationModulesOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type List = Entry & _Node & {
  __typename?: 'List';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  headingSize?: Maybe<Scalars['String']['output']>;
  headingTextColor?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ListLinkingCollections>;
  listRowsCollection?: Maybe<ListListRowsCollection>;
  styledHeading?: Maybe<ListStyledHeading>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListHeadingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListHeadingTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListListRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListListRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ListRowsFilter>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListStyledHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/list) */
export type ListUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ListCollection = {
  __typename?: 'ListCollection';
  items: Array<Maybe<List>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ListFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listRows?: InputMaybe<CfListRowsNestedFilter>;
  listRowsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ListLinkingCollections = {
  __typename?: 'ListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
};


export type ListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ListLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type ListListRowsCollection = {
  __typename?: 'ListListRowsCollection';
  items: Array<Maybe<ListRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ListListRowsCollectionOrder {
  IconSizeAsc = 'iconSize_ASC',
  IconSizeDesc = 'iconSize_DESC',
  IconUrlAsc = 'iconUrl_ASC',
  IconUrlDesc = 'iconUrl_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum ListOrder {
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRows = Entry & _Node & {
  __typename?: 'ListRows';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  iconSize?: Maybe<Scalars['String']['output']>;
  iconUrl?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ListRowsLinkingCollections>;
  sys: Sys;
  text?: Maybe<ListRowsText>;
  textColor?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsIconSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsIconUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create List Rows required for the List content type, it will help to add media icons alongside corresponding text [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/listRows) */
export type ListRowsUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ListRowsCollection = {
  __typename?: 'ListRowsCollection';
  items: Array<Maybe<ListRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ListRowsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListRowsFilter>>>;
  Icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  OR?: InputMaybe<Array<InputMaybe<ListRowsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconSize?: InputMaybe<Scalars['String']['input']>;
  iconSize_contains?: InputMaybe<Scalars['String']['input']>;
  iconSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconSize_not?: InputMaybe<Scalars['String']['input']>;
  iconSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  iconUrl_contains?: InputMaybe<Scalars['String']['input']>;
  iconUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUrl_not?: InputMaybe<Scalars['String']['input']>;
  iconUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ListRowsLinkingCollections = {
  __typename?: 'ListRowsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  listCollection?: Maybe<ListCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
};


export type ListRowsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ListRowsLinkingCollectionsListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListRowsLinkingCollectionsListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ListRowsLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListRowsLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ListRowsLinkingCollectionsListCollectionOrder {
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ListRowsLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum ListRowsOrder {
  IconSizeAsc = 'iconSize_ASC',
  IconSizeDesc = 'iconSize_DESC',
  IconUrlAsc = 'iconUrl_ASC',
  IconUrlDesc = 'iconUrl_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type ListRowsText = {
  __typename?: 'ListRowsText';
  json: Scalars['JSON']['output'];
  links: ListRowsTextLinks;
};

export type ListRowsTextAssets = {
  __typename?: 'ListRowsTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ListRowsTextEntries = {
  __typename?: 'ListRowsTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ListRowsTextLinks = {
  __typename?: 'ListRowsTextLinks';
  assets: ListRowsTextAssets;
  entries: ListRowsTextEntries;
  resources: ListRowsTextResources;
};

export type ListRowsTextResources = {
  __typename?: 'ListRowsTextResources';
  block: Array<ListRowsTextResourcesBlock>;
  hyperlink: Array<ListRowsTextResourcesHyperlink>;
  inline: Array<ListRowsTextResourcesInline>;
};

export type ListRowsTextResourcesBlock = ResourceLink & {
  __typename?: 'ListRowsTextResourcesBlock';
  sys: ResourceSys;
};

export type ListRowsTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ListRowsTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ListRowsTextResourcesInline = ResourceLink & {
  __typename?: 'ListRowsTextResourcesInline';
  sys: ResourceSys;
};

export type ListStyledHeading = {
  __typename?: 'ListStyledHeading';
  json: Scalars['JSON']['output'];
  links: ListStyledHeadingLinks;
};

export type ListStyledHeadingAssets = {
  __typename?: 'ListStyledHeadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ListStyledHeadingEntries = {
  __typename?: 'ListStyledHeadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ListStyledHeadingLinks = {
  __typename?: 'ListStyledHeadingLinks';
  assets: ListStyledHeadingAssets;
  entries: ListStyledHeadingEntries;
  resources: ListStyledHeadingResources;
};

export type ListStyledHeadingResources = {
  __typename?: 'ListStyledHeadingResources';
  block: Array<ListStyledHeadingResourcesBlock>;
  hyperlink: Array<ListStyledHeadingResourcesHyperlink>;
  inline: Array<ListStyledHeadingResourcesInline>;
};

export type ListStyledHeadingResourcesBlock = ResourceLink & {
  __typename?: 'ListStyledHeadingResourcesBlock';
  sys: ResourceSys;
};

export type ListStyledHeadingResourcesHyperlink = ResourceLink & {
  __typename?: 'ListStyledHeadingResourcesHyperlink';
  sys: ResourceSys;
};

export type ListStyledHeadingResourcesInline = ResourceLink & {
  __typename?: 'ListStyledHeadingResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPage = Entry & _Node & {
  __typename?: 'MarineLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingPosition?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MarineLandingPageLinkingCollections>;
  pageHeading?: Maybe<Scalars['String']['output']>;
  sectionsCollection?: Maybe<MarineLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageHeadingPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPagePageHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarineLandingPageSectionsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/marineLandingPage) */
export type MarineLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MarineLandingPageCollection = {
  __typename?: 'MarineLandingPageCollection';
  items: Array<Maybe<MarineLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MarineLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<MarineLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MarineLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingPosition?: InputMaybe<Scalars['String']['input']>;
  headingPosition_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingPosition_not?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading?: InputMaybe<Scalars['String']['input']>;
  pageHeading_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading_not?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MarineLandingPageLinkingCollections = {
  __typename?: 'MarineLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MarineLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MarineLandingPageOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type MarineLandingPageSectionsCollection = {
  __typename?: 'MarineLandingPageSectionsCollection';
  items: Array<Maybe<MarineLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MarineLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<MarineLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MarineLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MarineLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItem = Entry & _Node & {
  __typename?: 'MediaItem';
  _id: Scalars['ID']['output'];
  altText?: Maybe<Scalars['String']['output']>;
  assetCollection?: Maybe<AssetCollection>;
  autoplay?: Maybe<Scalars['Boolean']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  externalUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MediaItemLinkingCollections>;
  logoJson?: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemAutoplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemCaptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemExternalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemLogoJsonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use to add media items (Referenced field) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/mediaItem) */
export type MediaItemUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MediaItemCollection = {
  __typename?: 'MediaItemCollection';
  items: Array<Maybe<MediaItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MediaItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<MediaItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaItemFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  externalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl_not?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoJson_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MediaItemLinkingCollections = {
  __typename?: 'MediaItemLinkingCollections';
  cardItemsCollection?: Maybe<CardItemsCollection>;
  carouselItemCollection?: Maybe<CarouselItemCollection>;
  columnCollection?: Maybe<ColumnCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  formItemDropdownCollection?: Maybe<FormItemDropdownCollection>;
  globalMapProductCardCollection?: Maybe<GlobalMapProductCardCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  navItemsCollection?: Maybe<NavItemsCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
  textBannerCollection?: Maybe<TextBannerCollection>;
};


export type MediaItemLinkingCollectionsCardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsCardItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsCarouselItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsCarouselItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsColumnCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsFormItemDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsFormItemDropdownCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsGlobalMapProductCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsGlobalMapProductCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsNavItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MediaItemLinkingCollectionsTextBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemLinkingCollectionsTextBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MediaItemLinkingCollectionsCardItemsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsCarouselItemCollectionOrder {
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeadlineSizeAsc = 'headlineSize_ASC',
  HeadlineSizeDesc = 'headlineSize_DESC',
  HeadlineTextColorAsc = 'headlineTextColor_ASC',
  HeadlineTextColorDesc = 'headlineTextColor_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ParagraphTextColorAsc = 'paragraphTextColor_ASC',
  ParagraphTextColorDesc = 'paragraphTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignmentAsc = 'textAlignment_ASC',
  TextAlignmentDesc = 'textAlignment_DESC'
}

export enum MediaItemLinkingCollectionsColumnCollectionOrder {
  ColumnGapAsc = 'columnGap_ASC',
  ColumnGapDesc = 'columnGap_DESC',
  ColumnNumberAsc = 'columnNumber_ASC',
  ColumnNumberDesc = 'columnNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowGapAsc = 'rowGap_ASC',
  RowGapDesc = 'rowGap_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsFooterCollectionOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SubTextAsc = 'subText_ASC',
  SubTextDesc = 'subText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsFormItemDropdownCollectionOrder {
  ApiLinkAsc = 'apiLink_ASC',
  ApiLinkDesc = 'apiLink_DESC',
  FetchFromApiAsc = 'fetchFromApi_ASC',
  FetchFromApiDesc = 'fetchFromApi_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum MediaItemLinkingCollectionsGlobalMapProductCardCollectionOrder {
  CtaAlignmentAsc = 'ctaAlignment_ASC',
  CtaAlignmentDesc = 'ctaAlignment_DESC',
  DescriptionPart2Asc = 'descriptionPart2_ASC',
  DescriptionPart2Desc = 'descriptionPart2_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PreHeadingAsc = 'preHeading_ASC',
  PreHeadingDesc = 'preHeading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsHeaderCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoAltTextAsc = 'logoAltText_ASC',
  LogoAltTextDesc = 'logoAltText_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MediaItemLinkingCollectionsNavItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum MediaItemLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum MediaItemLinkingCollectionsTextBannerCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BannerBackgroundColorAsc = 'bannerBackgroundColor_ASC',
  BannerBackgroundColorDesc = 'bannerBackgroundColor_DESC',
  BannerTextFontColorAsc = 'bannerTextFontColor_ASC',
  BannerTextFontColorDesc = 'bannerTextFontColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum MediaItemOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExternalUrlAsc = 'externalUrl_ASC',
  ExternalUrlDesc = 'externalUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItems = Entry & _Node & {
  __typename?: 'NavItems';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headingWithSubtext?: Maybe<HeadingWithSubText>;
  icon?: Maybe<MediaItem>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavItemsLinkingCollections>;
  longUrl?: Maybe<Scalars['String']['output']>;
  mediaItemCollection?: Maybe<NavItemsMediaItemCollection>;
  navItemsCollection?: Maybe<NavItemsNavItemsCollection>;
  sys: Sys;
  url?: Maybe<Scalars['String']['output']>;
  urlOpenerType?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsAriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsLongUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsMediaItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsMediaItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsNavItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavItemsFilter>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsUrlOpenerTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Part of the site navigation structure (Referenced content type) [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/navItems) */
export type NavItemsUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavItemsCollection = {
  __typename?: 'NavItemsCollection';
  items: Array<Maybe<NavItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavItemsFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<CfMediaItemNestedFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longUrl?: InputMaybe<Scalars['String']['input']>;
  longUrl_contains?: InputMaybe<Scalars['String']['input']>;
  longUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longUrl_not?: InputMaybe<Scalars['String']['input']>;
  longUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  longUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaItem?: InputMaybe<CfMediaItemNestedFilter>;
  mediaItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navItems?: InputMaybe<CfNavItemsNestedFilter>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_contains?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlOpenerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlOpenerType_not?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemsLinkingCollections = {
  __typename?: 'NavItemsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  navItemsCollection?: Maybe<NavItemsCollection>;
  primaryNavigationCollection?: Maybe<PrimaryNavigationCollection>;
  secondaryNavigationCollection?: Maybe<SecondaryNavigationCollection>;
  sidePanelCollection?: Maybe<SidePanelCollection>;
};


export type NavItemsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemsLinkingCollectionsNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsLinkingCollectionsNavItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemsLinkingCollectionsPrimaryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsLinkingCollectionsPrimaryNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemsLinkingCollectionsSecondaryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsLinkingCollectionsSecondaryNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavItemsLinkingCollectionsSidePanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsLinkingCollectionsSidePanelCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavItemsLinkingCollectionsNavItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum NavItemsLinkingCollectionsPrimaryNavigationCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavItemsLinkingCollectionsSecondaryNavigationCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavItemsLinkingCollectionsSidePanelCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavItemsMediaItemCollection = {
  __typename?: 'NavItemsMediaItemCollection';
  items: Array<Maybe<MediaItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavItemsMediaItemCollectionOrder {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  AutoplayAsc = 'autoplay_ASC',
  AutoplayDesc = 'autoplay_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExternalUrlAsc = 'externalUrl_ASC',
  ExternalUrlDesc = 'externalUrl_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavItemsNavItemsCollection = {
  __typename?: 'NavItemsNavItemsCollection';
  items: Array<Maybe<NavItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavItemsNavItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum NavItemsOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudience = Entry & _Node & {
  __typename?: 'NtAudience';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NtAudienceLinkingCollections>;
  ntAudienceId?: Maybe<Scalars['String']['output']>;
  ntDescription?: Maybe<Scalars['String']['output']>;
  ntMetadata?: Maybe<Scalars['JSON']['output']>;
  ntName?: Maybe<Scalars['String']['output']>;
  ntRules?: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceNtAudienceIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceNtDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceNtMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceNtNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Audience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_audience) */
export type NtAudienceNtRulesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NtAudienceCollection = {
  __typename?: 'NtAudienceCollection';
  items: Array<Maybe<NtAudience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NtAudienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<NtAudienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NtAudienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nt_audience_id?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_contains?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_audience_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_audience_id_not?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description?: InputMaybe<Scalars['String']['input']>;
  nt_description_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description_not?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name?: InputMaybe<Scalars['String']['input']>;
  nt_name_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name_not?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_rules_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NtAudienceLinkingCollections = {
  __typename?: 'NtAudienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  ntExperienceCollection?: Maybe<NtExperienceCollection>;
};


export type NtAudienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NtAudienceLinkingCollectionsNtExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtAudienceLinkingCollectionsNtExperienceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NtAudienceLinkingCollectionsNtExperienceCollectionOrder {
  NtExperienceIdAsc = 'nt_experience_id_ASC',
  NtExperienceIdDesc = 'nt_experience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  NtTypeAsc = 'nt_type_ASC',
  NtTypeDesc = 'nt_type_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NtAudienceOrder {
  NtAudienceIdAsc = 'nt_audience_id_ASC',
  NtAudienceIdDesc = 'nt_audience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperience = Entry & _Node & {
  __typename?: 'NtExperience';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NtExperienceLinkingCollections>;
  ntAudience?: Maybe<NtAudience>;
  ntConfig?: Maybe<Scalars['JSON']['output']>;
  ntDescription?: Maybe<Scalars['String']['output']>;
  ntExperienceId?: Maybe<Scalars['String']['output']>;
  ntMetadata?: Maybe<Scalars['JSON']['output']>;
  ntName?: Maybe<Scalars['String']['output']>;
  ntType?: Maybe<Scalars['String']['output']>;
  ntVariantsCollection?: Maybe<NtExperienceNt_VariantsCollection>;
  sys: Sys;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtAudienceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NtAudienceFilter>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtConfigArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtExperienceIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Experience [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_experience) */
export type NtExperienceNtVariantsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type NtExperienceCollection = {
  __typename?: 'NtExperienceCollection';
  items: Array<Maybe<NtExperience>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NtExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<NtExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NtExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nt_audience?: InputMaybe<CfNtAudienceNestedFilter>;
  nt_audience_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_config_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description?: InputMaybe<Scalars['String']['input']>;
  nt_description_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description_not?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experience_id?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_contains?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_experience_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experience_id_not?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name?: InputMaybe<Scalars['String']['input']>;
  nt_name_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name_not?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_type?: InputMaybe<Scalars['String']['input']>;
  nt_type_contains?: InputMaybe<Scalars['String']['input']>;
  nt_type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_type_not?: InputMaybe<Scalars['String']['input']>;
  nt_type_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_variantsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NtExperienceLinkingCollections = {
  __typename?: 'NtExperienceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  headingWithSubTextCollection?: Maybe<HeadingWithSubTextCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
};


export type NtExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NtExperienceLinkingCollectionsHeadingWithSubTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtExperienceLinkingCollectionsHeadingWithSubTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NtExperienceLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtExperienceLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NtExperienceLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtExperienceLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NtExperienceLinkingCollectionsHeadingWithSubTextCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  ContentCopyAlignmentAsc = 'contentCopyAlignment_ASC',
  ContentCopyAlignmentDesc = 'contentCopyAlignment_DESC',
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SubTextColorAsc = 'subTextColor_ASC',
  SubTextColorDesc = 'subTextColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NtExperienceLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NtExperienceLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NtExperienceNt_VariantsCollection = {
  __typename?: 'NtExperienceNt_variantsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NtExperienceOrder {
  NtExperienceIdAsc = 'nt_experience_id_ASC',
  NtExperienceIdDesc = 'nt_experience_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  NtTypeAsc = 'nt_type_ASC',
  NtTypeDesc = 'nt_type_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Ninetailed Merge Tag [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_mergetag) */
export type NtMergetag = Entry & _Node & {
  __typename?: 'NtMergetag';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NtMergetagLinkingCollections>;
  ntFallback?: Maybe<Scalars['String']['output']>;
  ntMergetagId?: Maybe<Scalars['String']['output']>;
  ntName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Ninetailed Merge Tag [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_mergetag) */
export type NtMergetagLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Ninetailed Merge Tag [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_mergetag) */
export type NtMergetagNtFallbackArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Merge Tag [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_mergetag) */
export type NtMergetagNtMergetagIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ninetailed Merge Tag [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/nt_mergetag) */
export type NtMergetagNtNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NtMergetagCollection = {
  __typename?: 'NtMergetagCollection';
  items: Array<Maybe<NtMergetag>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NtMergetagFilter = {
  AND?: InputMaybe<Array<InputMaybe<NtMergetagFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NtMergetagFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nt_fallback?: InputMaybe<Scalars['String']['input']>;
  nt_fallback_contains?: InputMaybe<Scalars['String']['input']>;
  nt_fallback_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_fallback_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_fallback_not?: InputMaybe<Scalars['String']['input']>;
  nt_fallback_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_fallback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_mergetag_id?: InputMaybe<Scalars['String']['input']>;
  nt_mergetag_id_contains?: InputMaybe<Scalars['String']['input']>;
  nt_mergetag_id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_mergetag_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_mergetag_id_not?: InputMaybe<Scalars['String']['input']>;
  nt_mergetag_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_mergetag_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name?: InputMaybe<Scalars['String']['input']>;
  nt_name_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name_not?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NtMergetagLinkingCollections = {
  __typename?: 'NtMergetagLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NtMergetagLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NtMergetagOrder {
  NtFallbackAsc = 'nt_fallback_ASC',
  NtFallbackDesc = 'nt_fallback_DESC',
  NtMergetagIdAsc = 'nt_mergetag_id_ASC',
  NtMergetagIdDesc = 'nt_mergetag_id_DESC',
  NtNameAsc = 'nt_name_ASC',
  NtNameDesc = 'nt_name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCard = Entry & _Node & {
  __typename?: 'PortraitIconCard';
  _id: Scalars['ID']['output'];
  cardRowsCollection?: Maybe<PortraitIconCardCardRowsCollection>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  headingAlignment?: Maybe<Scalars['String']['output']>;
  headingSize?: Maybe<Scalars['String']['output']>;
  headingTextColor?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PortraitIconCardLinkingCollections>;
  paragraphText?: Maybe<PortraitIconCardParagraphText>;
  pragraphTextAlignment?: Maybe<Scalars['String']['output']>;
  pragraphTextColor?: Maybe<Scalars['String']['output']>;
  sectionBackgroundColor?: Maybe<Scalars['String']['output']>;
  sectionId?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardCardRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardCardRowsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardRowsFilter>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardHeadingAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardHeadingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardHeadingTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardParagraphTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardPragraphTextAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardPragraphTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardSectionBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardSectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Cards section can be used for creating a list of cards. Use this as a section of Landing page body [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/portraitIconCard) */
export type PortraitIconCardUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PortraitIconCardCardRowsCollection = {
  __typename?: 'PortraitIconCardCardRowsCollection';
  items: Array<Maybe<CardRows>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PortraitIconCardCardRowsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type PortraitIconCardCollection = {
  __typename?: 'PortraitIconCardCollection';
  items: Array<Maybe<PortraitIconCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PortraitIconCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<PortraitIconCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PortraitIconCardFilter>>>;
  cardRows?: InputMaybe<CfCardRowsNestedFilter>;
  cardRowsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingAlignment?: InputMaybe<Scalars['String']['input']>;
  headingAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  headingAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingAlignment_not?: InputMaybe<Scalars['String']['input']>;
  headingAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphText_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphText_not_contains?: InputMaybe<Scalars['String']['input']>;
  pragraphTextAlignment?: InputMaybe<Scalars['String']['input']>;
  pragraphTextAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  pragraphTextAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pragraphTextAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pragraphTextAlignment_not?: InputMaybe<Scalars['String']['input']>;
  pragraphTextAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  pragraphTextAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pragraphTextColor?: InputMaybe<Scalars['String']['input']>;
  pragraphTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  pragraphTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pragraphTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pragraphTextColor_not?: InputMaybe<Scalars['String']['input']>;
  pragraphTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  pragraphTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionBackgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionBackgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionBackgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortraitIconCardLinkingCollections = {
  __typename?: 'PortraitIconCardLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type PortraitIconCardLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PortraitIconCardLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PortraitIconCardLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PortraitIconCardOrder {
  HeadingAlignmentAsc = 'headingAlignment_ASC',
  HeadingAlignmentDesc = 'headingAlignment_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingTextColorAsc = 'headingTextColor_ASC',
  HeadingTextColorDesc = 'headingTextColor_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PragraphTextAlignmentAsc = 'pragraphTextAlignment_ASC',
  PragraphTextAlignmentDesc = 'pragraphTextAlignment_DESC',
  PragraphTextColorAsc = 'pragraphTextColor_ASC',
  PragraphTextColorDesc = 'pragraphTextColor_DESC',
  SectionBackgroundColorAsc = 'sectionBackgroundColor_ASC',
  SectionBackgroundColorDesc = 'sectionBackgroundColor_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PortraitIconCardParagraphText = {
  __typename?: 'PortraitIconCardParagraphText';
  json: Scalars['JSON']['output'];
  links: PortraitIconCardParagraphTextLinks;
};

export type PortraitIconCardParagraphTextAssets = {
  __typename?: 'PortraitIconCardParagraphTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PortraitIconCardParagraphTextEntries = {
  __typename?: 'PortraitIconCardParagraphTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PortraitIconCardParagraphTextLinks = {
  __typename?: 'PortraitIconCardParagraphTextLinks';
  assets: PortraitIconCardParagraphTextAssets;
  entries: PortraitIconCardParagraphTextEntries;
  resources: PortraitIconCardParagraphTextResources;
};

export type PortraitIconCardParagraphTextResources = {
  __typename?: 'PortraitIconCardParagraphTextResources';
  block: Array<PortraitIconCardParagraphTextResourcesBlock>;
  hyperlink: Array<PortraitIconCardParagraphTextResourcesHyperlink>;
  inline: Array<PortraitIconCardParagraphTextResourcesInline>;
};

export type PortraitIconCardParagraphTextResourcesBlock = ResourceLink & {
  __typename?: 'PortraitIconCardParagraphTextResourcesBlock';
  sys: ResourceSys;
};

export type PortraitIconCardParagraphTextResourcesHyperlink = ResourceLink & {
  __typename?: 'PortraitIconCardParagraphTextResourcesHyperlink';
  sys: ResourceSys;
};

export type PortraitIconCardParagraphTextResourcesInline = ResourceLink & {
  __typename?: 'PortraitIconCardParagraphTextResourcesInline';
  sys: ResourceSys;
};

/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPage = Entry & _Node & {
  __typename?: 'PowerSystemsLandingPage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingPosition?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PowerSystemsLandingPageLinkingCollections>;
  pageHeading?: Maybe<Scalars['String']['output']>;
  sectionsCollection?: Maybe<PowerSystemsLandingPageSectionsCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageHeadingPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPagePageHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PowerSystemsLandingPageSectionsFilter>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageSeoMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type for Power Systems landing pages [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/powerSystemsLandingPage) */
export type PowerSystemsLandingPageUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PowerSystemsLandingPageCollection = {
  __typename?: 'PowerSystemsLandingPageCollection';
  items: Array<Maybe<PowerSystemsLandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PowerSystemsLandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PowerSystemsLandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PowerSystemsLandingPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingPosition?: InputMaybe<Scalars['String']['input']>;
  headingPosition_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingPosition_not?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading?: InputMaybe<Scalars['String']['input']>;
  pageHeading_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeading_not?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sections?: InputMaybe<CfsectionsMultiTypeNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  seoMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  seoMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PowerSystemsLandingPageLinkingCollections = {
  __typename?: 'PowerSystemsLandingPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PowerSystemsLandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PowerSystemsLandingPageOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PowerSystemsLandingPageSectionsCollection = {
  __typename?: 'PowerSystemsLandingPageSectionsCollection';
  items: Array<Maybe<PowerSystemsLandingPageSectionsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PowerSystemsLandingPageSectionsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PowerSystemsLandingPageSectionsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PowerSystemsLandingPageSectionsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PowerSystemsLandingPageSectionsItem = Accordion | Carousel | ColumnLayoutContainer | CostCalculator | Cta | Embed | Form | HeadingWithSubText | HeroSectionV2 | InformationModuleSection | PortraitIconCard | SideBySideContent | TableSection | TabsSection | TextBanner | TextContentSection | VideoGallery;

/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigation = Entry & _Node & {
  __typename?: 'PrimaryNavigation';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PrimaryNavigationLinkingCollections>;
  navigationItemsCollection?: Maybe<PrimaryNavigationNavigationItemsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationAriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrimaryNavigationNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavItemsFilter>;
};


/** Site page primary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/primaryNavigation) */
export type PrimaryNavigationUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PrimaryNavigationCollection = {
  __typename?: 'PrimaryNavigationCollection';
  items: Array<Maybe<PrimaryNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PrimaryNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<PrimaryNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PrimaryNavigationFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItems?: InputMaybe<CfNavItemsNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PrimaryNavigationLinkingCollections = {
  __typename?: 'PrimaryNavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
};


export type PrimaryNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PrimaryNavigationLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrimaryNavigationLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PrimaryNavigationLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrimaryNavigationLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PrimaryNavigationLinkingCollectionsFooterCollectionOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SubTextAsc = 'subText_ASC',
  SubTextDesc = 'subText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PrimaryNavigationLinkingCollectionsHeaderCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoAltTextAsc = 'logoAltText_ASC',
  LogoAltTextDesc = 'logoAltText_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PrimaryNavigationNavigationItemsCollection = {
  __typename?: 'PrimaryNavigationNavigationItemsCollection';
  items: Array<Maybe<NavItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PrimaryNavigationNavigationItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum PrimaryNavigationOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  accordion?: Maybe<Accordion>;
  accordionCollection?: Maybe<AccordionCollection>;
  accordionContent?: Maybe<AccordionContent>;
  accordionContentCollection?: Maybe<AccordionContentCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  cardItems?: Maybe<CardItems>;
  cardItemsCollection?: Maybe<CardItemsCollection>;
  cardRows?: Maybe<CardRows>;
  cardRowsCollection?: Maybe<CardRowsCollection>;
  carousel?: Maybe<Carousel>;
  carouselCollection?: Maybe<CarouselCollection>;
  carouselItem?: Maybe<CarouselItem>;
  carouselItemCollection?: Maybe<CarouselItemCollection>;
  column?: Maybe<Column>;
  columnCollection?: Maybe<ColumnCollection>;
  columnLayoutContainer?: Maybe<ColumnLayoutContainer>;
  columnLayoutContainerCollection?: Maybe<ColumnLayoutContainerCollection>;
  costCalculator?: Maybe<CostCalculator>;
  costCalculatorCollection?: Maybe<CostCalculatorCollection>;
  cta?: Maybe<Cta>;
  ctaCollection?: Maybe<CtaCollection>;
  dealerPortalLandingPage?: Maybe<DealerPortalLandingPage>;
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  dropdownItem?: Maybe<DropdownItem>;
  dropdownItemCollection?: Maybe<DropdownItemCollection>;
  email?: Maybe<Email>;
  emailCollection?: Maybe<EmailCollection>;
  embed?: Maybe<Embed>;
  embedCollection?: Maybe<EmbedCollection>;
  energyBlueLandingPage?: Maybe<EnergyBlueLandingPage>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPage?: Maybe<EnergyHubLandingPage>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesCostData?: Maybe<EnginesCostData>;
  enginesCostDataCollection?: Maybe<EnginesCostDataCollection>;
  enginesLandingPage?: Maybe<EnginesLandingPage>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  form?: Maybe<Form>;
  formCollection?: Maybe<FormCollection>;
  formItemCheckbox?: Maybe<FormItemCheckbox>;
  formItemCheckboxCollection?: Maybe<FormItemCheckboxCollection>;
  formItemDropdown?: Maybe<FormItemDropdown>;
  formItemDropdownCollection?: Maybe<FormItemDropdownCollection>;
  formItemInputText?: Maybe<FormItemInputText>;
  formItemInputTextCollection?: Maybe<FormItemInputTextCollection>;
  formItemRadio?: Maybe<FormItemRadio>;
  formItemRadioCollection?: Maybe<FormItemRadioCollection>;
  formItemRow?: Maybe<FormItemRow>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
  globalMapProductCard?: Maybe<GlobalMapProductCard>;
  globalMapProductCardCollection?: Maybe<GlobalMapProductCardCollection>;
  heRdTestTestingToBeDeleted?: Maybe<HeRdTestTestingToBeDeleted>;
  heRdTestTestingToBeDeletedCollection?: Maybe<HeRdTestTestingToBeDeletedCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  headingWithSubText?: Maybe<HeadingWithSubText>;
  headingWithSubTextCollection?: Maybe<HeadingWithSubTextCollection>;
  heroSectionV2?: Maybe<HeroSectionV2>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPage?: Maybe<HomeEnergyLandingPage>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  hotSpotContainer?: Maybe<HotSpotContainer>;
  hotSpotContainerCollection?: Maybe<HotSpotContainerCollection>;
  hotspot?: Maybe<Hotspot>;
  hotspotCollection?: Maybe<HotspotCollection>;
  hotspotSection?: Maybe<HotspotSection>;
  hotspotSectionCollection?: Maybe<HotspotSectionCollection>;
  informationModuleRows?: Maybe<InformationModuleRows>;
  informationModuleRowsCollection?: Maybe<InformationModuleRowsCollection>;
  informationModuleSection?: Maybe<InformationModuleSection>;
  informationModuleSectionCollection?: Maybe<InformationModuleSectionCollection>;
  informationModules?: Maybe<InformationModules>;
  informationModulesCollection?: Maybe<InformationModulesCollection>;
  list?: Maybe<List>;
  listCollection?: Maybe<ListCollection>;
  listRows?: Maybe<ListRows>;
  listRowsCollection?: Maybe<ListRowsCollection>;
  marineLandingPage?: Maybe<MarineLandingPage>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  mediaItem?: Maybe<MediaItem>;
  mediaItemCollection?: Maybe<MediaItemCollection>;
  navItems?: Maybe<NavItems>;
  navItemsCollection?: Maybe<NavItemsCollection>;
  ntAudience?: Maybe<NtAudience>;
  ntAudienceCollection?: Maybe<NtAudienceCollection>;
  ntExperience?: Maybe<NtExperience>;
  ntExperienceCollection?: Maybe<NtExperienceCollection>;
  ntMergetag?: Maybe<NtMergetag>;
  ntMergetagCollection?: Maybe<NtMergetagCollection>;
  portraitIconCard?: Maybe<PortraitIconCard>;
  portraitIconCardCollection?: Maybe<PortraitIconCardCollection>;
  powerSystemsLandingPage?: Maybe<PowerSystemsLandingPage>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  primaryNavigation?: Maybe<PrimaryNavigation>;
  primaryNavigationCollection?: Maybe<PrimaryNavigationCollection>;
  quiz?: Maybe<Quiz>;
  quizCollection?: Maybe<QuizCollection>;
  quizOption?: Maybe<QuizOption>;
  quizOptionCollection?: Maybe<QuizOptionCollection>;
  radioItem?: Maybe<RadioItem>;
  radioItemCollection?: Maybe<RadioItemCollection>;
  secondaryNavigation?: Maybe<SecondaryNavigation>;
  secondaryNavigationCollection?: Maybe<SecondaryNavigationCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  sideBySideContent?: Maybe<SideBySideContent>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
  sidePanel?: Maybe<SidePanel>;
  sidePanelCollection?: Maybe<SidePanelCollection>;
  tab?: Maybe<Tab>;
  tabCollection?: Maybe<TabCollection>;
  tableSection?: Maybe<TableSection>;
  tableSectionCollection?: Maybe<TableSectionCollection>;
  tabsSection?: Maybe<TabsSection>;
  tabsSectionCollection?: Maybe<TabsSectionCollection>;
  textBanner?: Maybe<TextBanner>;
  textBannerCollection?: Maybe<TextBannerCollection>;
  textContentSection?: Maybe<TextContentSection>;
  textContentSectionCollection?: Maybe<TextContentSectionCollection>;
  timeline?: Maybe<Timeline>;
  timelineCollection?: Maybe<TimelineCollection>;
  timelineWidget?: Maybe<TimelineWidget>;
  timelineWidgetCollection?: Maybe<TimelineWidgetCollection>;
  versionTracking?: Maybe<VersionTracking>;
  versionTrackingCollection?: Maybe<VersionTrackingCollection>;
  video?: Maybe<Video>;
  videoCollection?: Maybe<VideoCollection>;
  videoGallery?: Maybe<VideoGallery>;
  videoGalleryCollection?: Maybe<VideoGalleryCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionFilter>;
};


export type QueryAccordionContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionContentFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCardItemsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardItemsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardItemsFilter>;
};


export type QueryCardRowsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardRowsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardRowsFilter>;
};


export type QueryCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselFilter>;
};


export type QueryCarouselItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCarouselItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselItemFilter>;
};


export type QueryColumnArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColumnFilter>;
};


export type QueryColumnLayoutContainerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryColumnLayoutContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ColumnLayoutContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ColumnLayoutContainerFilter>;
};


export type QueryCostCalculatorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCostCalculatorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CostCalculatorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CostCalculatorFilter>;
};


export type QueryCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CtaFilter>;
};


export type QueryDealerPortalLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DealerPortalLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DealerPortalLandingPageFilter>;
};


export type QueryDropdownItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDropdownItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DropdownItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DropdownItemFilter>;
};


export type QueryEmailArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEmailCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmailOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmailFilter>;
};


export type QueryEmbedArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEmbedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EmbedOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmbedFilter>;
};


export type QueryEnergyBlueLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EnergyBlueLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnergyBlueLandingPageFilter>;
};


export type QueryEnergyHubLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EnergyHubLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnergyHubLandingPageFilter>;
};


export type QueryEnginesCostDataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnginesCostDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EnginesCostDataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnginesCostDataFilter>;
};


export type QueryEnginesLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EnginesLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EnginesLandingPageFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFormArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormFilter>;
};


export type QueryFormItemCheckboxArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormItemCheckboxCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemCheckboxOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemCheckboxFilter>;
};


export type QueryFormItemDropdownArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormItemDropdownCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemDropdownOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemDropdownFilter>;
};


export type QueryFormItemInputTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormItemInputTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemInputTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemInputTextFilter>;
};


export type QueryFormItemRadioArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormItemRadioCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemRadioOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemRadioFilter>;
};


export type QueryFormItemRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormItemRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormItemRowFilter>;
};


export type QueryGlobalMapProductCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGlobalMapProductCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GlobalMapProductCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GlobalMapProductCardFilter>;
};


export type QueryHeRdTestTestingToBeDeletedArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeRdTestTestingToBeDeletedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeRdTestTestingToBeDeletedOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeRdTestTestingToBeDeletedFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryHeadingWithSubTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeadingWithSubTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeadingWithSubTextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


export type QueryHeroSectionV2Args = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroSectionV2Order>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroSectionV2Filter>;
};


export type QueryHomeEnergyLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeEnergyLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeEnergyLandingPageFilter>;
};


export type QueryHotSpotContainerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHotSpotContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotSpotContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotSpotContainerFilter>;
};


export type QueryHotspotArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHotspotCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotspotOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotspotFilter>;
};


export type QueryHotspotSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHotspotSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HotspotSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HotspotSectionFilter>;
};


export type QueryInformationModuleRowsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInformationModuleRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleRowsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InformationModuleRowsFilter>;
};


export type QueryInformationModuleSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInformationModuleSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModuleSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InformationModuleSectionFilter>;
};


export type QueryInformationModulesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInformationModulesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InformationModulesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InformationModulesFilter>;
};


export type QueryListArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ListFilter>;
};


export type QueryListRowsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListRowsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ListRowsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ListRowsFilter>;
};


export type QueryMarineLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MarineLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MarineLandingPageFilter>;
};


export type QueryMediaItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediaItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MediaItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


export type QueryNavItemsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavItemsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavItemsFilter>;
};


export type QueryNtAudienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNtAudienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtAudienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtAudienceFilter>;
};


export type QueryNtExperienceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNtExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtExperienceFilter>;
};


export type QueryNtMergetagArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNtMergetagCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NtMergetagOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NtMergetagFilter>;
};


export type QueryPortraitIconCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPortraitIconCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PortraitIconCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortraitIconCardFilter>;
};


export type QueryPowerSystemsLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PowerSystemsLandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PowerSystemsLandingPageFilter>;
};


export type QueryPrimaryNavigationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPrimaryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrimaryNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrimaryNavigationFilter>;
};


export type QueryQuizArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuizCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuizFilter>;
};


export type QueryQuizOptionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuizOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizOptionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuizOptionFilter>;
};


export type QueryRadioItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRadioItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RadioItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RadioItemFilter>;
};


export type QuerySecondaryNavigationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySecondaryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SecondaryNavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SecondaryNavigationFilter>;
};


export type QuerySeoMetadataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


export type QuerySideBySideContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SideBySideContentFilter>;
};


export type QuerySidePanelArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySidePanelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SidePanelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SidePanelFilter>;
};


export type QueryTabArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabFilter>;
};


export type QueryTableSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTableSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TableSectionFilter>;
};


export type QueryTabsSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTabsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabsSectionFilter>;
};


export type QueryTextBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextBannerFilter>;
};


export type QueryTextContentSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextContentSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextContentSectionFilter>;
};


export type QueryTimelineArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineFilter>;
};


export type QueryTimelineWidgetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimelineWidgetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineWidgetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineWidgetFilter>;
};


export type QueryVersionTrackingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVersionTrackingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VersionTrackingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VersionTrackingFilter>;
};


export type QueryVideoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVideoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoFilter>;
};


export type QueryVideoGalleryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVideoGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoGalleryFilter>;
};

/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type Quiz = Entry & _Node & {
  __typename?: 'Quiz';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingWithSubtext?: Maybe<HeadingWithSubText>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuizLinkingCollections>;
  quizOptionsCollection?: Maybe<QuizQuizOptionsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type QuizHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type QuizInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type QuizLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type QuizQuizOptionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizQuizOptionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuizOptionFilter>;
};


/** Quiz Content type will be used whenever we have question answer type of use cases [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quiz) */
export type QuizUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuizCollection = {
  __typename?: 'QuizCollection';
  items: Array<Maybe<Quiz>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuizFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quizOptions?: InputMaybe<CfQuizOptionNestedFilter>;
  quizOptionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizLinkingCollections = {
  __typename?: 'QuizLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  quizOptionCollection?: Maybe<QuizOptionCollection>;
};


export type QuizLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuizLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuizLinkingCollectionsQuizOptionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizLinkingCollectionsQuizOptionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuizLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuizLinkingCollectionsQuizOptionCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOption = Entry & _Node & {
  __typename?: 'QuizOption';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<QuizOptionHeading>;
  headingWithSubtext?: Maybe<HeadingWithSubText>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<QuizOptionLinkingCollections>;
  quiz?: Maybe<Quiz>;
  result?: Maybe<QuizOptionResult>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionQuizArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<QuizFilter>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionResultArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Quiz option should be used with Quiz content model only. This content model provides options needed to display multiple choice type options [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/quizOption) */
export type QuizOptionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuizOptionCollection = {
  __typename?: 'QuizOptionCollection';
  items: Array<Maybe<QuizOption>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuizOptionFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuizOptionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuizOptionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quiz?: InputMaybe<CfQuizNestedFilter>;
  quiz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  result_contains?: InputMaybe<Scalars['String']['input']>;
  result_exists?: InputMaybe<Scalars['Boolean']['input']>;
  result_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizOptionHeading = {
  __typename?: 'QuizOptionHeading';
  json: Scalars['JSON']['output'];
  links: QuizOptionHeadingLinks;
};

export type QuizOptionHeadingAssets = {
  __typename?: 'QuizOptionHeadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type QuizOptionHeadingEntries = {
  __typename?: 'QuizOptionHeadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type QuizOptionHeadingLinks = {
  __typename?: 'QuizOptionHeadingLinks';
  assets: QuizOptionHeadingAssets;
  entries: QuizOptionHeadingEntries;
  resources: QuizOptionHeadingResources;
};

export type QuizOptionHeadingResources = {
  __typename?: 'QuizOptionHeadingResources';
  block: Array<QuizOptionHeadingResourcesBlock>;
  hyperlink: Array<QuizOptionHeadingResourcesHyperlink>;
  inline: Array<QuizOptionHeadingResourcesInline>;
};

export type QuizOptionHeadingResourcesBlock = ResourceLink & {
  __typename?: 'QuizOptionHeadingResourcesBlock';
  sys: ResourceSys;
};

export type QuizOptionHeadingResourcesHyperlink = ResourceLink & {
  __typename?: 'QuizOptionHeadingResourcesHyperlink';
  sys: ResourceSys;
};

export type QuizOptionHeadingResourcesInline = ResourceLink & {
  __typename?: 'QuizOptionHeadingResourcesInline';
  sys: ResourceSys;
};

export type QuizOptionLinkingCollections = {
  __typename?: 'QuizOptionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  quizCollection?: Maybe<QuizCollection>;
};


export type QuizOptionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type QuizOptionLinkingCollectionsQuizCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuizOptionLinkingCollectionsQuizCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuizOptionLinkingCollectionsQuizCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum QuizOptionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuizOptionResult = {
  __typename?: 'QuizOptionResult';
  json: Scalars['JSON']['output'];
  links: QuizOptionResultLinks;
};

export type QuizOptionResultAssets = {
  __typename?: 'QuizOptionResultAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type QuizOptionResultEntries = {
  __typename?: 'QuizOptionResultEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type QuizOptionResultLinks = {
  __typename?: 'QuizOptionResultLinks';
  assets: QuizOptionResultAssets;
  entries: QuizOptionResultEntries;
  resources: QuizOptionResultResources;
};

export type QuizOptionResultResources = {
  __typename?: 'QuizOptionResultResources';
  block: Array<QuizOptionResultResourcesBlock>;
  hyperlink: Array<QuizOptionResultResourcesHyperlink>;
  inline: Array<QuizOptionResultResourcesInline>;
};

export type QuizOptionResultResourcesBlock = ResourceLink & {
  __typename?: 'QuizOptionResultResourcesBlock';
  sys: ResourceSys;
};

export type QuizOptionResultResourcesHyperlink = ResourceLink & {
  __typename?: 'QuizOptionResultResourcesHyperlink';
  sys: ResourceSys;
};

export type QuizOptionResultResourcesInline = ResourceLink & {
  __typename?: 'QuizOptionResultResourcesInline';
  sys: ResourceSys;
};

export enum QuizOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type QuizQuizOptionsCollection = {
  __typename?: 'QuizQuizOptionsCollection';
  items: Array<Maybe<QuizOption>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum QuizQuizOptionsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItem = Entry & _Node & {
  __typename?: 'RadioItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  dataPreference?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<RadioItemLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Scalars['String']['output']>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemDataPreferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Radio Button Individual Item [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/radioItem) */
export type RadioItemValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type RadioItemCollection = {
  __typename?: 'RadioItemCollection';
  items: Array<Maybe<RadioItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RadioItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<RadioItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RadioItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataPreference_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RadioItemLinkingCollections = {
  __typename?: 'RadioItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formItemRadioCollection?: Maybe<FormItemRadioCollection>;
};


export type RadioItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type RadioItemLinkingCollectionsFormItemRadioCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<RadioItemLinkingCollectionsFormItemRadioCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum RadioItemLinkingCollectionsFormItemRadioCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  IsDefaultAsc = 'isDefault_ASC',
  IsDefaultDesc = 'isDefault_DESC',
  IsRequiredAsc = 'isRequired_ASC',
  IsRequiredDesc = 'isRequired_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  RadioGroupNameAsc = 'radioGroupName_ASC',
  RadioGroupNameDesc = 'radioGroupName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum RadioItemOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigation = Entry & _Node & {
  __typename?: 'SecondaryNavigation';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SecondaryNavigationLinkingCollections>;
  navigationItemsCollection?: Maybe<SecondaryNavigationNavigationItemsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigationAriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigationInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigationNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SecondaryNavigationNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavItemsFilter>;
};


/** Site page secondary navigation [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/secondaryNavigation) */
export type SecondaryNavigationUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SecondaryNavigationCollection = {
  __typename?: 'SecondaryNavigationCollection';
  items: Array<Maybe<SecondaryNavigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SecondaryNavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<SecondaryNavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SecondaryNavigationFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItems?: InputMaybe<CfNavItemsNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SecondaryNavigationLinkingCollections = {
  __typename?: 'SecondaryNavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
};


export type SecondaryNavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SecondaryNavigationLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SecondaryNavigationLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SecondaryNavigationLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SecondaryNavigationLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SecondaryNavigationLinkingCollectionsFooterCollectionOrder {
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SubTextAsc = 'subText_ASC',
  SubTextDesc = 'subText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SecondaryNavigationLinkingCollectionsHeaderCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoAltTextAsc = 'logoAltText_ASC',
  LogoAltTextDesc = 'logoAltText_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SecondaryNavigationNavigationItemsCollection = {
  __typename?: 'SecondaryNavigationNavigationItemsCollection';
  items: Array<Maybe<NavItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SecondaryNavigationNavigationItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum SecondaryNavigationOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadata = Entry & _Node & {
  __typename?: 'SeoMetadata';
  _id: Scalars['ID']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  hideFromSearchEngines?: Maybe<Scalars['Boolean']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SeoMetadataLinkingCollections>;
  logoImage?: Maybe<Asset>;
  ogDescription?: Maybe<Scalars['String']['output']>;
  ogImage?: Maybe<Scalars['String']['output']>;
  ogTitle?: Maybe<Scalars['String']['output']>;
  ogType?: Maybe<Scalars['String']['output']>;
  ogUrl?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  viewport?: Maybe<Scalars['String']['output']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataHideFromSearchEnginesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataLogoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataOgDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataOgImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataOgTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataOgTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataOgUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Landing page SEO data [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/seoMetadata) */
export type SeoMetadataViewportArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoMetadataCollection = {
  __typename?: 'SeoMetadataCollection';
  items: Array<Maybe<SeoMetadata>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hideFromSearchEngines?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromSearchEngines_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromSearchEngines_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogImage?: InputMaybe<Scalars['String']['input']>;
  ogImage_contains?: InputMaybe<Scalars['String']['input']>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogImage_not?: InputMaybe<Scalars['String']['input']>;
  ogImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogType?: InputMaybe<Scalars['String']['input']>;
  ogType_contains?: InputMaybe<Scalars['String']['input']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogType_not?: InputMaybe<Scalars['String']['input']>;
  ogType_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogUrl?: InputMaybe<Scalars['String']['input']>;
  ogUrl_contains?: InputMaybe<Scalars['String']['input']>;
  ogUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogUrl_not?: InputMaybe<Scalars['String']['input']>;
  ogUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viewport?: InputMaybe<Scalars['String']['input']>;
  viewport_contains?: InputMaybe<Scalars['String']['input']>;
  viewport_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viewport_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  viewport_not?: InputMaybe<Scalars['String']['input']>;
  viewport_not_contains?: InputMaybe<Scalars['String']['input']>;
  viewport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoMetadataLinkingCollections = {
  __typename?: 'SeoMetadataLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type SeoMetadataLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoMetadataLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HideFromSearchEnginesAsc = 'hideFromSearchEngines_ASC',
  HideFromSearchEnginesDesc = 'hideFromSearchEngines_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  OgDescriptionAsc = 'ogDescription_ASC',
  OgDescriptionDesc = 'ogDescription_DESC',
  OgImageAsc = 'ogImage_ASC',
  OgImageDesc = 'ogImage_DESC',
  OgTitleAsc = 'ogTitle_ASC',
  OgTitleDesc = 'ogTitle_DESC',
  OgTypeAsc = 'ogType_ASC',
  OgTypeDesc = 'ogType_DESC',
  OgUrlAsc = 'ogUrl_ASC',
  OgUrlDesc = 'ogUrl_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ViewportAsc = 'viewport_ASC',
  ViewportDesc = 'viewport_DESC'
}

/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContent = Entry & _Node & {
  __typename?: 'SideBySideContent';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  defaultPadding?: Maybe<Scalars['Boolean']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  leftContentCollection?: Maybe<SideBySideContentLeftContentCollection>;
  linkedFrom?: Maybe<SideBySideContentLinkingCollections>;
  rightContentCollection?: Maybe<SideBySideContentRightContentCollection>;
  sys: Sys;
  textColor?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentDefaultPaddingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentLeftContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SideBySideContentLeftContentFilter>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentRightContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SideBySideContentRightContentFilter>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Customized model that allows for 30/70, 70/30, or 50/50, 60/40 content section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sideBySideContent) */
export type SideBySideContentVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SideBySideContentCollection = {
  __typename?: 'SideBySideContentCollection';
  items: Array<Maybe<SideBySideContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SideBySideContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<SideBySideContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SideBySideContentFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  defaultPadding?: InputMaybe<Scalars['Boolean']['input']>;
  defaultPadding_exists?: InputMaybe<Scalars['Boolean']['input']>;
  defaultPadding_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  leftContent?: InputMaybe<CfleftContentMultiTypeNestedFilter>;
  leftContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rightContent?: InputMaybe<CfrightContentMultiTypeNestedFilter>;
  rightContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SideBySideContentLeftContentCollection = {
  __typename?: 'SideBySideContentLeftContentCollection';
  items: Array<Maybe<SideBySideContentLeftContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SideBySideContentLeftContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<SideBySideContentLeftContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SideBySideContentLeftContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SideBySideContentLeftContentItem = Form | HeadingWithSubText | HotSpotContainer | HotspotSection | List | ListRows | MediaItem | TextContentSection;

export type SideBySideContentLinkingCollections = {
  __typename?: 'SideBySideContentLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroSectionV2Collection?: Maybe<HeroSectionV2Collection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type SideBySideContentLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsHeroSectionV2CollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsHeroSectionV2CollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideBySideContentLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideBySideContentLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SideBySideContentLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsHeroSectionV2CollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DarkeningLayerOpacityAsc = 'darkeningLayerOpacity_ASC',
  DarkeningLayerOpacityDesc = 'darkeningLayerOpacity_DESC',
  HeroHeightVariantAsc = 'heroHeightVariant_ASC',
  HeroHeightVariantDesc = 'heroHeightVariant_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SideBySideContentOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type SideBySideContentRightContentCollection = {
  __typename?: 'SideBySideContentRightContentCollection';
  items: Array<Maybe<SideBySideContentRightContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SideBySideContentRightContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<SideBySideContentRightContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SideBySideContentRightContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SideBySideContentRightContentItem = Form | HeadingWithSubText | HotSpotContainer | HotspotSection | List | ListRows | MediaItem | TextContentSection;

/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanel = Entry & _Node & {
  __typename?: 'SidePanel';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingWithSubText?: Maybe<HeadingWithSubText>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SidePanelLinkingCollections>;
  navigationItemsCollection?: Maybe<SidePanelNavigationItemsCollection>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanelHeadingWithSubTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanelInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanelNavigationItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SidePanelNavigationItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavItemsFilter>;
};


/** Site Panel is a panel having a title, description and navigation links associated with it [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/sidePanel) */
export type SidePanelUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SidePanelCollection = {
  __typename?: 'SidePanelCollection';
  items: Array<Maybe<SidePanel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SidePanelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SidePanelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SidePanelFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubText?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItems?: InputMaybe<CfNavItemsNestedFilter>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SidePanelLinkingCollections = {
  __typename?: 'SidePanelLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type SidePanelLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SidePanelLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SidePanelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SidePanelLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SidePanelNavigationItemsCollection = {
  __typename?: 'SidePanelNavigationItemsCollection';
  items: Array<Maybe<NavItems>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SidePanelNavigationItemsCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlOpenerTypeAsc = 'urlOpenerType_ASC',
  UrlOpenerTypeDesc = 'urlOpenerType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum SidePanelOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type Tab = Entry & _Node & {
  __typename?: 'Tab';
  _id: Scalars['ID']['output'];
  accordionCollection?: Maybe<TabAccordionCollection>;
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TabLinkingCollections>;
  sys: Sys;
  tabAccordionCollection?: Maybe<TabTabAccordionCollection>;
  textContentSection?: Maybe<TextContentSection>;
  title?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabAccordionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionFilter>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabTabAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabTextContentSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TextContentSectionFilter>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** The Tab will go under the tab section. [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tab) */
export type TabUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TabAccordionCollection = {
  __typename?: 'TabAccordionCollection';
  items: Array<Maybe<Accordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabAccordionCollectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TabCollection = {
  __typename?: 'TabCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TabFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabFilter>>>;
  accordion?: InputMaybe<CfAccordionNestedFilter>;
  accordionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabAccordionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentSection?: InputMaybe<CfTextContentSectionNestedFilter>;
  textContentSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TabLinkingCollections = {
  __typename?: 'TabLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  tabsSectionCollection?: Maybe<TabsSectionCollection>;
};


export type TabLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabLinkingCollectionsTabsSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabLinkingCollectionsTabsSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TabLinkingCollectionsTabsSectionCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type TabTabAccordionCollection = {
  __typename?: 'TabTabAccordionCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSection = Entry & _Node & {
  __typename?: 'TableSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  filtersCollection?: Maybe<TableSectionFiltersCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TableSectionLinkingCollections>;
  showSearchInput?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  uploadFile?: Maybe<Asset>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionFiltersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionShowSearchInputArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionUploadFileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To render a table section [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tableSection) */
export type TableSectionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TableSectionCollection = {
  __typename?: 'TableSectionCollection';
  items: Array<Maybe<TableSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TableSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TableSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TableSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  filtersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showSearchInput?: InputMaybe<Scalars['Boolean']['input']>;
  showSearchInput_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showSearchInput_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  uploadFile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableSectionFiltersCollection = {
  __typename?: 'TableSectionFiltersCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TableSectionLinkingCollections = {
  __typename?: 'TableSectionLinkingCollections';
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type TableSectionLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TableSectionLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TableSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TableSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TableSectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  ShowSearchInputAsc = 'showSearchInput_ASC',
  ShowSearchInputDesc = 'showSearchInput_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** This content type creates a tab section that will include multiple tabs and their tab rows [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tabsSection) */
export type TabsSection = Entry & _Node & {
  __typename?: 'TabsSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TabsSectionLinkingCollections>;
  sys: Sys;
  tabsCollection?: Maybe<TabsSectionTabsCollection>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** This content type creates a tab section that will include multiple tabs and their tab rows [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tabsSection) */
export type TabsSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** This content type creates a tab section that will include multiple tabs and their tab rows [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tabsSection) */
export type TabsSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** This content type creates a tab section that will include multiple tabs and their tab rows [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tabsSection) */
export type TabsSectionTabsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionTabsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TabFilter>;
};


/** This content type creates a tab section that will include multiple tabs and their tab rows [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/tabsSection) */
export type TabsSectionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TabsSectionCollection = {
  __typename?: 'TabsSectionCollection';
  items: Array<Maybe<TabsSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TabsSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TabsSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TabsSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabs?: InputMaybe<CfTabNestedFilter>;
  tabsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TabsSectionLinkingCollections = {
  __typename?: 'TabsSectionLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type TabsSectionLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TabsSectionLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TabsSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TabsSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TabsSectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TabsSectionTabsCollection = {
  __typename?: 'TabsSectionTabsCollection';
  items: Array<Maybe<Tab>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TabsSectionTabsCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBanner = Entry & _Node & {
  __typename?: 'TextBanner';
  _id: Scalars['ID']['output'];
  ariaLabel?: Maybe<Scalars['String']['output']>;
  bannerBackgroundColor?: Maybe<Scalars['String']['output']>;
  bannerBackgroundImage?: Maybe<MediaItem>;
  bannerText?: Maybe<TextBannerBannerText>;
  bannerTextFontColor?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaCollection?: Maybe<TextBannerCtaCollection>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TextBannerLinkingCollections>;
  sys: Sys;
  url?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerAriaLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerBannerBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerBannerBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MediaItemFilter>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerBannerTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerBannerTextFontColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this content type to create a site text banner with a link or CTA [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textBanner) */
export type TextBannerUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextBannerBannerText = {
  __typename?: 'TextBannerBannerText';
  json: Scalars['JSON']['output'];
  links: TextBannerBannerTextLinks;
};

export type TextBannerBannerTextAssets = {
  __typename?: 'TextBannerBannerTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextBannerBannerTextEntries = {
  __typename?: 'TextBannerBannerTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextBannerBannerTextLinks = {
  __typename?: 'TextBannerBannerTextLinks';
  assets: TextBannerBannerTextAssets;
  entries: TextBannerBannerTextEntries;
  resources: TextBannerBannerTextResources;
};

export type TextBannerBannerTextResources = {
  __typename?: 'TextBannerBannerTextResources';
  block: Array<TextBannerBannerTextResourcesBlock>;
  hyperlink: Array<TextBannerBannerTextResourcesHyperlink>;
  inline: Array<TextBannerBannerTextResourcesInline>;
};

export type TextBannerBannerTextResourcesBlock = ResourceLink & {
  __typename?: 'TextBannerBannerTextResourcesBlock';
  sys: ResourceSys;
};

export type TextBannerBannerTextResourcesHyperlink = ResourceLink & {
  __typename?: 'TextBannerBannerTextResourcesHyperlink';
  sys: ResourceSys;
};

export type TextBannerBannerTextResourcesInline = ResourceLink & {
  __typename?: 'TextBannerBannerTextResourcesInline';
  sys: ResourceSys;
};

export type TextBannerCollection = {
  __typename?: 'TextBannerCollection';
  items: Array<Maybe<TextBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextBannerCtaCollection = {
  __typename?: 'TextBannerCtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TextBannerCtaCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BrandColorAsc = 'brandColor_ASC',
  BrandColorDesc = 'brandColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  OpenerTypeAsc = 'openerType_ASC',
  OpenerTypeDesc = 'openerType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlTypeAsc = 'urlType_ASC',
  UrlTypeDesc = 'urlType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type TextBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextBannerFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerBackgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundImage?: InputMaybe<CfMediaItemNestedFilter>;
  bannerBackgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTextFontColor?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTextFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerTextFontColor_not?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerText_contains?: InputMaybe<Scalars['String']['input']>;
  bannerText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerText_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBannerLinkingCollections = {
  __typename?: 'TextBannerLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type TextBannerLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBannerLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBannerLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextBannerLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsHeaderCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LogoAltTextAsc = 'logoAltText_ASC',
  LogoAltTextDesc = 'logoAltText_DESC',
  LogoUrlAsc = 'logoUrl_ASC',
  LogoUrlDesc = 'logoUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBannerOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BannerBackgroundColorAsc = 'bannerBackgroundColor_ASC',
  BannerBackgroundColorDesc = 'bannerBackgroundColor_DESC',
  BannerTextFontColorAsc = 'bannerTextFontColor_ASC',
  BannerTextFontColorDesc = 'bannerTextFontColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSection = Entry & _Node & {
  __typename?: 'TextContentSection';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaCollection?: Maybe<TextContentSectionCtaCollection>;
  date?: Maybe<Scalars['DateTime']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  headingFontColor?: Maybe<Scalars['String']['output']>;
  headingSize?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TextContentSectionLinkingCollections>;
  sectionId?: Maybe<Scalars['String']['output']>;
  styledHeading?: Maybe<TextContentSectionStyledHeading>;
  sys: Sys;
  textContent?: Maybe<TextContentSectionTextContent>;
  textContentAlignment?: Maybe<Scalars['String']['output']>;
  textContentFontColor?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CtaFilter>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionHeadingFontColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionHeadingSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionSectionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionStyledHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionTextContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionTextContentAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionTextContentFontColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To create a copy with long text and links or CTAs [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/textContentSection) */
export type TextContentSectionUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextContentSectionCollection = {
  __typename?: 'TextContentSectionCollection';
  items: Array<Maybe<TextContentSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextContentSectionCtaCollection = {
  __typename?: 'TextContentSectionCtaCollection';
  items: Array<Maybe<Cta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TextContentSectionCtaCollectionOrder {
  AriaLabelAsc = 'ariaLabel_ASC',
  AriaLabelDesc = 'ariaLabel_DESC',
  BrandColorAsc = 'brandColor_ASC',
  BrandColorDesc = 'brandColor_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  OpenerTypeAsc = 'openerType_ASC',
  OpenerTypeDesc = 'openerType_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UrlTypeAsc = 'urlType_ASC',
  UrlTypeDesc = 'urlType_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  VisibleAsc = 'visible_ASC',
  VisibleDesc = 'visible_DESC'
}

export type TextContentSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextContentSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextContentSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfCtaNestedFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingFontColor?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingFontColor_not?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styledHeading_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  textContentAlignment?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentAlignment_not?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentFontColor?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentFontColor_not?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContent_contains?: InputMaybe<Scalars['String']['input']>;
  textContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextContentSectionLinkingCollections = {
  __typename?: 'TextContentSectionLinkingCollections';
  columnCollection?: Maybe<ColumnCollection>;
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  formItemRowCollection?: Maybe<FormItemRowCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
  sideBySideContentCollection?: Maybe<SideBySideContentCollection>;
  tabCollection?: Maybe<TabCollection>;
  videoGalleryCollection?: Maybe<VideoGalleryCollection>;
};


export type TextContentSectionLinkingCollectionsColumnCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsColumnCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsFormItemRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsFormItemRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsSideBySideContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsSideBySideContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsTabCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsTabCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextContentSectionLinkingCollectionsVideoGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextContentSectionLinkingCollectionsVideoGalleryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextContentSectionLinkingCollectionsColumnCollectionOrder {
  ColumnGapAsc = 'columnGap_ASC',
  ColumnGapDesc = 'columnGap_DESC',
  ColumnNumberAsc = 'columnNumber_ASC',
  ColumnNumberDesc = 'columnNumber_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  RowGapAsc = 'rowGap_ASC',
  RowGapDesc = 'rowGap_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsFormItemRowCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum TextContentSectionLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionLinkingCollectionsSideBySideContentCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  DefaultPaddingAsc = 'defaultPadding_ASC',
  DefaultPaddingDesc = 'defaultPadding_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum TextContentSectionLinkingCollectionsTabCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TextContentSectionLinkingCollectionsVideoGalleryCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextContentSectionOrder {
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  HeadingFontColorAsc = 'headingFontColor_ASC',
  HeadingFontColorDesc = 'headingFontColor_DESC',
  HeadingSizeAsc = 'headingSize_ASC',
  HeadingSizeDesc = 'headingSize_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextContentAlignmentAsc = 'textContentAlignment_ASC',
  TextContentAlignmentDesc = 'textContentAlignment_DESC',
  TextContentFontColorAsc = 'textContentFontColor_ASC',
  TextContentFontColorDesc = 'textContentFontColor_DESC'
}

export type TextContentSectionStyledHeading = {
  __typename?: 'TextContentSectionStyledHeading';
  json: Scalars['JSON']['output'];
  links: TextContentSectionStyledHeadingLinks;
};

export type TextContentSectionStyledHeadingAssets = {
  __typename?: 'TextContentSectionStyledHeadingAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextContentSectionStyledHeadingEntries = {
  __typename?: 'TextContentSectionStyledHeadingEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextContentSectionStyledHeadingLinks = {
  __typename?: 'TextContentSectionStyledHeadingLinks';
  assets: TextContentSectionStyledHeadingAssets;
  entries: TextContentSectionStyledHeadingEntries;
  resources: TextContentSectionStyledHeadingResources;
};

export type TextContentSectionStyledHeadingResources = {
  __typename?: 'TextContentSectionStyledHeadingResources';
  block: Array<TextContentSectionStyledHeadingResourcesBlock>;
  hyperlink: Array<TextContentSectionStyledHeadingResourcesHyperlink>;
  inline: Array<TextContentSectionStyledHeadingResourcesInline>;
};

export type TextContentSectionStyledHeadingResourcesBlock = ResourceLink & {
  __typename?: 'TextContentSectionStyledHeadingResourcesBlock';
  sys: ResourceSys;
};

export type TextContentSectionStyledHeadingResourcesHyperlink = ResourceLink & {
  __typename?: 'TextContentSectionStyledHeadingResourcesHyperlink';
  sys: ResourceSys;
};

export type TextContentSectionStyledHeadingResourcesInline = ResourceLink & {
  __typename?: 'TextContentSectionStyledHeadingResourcesInline';
  sys: ResourceSys;
};

export type TextContentSectionTextContent = {
  __typename?: 'TextContentSectionTextContent';
  json: Scalars['JSON']['output'];
  links: TextContentSectionTextContentLinks;
};

export type TextContentSectionTextContentAssets = {
  __typename?: 'TextContentSectionTextContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextContentSectionTextContentEntries = {
  __typename?: 'TextContentSectionTextContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextContentSectionTextContentLinks = {
  __typename?: 'TextContentSectionTextContentLinks';
  assets: TextContentSectionTextContentAssets;
  entries: TextContentSectionTextContentEntries;
  resources: TextContentSectionTextContentResources;
};

export type TextContentSectionTextContentResources = {
  __typename?: 'TextContentSectionTextContentResources';
  block: Array<TextContentSectionTextContentResourcesBlock>;
  hyperlink: Array<TextContentSectionTextContentResourcesHyperlink>;
  inline: Array<TextContentSectionTextContentResourcesInline>;
};

export type TextContentSectionTextContentResourcesBlock = ResourceLink & {
  __typename?: 'TextContentSectionTextContentResourcesBlock';
  sys: ResourceSys;
};

export type TextContentSectionTextContentResourcesHyperlink = ResourceLink & {
  __typename?: 'TextContentSectionTextContentResourcesHyperlink';
  sys: ResourceSys;
};

export type TextContentSectionTextContentResourcesInline = ResourceLink & {
  __typename?: 'TextContentSectionTextContentResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timeline) */
export type Timeline = Entry & _Node & {
  __typename?: 'Timeline';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TimelineLinkingCollections>;
  sys: Sys;
  timelineEventDate?: Maybe<Scalars['String']['output']>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timeline) */
export type TimelineInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timeline) */
export type TimelineLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timeline) */
export type TimelineTimelineEventDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timeline) */
export type TimelineUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineCollection = {
  __typename?: 'TimelineCollection';
  items: Array<Maybe<Timeline>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimelineFilter = {
  AND?: InputMaybe<Array<InputMaybe<TimelineFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TimelineFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timelineEventDate?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_contains?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timelineEventDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timelineEventDate_not?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TimelineLinkingCollections = {
  __typename?: 'TimelineLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  timelineWidgetCollection?: Maybe<TimelineWidgetCollection>;
};


export type TimelineLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineLinkingCollectionsTimelineWidgetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineLinkingCollectionsTimelineWidgetCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimelineLinkingCollectionsTimelineWidgetCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TimelineOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimelineEventDateAsc = 'timelineEventDate_ASC',
  TimelineEventDateDesc = 'timelineEventDate_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timelineWidget) */
export type TimelineWidget = Entry & _Node & {
  __typename?: 'TimelineWidget';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TimelineWidgetLinkingCollections>;
  sys: Sys;
  timelineCollection?: Maybe<TimelineWidgetTimelineCollection>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timelineWidget) */
export type TimelineWidgetInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timelineWidget) */
export type TimelineWidgetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timelineWidget) */
export type TimelineWidgetTimelineCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineWidgetTimelineCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TimelineFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/timelineWidget) */
export type TimelineWidgetUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TimelineWidgetCollection = {
  __typename?: 'TimelineWidgetCollection';
  items: Array<Maybe<TimelineWidget>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TimelineWidgetFilter = {
  AND?: InputMaybe<Array<InputMaybe<TimelineWidgetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TimelineWidgetFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timeline?: InputMaybe<CfTimelineNestedFilter>;
  timelineCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TimelineWidgetLinkingCollections = {
  __typename?: 'TimelineWidgetLinkingCollections';
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TimelineWidgetLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TimelineWidgetLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TimelineWidgetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TimelineWidgetLinkingCollectionsCarouselCollectionOrder {
  AutoRotationIntervalInSecondsAsc = 'autoRotationIntervalInSeconds_ASC',
  AutoRotationIntervalInSecondsDesc = 'autoRotationIntervalInSeconds_DESC',
  EnableAutoRotationAsc = 'enableAutoRotation_ASC',
  EnableAutoRotationDesc = 'enableAutoRotation_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TimelineWidgetOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TimelineWidgetTimelineCollection = {
  __typename?: 'TimelineWidgetTimelineCollection';
  items: Array<Maybe<Timeline>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TimelineWidgetTimelineCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimelineEventDateAsc = 'timelineEventDate_ASC',
  TimelineEventDateDesc = 'timelineEventDate_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/versionTracking) */
export type VersionTracking = Entry & _Node & {
  __typename?: 'VersionTracking';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VersionTrackingLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/versionTracking) */
export type VersionTrackingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/versionTracking) */
export type VersionTrackingUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/versionTracking) */
export type VersionTrackingVersionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type VersionTrackingCollection = {
  __typename?: 'VersionTrackingCollection';
  items: Array<Maybe<VersionTracking>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VersionTrackingFilter = {
  AND?: InputMaybe<Array<InputMaybe<VersionTrackingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionTrackingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_contains?: InputMaybe<Scalars['String']['input']>;
  version_exists?: InputMaybe<Scalars['Boolean']['input']>;
  version_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_not?: InputMaybe<Scalars['String']['input']>;
  version_not_contains?: InputMaybe<Scalars['String']['input']>;
  version_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionTrackingLinkingCollections = {
  __typename?: 'VersionTrackingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VersionTrackingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VersionTrackingOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VersionAsc = 'version_ASC',
  VersionDesc = 'version_DESC'
}

/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type Video = Entry & _Node & {
  __typename?: 'Video';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headingWithSubtext?: Maybe<HeadingWithSubText>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VideoLinkingCollections>;
  sys: Sys;
  thumbnail?: Maybe<Asset>;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  video?: Maybe<Asset>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeadingWithSubTextFilter>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoThumbnailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Video for video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/video) */
export type VideoVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoCollection = {
  __typename?: 'VideoCollection';
  items: Array<Maybe<Video>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext?: InputMaybe<CfHeadingWithSubTextNestedFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGallery = Entry & _Node & {
  __typename?: 'VideoGallery';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VideoGalleryLinkingCollections>;
  sys: Sys;
  userAccess?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  videoHeadingWithSubtext?: Maybe<VideoGalleryVideoHeadingWithSubtext>;
  videosCollection?: Maybe<VideoGalleryVideosCollection>;
};


/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGalleryInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGalleryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGalleryUserAccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGalleryVideoHeadingWithSubtextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** To render video gallery [See type definition](https://app.contentful.com/spaces/zlhl2y58oyef/content_types/videoGallery) */
export type VideoGalleryVideosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryVideosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VideoFilter>;
};

export type VideoGalleryCollection = {
  __typename?: 'VideoGalleryCollection';
  items: Array<Maybe<VideoGallery>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VideoGalleryFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoGalleryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoGalleryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videoHeadingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  videos?: InputMaybe<CfVideoNestedFilter>;
  videosCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoGalleryLinkingCollections = {
  __typename?: 'VideoGalleryLinkingCollections';
  dealerPortalLandingPageCollection?: Maybe<DealerPortalLandingPageCollection>;
  energyBlueLandingPageCollection?: Maybe<EnergyBlueLandingPageCollection>;
  energyHubLandingPageCollection?: Maybe<EnergyHubLandingPageCollection>;
  enginesLandingPageCollection?: Maybe<EnginesLandingPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeEnergyLandingPageCollection?: Maybe<HomeEnergyLandingPageCollection>;
  marineLandingPageCollection?: Maybe<MarineLandingPageCollection>;
  powerSystemsLandingPageCollection?: Maybe<PowerSystemsLandingPageCollection>;
};


export type VideoGalleryLinkingCollectionsDealerPortalLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsDealerPortalLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsEnergyBlueLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsEnergyBlueLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsEnergyHubLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsEnergyHubLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsEnginesLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsEnginesLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsHomeEnergyLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsHomeEnergyLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsMarineLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsMarineLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoGalleryLinkingCollectionsPowerSystemsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoGalleryLinkingCollectionsPowerSystemsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoGalleryLinkingCollectionsDealerPortalLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsEnergyBlueLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsEnergyHubLandingPageCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsEnginesLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsHomeEnergyLandingPageCollectionOrder {
  ExternalContentAsc = 'externalContent_ASC',
  ExternalContentDesc = 'externalContent_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsMarineLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryLinkingCollectionsPowerSystemsLandingPageCollectionOrder {
  HeadingPositionAsc = 'headingPosition_ASC',
  HeadingPositionDesc = 'headingPosition_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  PageHeadingAsc = 'pageHeading_ASC',
  PageHeadingDesc = 'pageHeading_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoGalleryOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type VideoGalleryVideoHeadingWithSubtext = HeadingWithSubText | TextContentSection;

export type VideoGalleryVideosCollection = {
  __typename?: 'VideoGalleryVideosCollection';
  items: Array<Maybe<Video>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum VideoGalleryVideosCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type VideoLinkingCollections = {
  __typename?: 'VideoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  videoGalleryCollection?: Maybe<VideoGalleryCollection>;
};


export type VideoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type VideoLinkingCollectionsVideoGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VideoLinkingCollectionsVideoGalleryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VideoLinkingCollectionsVideoGalleryCollectionOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VideoOrder {
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfAccordionContentNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAccordionContentNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAccordionContentNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineSubText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfAccordionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAccordionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAccordionNestedFilter>>>;
  accordionContentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  collapseIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  expandIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfCardItemsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCardItemsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCardItemsNestedFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon?: InputMaybe<Scalars['String']['input']>;
  icon_contains?: InputMaybe<Scalars['String']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  icon_not?: InputMaybe<Scalars['String']['input']>;
  icon_not_contains?: InputMaybe<Scalars['String']['input']>;
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagePosition?: InputMaybe<Scalars['String']['input']>;
  imagePosition_contains?: InputMaybe<Scalars['String']['input']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imagePosition_not?: InputMaybe<Scalars['String']['input']>;
  imagePosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  imagePosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor_not?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphText_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfCardRowsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCardRowsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCardRowsNestedFilter>>>;
  cardItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfCarouselItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCarouselItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCarouselItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  darkeningLayerOpacity?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  darkeningLayerOpacity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  darkeningLayerOpacity_not?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_contains?: InputMaybe<Scalars['String']['input']>;
  darkeningLayerOpacity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headlineSize?: InputMaybe<Scalars['String']['input']>;
  headlineSize_contains?: InputMaybe<Scalars['String']['input']>;
  headlineSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineSize_not?: InputMaybe<Scalars['String']['input']>;
  headlineSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineTextColor?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headlineTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headlineTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headlineTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphTextColor_not?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  paragraphText_contains?: InputMaybe<Scalars['String']['input']>;
  paragraphText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraphText_not_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeadline_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeadline_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  textAlignment?: InputMaybe<Scalars['String']['input']>;
  textAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  textAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textAlignment_not?: InputMaybe<Scalars['String']['input']>;
  textAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  textAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfColumnNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfColumnNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfColumnNestedFilter>>>;
  columnGap?: InputMaybe<Scalars['String']['input']>;
  columnGap_contains?: InputMaybe<Scalars['String']['input']>;
  columnGap_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnGap_not?: InputMaybe<Scalars['String']['input']>;
  columnGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  columnGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnNumber?: InputMaybe<Scalars['String']['input']>;
  columnNumber_contains?: InputMaybe<Scalars['String']['input']>;
  columnNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columnNumber_not?: InputMaybe<Scalars['String']['input']>;
  columnNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  columnNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowGap?: InputMaybe<Scalars['String']['input']>;
  rowGap_contains?: InputMaybe<Scalars['String']['input']>;
  rowGap_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rowGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowGap_not?: InputMaybe<Scalars['String']['input']>;
  rowGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  rowGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfCtaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCtaNestedFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandColor?: InputMaybe<Scalars['String']['input']>;
  brandColor_contains?: InputMaybe<Scalars['String']['input']>;
  brandColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandColor_not?: InputMaybe<Scalars['String']['input']>;
  brandColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  brandColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buttonMediaItem_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openerType?: InputMaybe<Scalars['String']['input']>;
  openerType_contains?: InputMaybe<Scalars['String']['input']>;
  openerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openerType_not?: InputMaybe<Scalars['String']['input']>;
  openerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  openerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlType?: InputMaybe<Scalars['String']['input']>;
  urlType_contains?: InputMaybe<Scalars['String']['input']>;
  urlType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlType_not?: InputMaybe<Scalars['String']['input']>;
  urlType_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  visible?: InputMaybe<Scalars['String']['input']>;
  visible_contains?: InputMaybe<Scalars['String']['input']>;
  visible_exists?: InputMaybe<Scalars['Boolean']['input']>;
  visible_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  visible_not?: InputMaybe<Scalars['String']['input']>;
  visible_not_contains?: InputMaybe<Scalars['String']['input']>;
  visible_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfEmailNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEmailNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEmailNestedFilter>>>;
  bcc?: InputMaybe<Scalars['String']['input']>;
  bcc_contains?: InputMaybe<Scalars['String']['input']>;
  bcc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bcc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bcc_not?: InputMaybe<Scalars['String']['input']>;
  bcc_not_contains?: InputMaybe<Scalars['String']['input']>;
  bcc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cc?: InputMaybe<Scalars['String']['input']>;
  cc_contains?: InputMaybe<Scalars['String']['input']>;
  cc_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cc_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cc_not?: InputMaybe<Scalars['String']['input']>;
  cc_not_contains?: InputMaybe<Scalars['String']['input']>;
  cc_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_exists?: InputMaybe<Scalars['Boolean']['input']>;
  from_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority?: InputMaybe<Scalars['String']['input']>;
  priority_contains?: InputMaybe<Scalars['String']['input']>;
  priority_exists?: InputMaybe<Scalars['Boolean']['input']>;
  priority_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  priority_not?: InputMaybe<Scalars['String']['input']>;
  priority_not_contains?: InputMaybe<Scalars['String']['input']>;
  priority_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  recipients_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  subject_contains?: InputMaybe<Scalars['String']['input']>;
  subject_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subject_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subject_not?: InputMaybe<Scalars['String']['input']>;
  subject_not_contains?: InputMaybe<Scalars['String']['input']>;
  subject_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfEnginesCostDataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEnginesCostDataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEnginesCostDataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  currentFilter?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  currentFilter_gt?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_gte?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  currentFilter_lt?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_lte?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_not?: InputMaybe<Scalars['Float']['input']>;
  currentFilter_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  engines?: InputMaybe<Scalars['String']['input']>;
  engines_contains?: InputMaybe<Scalars['String']['input']>;
  engines_exists?: InputMaybe<Scalars['Boolean']['input']>;
  engines_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  engines_not?: InputMaybe<Scalars['String']['input']>;
  engines_not_contains?: InputMaybe<Scalars['String']['input']>;
  engines_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<Scalars['Int']['input']>;
  filters_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filters_gt?: InputMaybe<Scalars['Int']['input']>;
  filters_gte?: InputMaybe<Scalars['Int']['input']>;
  filters_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  filters_lt?: InputMaybe<Scalars['Int']['input']>;
  filters_lte?: InputMaybe<Scalars['Int']['input']>;
  filters_not?: InputMaybe<Scalars['Int']['input']>;
  filters_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kits?: InputMaybe<Scalars['Float']['input']>;
  kits_exists?: InputMaybe<Scalars['Boolean']['input']>;
  kits_gt?: InputMaybe<Scalars['Float']['input']>;
  kits_gte?: InputMaybe<Scalars['Float']['input']>;
  kits_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  kits_lt?: InputMaybe<Scalars['Float']['input']>;
  kits_lte?: InputMaybe<Scalars['Float']['input']>;
  kits_not?: InputMaybe<Scalars['Float']['input']>;
  kits_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  oilUnitCost?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_exists?: InputMaybe<Scalars['Boolean']['input']>;
  oilUnitCost_gt?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_gte?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  oilUnitCost_lt?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_lte?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_not?: InputMaybe<Scalars['Float']['input']>;
  oilUnitCost_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  quarts?: InputMaybe<Scalars['Int']['input']>;
  quarts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quarts_gt?: InputMaybe<Scalars['Int']['input']>;
  quarts_gte?: InputMaybe<Scalars['Int']['input']>;
  quarts_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  quarts_lt?: InputMaybe<Scalars['Int']['input']>;
  quarts_lte?: InputMaybe<Scalars['Int']['input']>;
  quarts_not?: InputMaybe<Scalars['Int']['input']>;
  quarts_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  uid?: InputMaybe<Scalars['Int']['input']>;
  uid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  uid_gt?: InputMaybe<Scalars['Int']['input']>;
  uid_gte?: InputMaybe<Scalars['Int']['input']>;
  uid_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  uid_lt?: InputMaybe<Scalars['Int']['input']>;
  uid_lte?: InputMaybe<Scalars['Int']['input']>;
  uid_not?: InputMaybe<Scalars['Int']['input']>;
  uid_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfFormItemRowNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFormItemRowNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFormItemRowNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  formItemSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHeadingWithSubTextNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeadingWithSubTextNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeadingWithSubTextNestedFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentCopyAlignment?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentCopyAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentCopyAlignment_not?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentCopyAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition?: InputMaybe<Scalars['String']['input']>;
  contentPosition_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition_not?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingTextColor_not?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experiencesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor?: InputMaybe<Scalars['String']['input']>;
  subTextColor_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTextColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTextColor_not?: InputMaybe<Scalars['String']['input']>;
  subTextColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTextColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subText_contains?: InputMaybe<Scalars['String']['input']>;
  subText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subText_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfHotspotSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHotspotSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHotspotSectionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  hotspoticonNumber?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hotspoticonNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  hotspoticonNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_not?: InputMaybe<Scalars['Int']['input']>;
  hotspoticonNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContentColor?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_contains?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupContentColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContentColor_not?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupContentColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupContent_contains?: InputMaybe<Scalars['String']['input']>;
  popupContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupCta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeading?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeadingColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeadingColor_not?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeadingColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeading_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  popupHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupHeading_not?: InputMaybe<Scalars['String']['input']>;
  popupHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  popupHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  popupImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  xCoordinate?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  xCoordinate_gt?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_gte?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  xCoordinate_lt?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_lte?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_not?: InputMaybe<Scalars['Float']['input']>;
  xCoordinate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  yCoordinate?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  yCoordinate_gt?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_gte?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  yCoordinate_lt?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_lte?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_not?: InputMaybe<Scalars['Float']['input']>;
  yCoordinate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfInformationModuleRowsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfInformationModuleRowsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfInformationModuleRowsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  informationModulesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowHeading?: InputMaybe<Scalars['String']['input']>;
  rowHeading_contains?: InputMaybe<Scalars['String']['input']>;
  rowHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rowHeading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rowHeading_not?: InputMaybe<Scalars['String']['input']>;
  rowHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  rowHeading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfInformationModulesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfInformationModulesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfInformationModulesNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  informationSection_contains?: InputMaybe<Scalars['String']['input']>;
  informationSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  informationSection_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfListRowsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfListRowsNestedFilter>>>;
  Icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  OR?: InputMaybe<Array<InputMaybe<CfListRowsNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  iconSize?: InputMaybe<Scalars['String']['input']>;
  iconSize_contains?: InputMaybe<Scalars['String']['input']>;
  iconSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconSize_not?: InputMaybe<Scalars['String']['input']>;
  iconSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUrl?: InputMaybe<Scalars['String']['input']>;
  iconUrl_contains?: InputMaybe<Scalars['String']['input']>;
  iconUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconUrl_not?: InputMaybe<Scalars['String']['input']>;
  iconUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfMediaItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMediaItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMediaItemNestedFilter>>>;
  altText?: InputMaybe<Scalars['String']['input']>;
  altText_contains?: InputMaybe<Scalars['String']['input']>;
  altText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altText_not?: InputMaybe<Scalars['String']['input']>;
  altText_not_contains?: InputMaybe<Scalars['String']['input']>;
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  autoplay_not?: InputMaybe<Scalars['Boolean']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  caption_contains?: InputMaybe<Scalars['String']['input']>;
  caption_exists?: InputMaybe<Scalars['Boolean']['input']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caption_not?: InputMaybe<Scalars['String']['input']>;
  caption_not_contains?: InputMaybe<Scalars['String']['input']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  externalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl_not?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoJson_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfNavItemsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavItemsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavItemsNestedFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longUrl?: InputMaybe<Scalars['String']['input']>;
  longUrl_contains?: InputMaybe<Scalars['String']['input']>;
  longUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longUrl_not?: InputMaybe<Scalars['String']['input']>;
  longUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  longUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_contains?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlOpenerType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlOpenerType_not?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlOpenerType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfNtAudienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNtAudienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNtAudienceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nt_audience_id?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_contains?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_audience_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_audience_id_not?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_audience_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description?: InputMaybe<Scalars['String']['input']>;
  nt_description_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description_not?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name?: InputMaybe<Scalars['String']['input']>;
  nt_name_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name_not?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_rules_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNtExperienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNtExperienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNtExperienceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nt_audience_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_config_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description?: InputMaybe<Scalars['String']['input']>;
  nt_description_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_description_not?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experience_id?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_contains?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_experience_id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_experience_id_not?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_experience_id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name?: InputMaybe<Scalars['String']['input']>;
  nt_name_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_name_not?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_type?: InputMaybe<Scalars['String']['input']>;
  nt_type_contains?: InputMaybe<Scalars['String']['input']>;
  nt_type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nt_type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_type_not?: InputMaybe<Scalars['String']['input']>;
  nt_type_not_contains?: InputMaybe<Scalars['String']['input']>;
  nt_type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nt_variantsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPrimaryNavigationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPrimaryNavigationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPrimaryNavigationNestedFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfQuizNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuizNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuizNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quizOptionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfQuizOptionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfQuizOptionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfQuizOptionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quiz_exists?: InputMaybe<Scalars['Boolean']['input']>;
  result_contains?: InputMaybe<Scalars['String']['input']>;
  result_exists?: InputMaybe<Scalars['Boolean']['input']>;
  result_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfRadioItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfRadioItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfRadioItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataPreference_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPreference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSecondaryNavigationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSecondaryNavigationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSecondaryNavigationNestedFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfSeoMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hideFromSearchEngines?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromSearchEngines_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hideFromSearchEngines_not?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  keywords_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_not?: InputMaybe<Scalars['String']['input']>;
  keywords_not_contains?: InputMaybe<Scalars['String']['input']>;
  keywords_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logoImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription?: InputMaybe<Scalars['String']['input']>;
  ogDescription_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogDescription_not?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogImage?: InputMaybe<Scalars['String']['input']>;
  ogImage_contains?: InputMaybe<Scalars['String']['input']>;
  ogImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogImage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogImage_not?: InputMaybe<Scalars['String']['input']>;
  ogImage_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogImage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogTitle?: InputMaybe<Scalars['String']['input']>;
  ogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogTitle_not?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogType?: InputMaybe<Scalars['String']['input']>;
  ogType_contains?: InputMaybe<Scalars['String']['input']>;
  ogType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogType_not?: InputMaybe<Scalars['String']['input']>;
  ogType_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogUrl?: InputMaybe<Scalars['String']['input']>;
  ogUrl_contains?: InputMaybe<Scalars['String']['input']>;
  ogUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ogUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ogUrl_not?: InputMaybe<Scalars['String']['input']>;
  ogUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  ogUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viewport?: InputMaybe<Scalars['String']['input']>;
  viewport_contains?: InputMaybe<Scalars['String']['input']>;
  viewport_exists?: InputMaybe<Scalars['Boolean']['input']>;
  viewport_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  viewport_not?: InputMaybe<Scalars['String']['input']>;
  viewport_not_contains?: InputMaybe<Scalars['String']['input']>;
  viewport_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTabNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTabNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTabNestedFilter>>>;
  accordionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tabAccordionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfTextBannerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextBannerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextBannerNestedFilter>>>;
  ariaLabel?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ariaLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ariaLabel_not?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ariaLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundColor?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerBackgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerBackgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerBackgroundImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTextFontColor?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerTextFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerTextFontColor_not?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  bannerTextFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  bannerText_contains?: InputMaybe<Scalars['String']['input']>;
  bannerText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bannerText_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfTextContentSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextContentSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextContentSectionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  headingFontColor?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingFontColor_not?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize?: InputMaybe<Scalars['String']['input']>;
  headingSize_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headingSize_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headingSize_not?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_contains?: InputMaybe<Scalars['String']['input']>;
  headingSize_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId?: InputMaybe<Scalars['String']['input']>;
  sectionId_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionId_not?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  styledHeading_contains?: InputMaybe<Scalars['String']['input']>;
  styledHeading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  styledHeading_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  textContentAlignment?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentAlignment_not?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  textContentAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentFontColor?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_contains?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContentFontColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContentFontColor_not?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textContentFontColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textContent_contains?: InputMaybe<Scalars['String']['input']>;
  textContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfTimelineNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTimelineNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTimelineNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timelineEventDate?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_contains?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  timelineEventDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  timelineEventDate_not?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  timelineEventDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfTimelineWidgetNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTimelineWidgetNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTimelineWidgetNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  timelineCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfVideoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfVideoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfVideoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headingWithSubtext_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  thumbnail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
  video_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfcontentItemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentItemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentItemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfdropdownItemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfdropdownItemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfdropdownItemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfformItemSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfformItemSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfformItemSectionMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfleftContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfleftContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfleftContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfprimaryNavigationMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfprimaryNavigationMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfprimaryNavigationMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfrightContentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfrightContentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfrightContentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfsectionsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfsectionsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  userAccess_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userAccess_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeRdTestFieldsFragment = { __typename: 'HeRdTestTestingToBeDeleted', testField?: string | null, sys: { __typename?: 'Sys', id: string } };

export type HeRdTestQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HeRdTestQuery = { __typename?: 'Query', heRdTestTestingToBeDeleted?: (
    { __typename?: 'HeRdTestTestingToBeDeleted' }
    & HeRdTestFieldsFragment
  ) | null };

export const HeRdTestFieldsFragmentDoc = gql`
    fragment HeRdTestFields on HeRdTestTestingToBeDeleted {
  __typename
  sys {
    id
  }
  testField
}
    `;
export const HeRdTestDocument = gql`
    query heRdTest($id: String!, $locale: String, $preview: Boolean) {
  heRdTestTestingToBeDeleted(id: $id, locale: $locale, preview: $preview) {
    ...HeRdTestFields
  }
}
    ${HeRdTestFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    heRdTest(variables: HeRdTestQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HeRdTestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HeRdTestQuery>(HeRdTestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'heRdTest', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;