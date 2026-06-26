import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => (
  <script type="application/ld+json">{JSON.stringify(data)}</script>
);
