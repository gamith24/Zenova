import React from 'react'

function Card() {
  return (
    <div className='Card'>
      <div className='Card-Image'>
        <img src="src/assets/image.png" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '10px', transition: '0.3s' }} />
      </div>
      <div className='card-content'>
        <p>Name Sirname</p>
        <span> This is a very long text that should only take up three lines at most.
          After the third line, it will automatically be truncated and show an ellipsis
          to prevent it from overflowing or breaking the layout of the container.</span>
      </div>
      <div className='card-background'></div>
      <div className='cardReaction'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <defs>

              <radialGradient id="bgGrad" cx="30%" cy="25%" r="80%">
                <stop offset="0%" stop-color="#e9fff6" />
                <stop offset="45%" stop-color="#8fffd2" />
                <stop offset="100%" stop-color="#03fe86" />
              </radialGradient>


              <linearGradient id="thumbGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#b8ffea" />
                <stop offset="50%" stop-color="#03fe86" />
                <stop offset="100%" stop-color="#00c46a" />
              </linearGradient>


              <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
              </linearGradient>
            </defs>


            <circle cx="12" cy="12" r="11" fill="url(#bgGrad)" />


            <ellipse cx="12" cy="7" rx="6" ry="3" fill="url(#glassGrad)" />

            <g transform="scale(0.8) translate(3,3)">
              <path d="M2 21h4V9H2v12zM22 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32
             c0-.41-.17-.79-.44-1.06L13 2 6.59 8.41C6.22 8.78 6 9.3 6 9.83V19
             c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
                fill="url(#thumbGrad)" stroke="rgba(0,0,0,0.08)" stroke-width="0.15" stroke-linejoin="round" />
            </g>
          </svg>

        </div>
        <span>13 k</span>
      </div>
      <div className='Card-follow'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <defs>

              <radialGradient id="bgGrad" cx="30%" cy="25%" r="80%">
                <stop offset="0%" stop-color="#e9fff6" />
                <stop offset="45%" stop-color="#8fffd2" />
                <stop offset="100%" stop-color="#03fe86" />
              </radialGradient>


              <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#b8ffea" />
                <stop offset="50%" stop-color="#03fe86" />
                <stop offset="100%" stop-color="#00c46a" />
              </linearGradient>

              <linearGradient id="glassGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
                <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
              </linearGradient>
            </defs>

            <circle cx="12" cy="12" r="11" fill="url(#bgGrad)" />

            <ellipse cx="12" cy="7" rx="6" ry="3" fill="url(#glassGrad)" />

            <g transform="scale(0.8) translate(3,3)">
              <circle cx="12" cy="8" r="4" fill="url(#userGrad)" stroke="rgba(0,0,0,0.08)" stroke-width="0.15" />
              <path d="M6 20c0-4 6-4 6-4s6 0 6 4v1H6v-1z" fill="url(#userGrad)" stroke="rgba(0,0,0,0.08)" stroke-width="0.15" />
            </g>
          </svg>

        </div>
        <span>
          1.2 M
        </span>
      </div>
    </div>
  )
}

export default Card