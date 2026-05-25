import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Valaam — Algorithm Training Infrastructure'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background:
            'radial-gradient(circle at 25% 30%, #c4b5fd 0%, transparent 40%), radial-gradient(circle at 75% 70%, #818cf8 0%, transparent 45%), #0f172a',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, #ffffff 0%, #c4b5fd 40%, #6d28d9 100%)',
            }}
          />
          <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
            Valaam
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.05,
            textAlign: 'center',
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          Algorithm training infrastructure
        </div>
        <div
          style={{
            fontSize: 30,
            marginTop: 32,
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Track, scale and ship machine learning models faster.
        </div>
      </div>
    ),
    { ...size },
  )
}
