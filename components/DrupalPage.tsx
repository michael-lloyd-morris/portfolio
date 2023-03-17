import { ReactNode, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import DrupalPagesQuery from './DrupalPagesQuery';
import { DrupalNode } from 'next-drupal';

interface Props {
  children?: ReactNode,
  nodeId: number
}

export default function DrupalPage({ nodeId }: Props) {

  const { isLoading, data } = useQuery(DrupalPagesQuery.key, DrupalPagesQuery.query);

  if (isLoading) return <div>Loading...</div>

  const node = data.filter((item:DrupalNode) => item.nid[0].value === nodeId);

  if (!node[0]?.body[0]?.value) {
    throw new Error('Drupal data failed to parse');
  }
  
  return <>
    <h1>{node[0].title[0].value}</h1>
    <div dangerouslySetInnerHTML={{ __html: node[0].body[0].value }}></div>
  </>
}