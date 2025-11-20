import { Helmet } from 'react-helmet'

export default function SEO({ title = 'MineO — Grow softly, daily', description = 'A warm, journaling-inspired self-growth app with journaling, habit tracking, and a visual Journey Map.' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#F5E9D3" />
    </Helmet>
  )
}
