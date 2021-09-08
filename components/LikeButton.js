// Inspired by https://www.delbaoliveira.com/blog/challenge-02
import { classNames } from '../utils/helper';
import useContentMeta from '../hooks/useContentMeta';

export default function LikeButton({ slug }) {
  const { isError, isLoading, like, addLike } =
    useContentMeta(slug);

  return (
    <div className='flex items-center space-x-4'>
      {isLoading ? (
        <div className='text-gray-500 animate-pulse'>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth={0}
            className='w-12 h-12'
            viewBox='0 0 512 512'
          >
            <path d='M139.625 23.563c-1.58.008-3.147.052-4.72.125l171.75 258.093h146.25c15.35-16.906 27.875-35.263 35.69-56.56h-96.876c-7.317 18.17-25.136 31.093-45.845 31.093-27.173 0-49.375-22.233-49.375-49.407 0-11.436 3.95-21.978 10.53-30.375l-49.155-77.655c-.03.053-.063.103-.094.156-1.183-2.05-2.395-4.036-3.624-6-30.106-48.086-73.28-69.694-114.53-69.468zm228.656 2.656c-35.864.328-72.648 18.056-100.78 57.655h204.125C447.147 47.133 408.293 25.85 368.28 26.22zm-253.967.25c-11.495 2.624-22.58 7.007-32.876 13 10.672 9.08 17.47 22.6 17.47 37.624 0 12.72-4.873 24.35-12.844 33.125l43.187 67.31h85.594L114.314 26.47zM49.5 46.374c-17.074 0-30.72 13.645-30.72 30.72 0 17.073 13.646 30.686 30.72 30.686 17.074 0 30.72-13.612 30.72-30.686 0-17.074-13.646-30.72-30.72-30.72zm232.844 56.188l38.97 61.53c7.24-4.184 15.635-6.593 24.56-6.593 27.05 0 49.203 22.03 49.407 49.03h98.75c2.575-11.807 3.757-24.49 3.345-38.25-.735-24.555-6.237-46.66-15.22-65.718h-199.81zm-259.47 16.062c-4.02 15.02-5.985 31.62-5.436 49.656.095 3.143.293 6.215.562 9.25h89.063l-35.97-56.06c-6.533 3.197-13.86 5-21.593 5-9.79 0-18.926-2.887-26.625-7.845zm323 57.563c-17.073 0-30.687 13.644-30.687 30.718 0 17.074 13.614 30.72 30.688 30.72 17.074 0 30.72-13.646 30.72-30.72 0-17.074-13.646-30.72-30.72-30.72zm-325.03 20.03c3.693 16.938 10.187 32.203 18.75 46.345H196.562l2.75 4.343L276.97 369.53l9.092 14.345H212.22c-1.403 6.96-4.274 13.418-8.282 19 22.164 24.562 41.335 52.573 53.843 86.75 35.156-90.944 118.132-134.872 176.564-189.156h-137.72l-2.78-4.19-66.594-100.06H20.844zM52.5 261.25c21.193 27.23 49.796 50.764 79.313 75.313 8.633-7.354 19.808-11.813 31.968-11.813 24.116 0 44.348 17.504 48.595 40.438h39.72L186.28 261.25H52.5zm111.28 82.188c-17.073 0-30.718 13.644-30.718 30.718 0 17.074 13.645 30.72 30.72 30.72 17.073 0 30.687-13.646 30.687-30.72 0-17.074-13.615-30.72-30.69-30.72z' />
          </svg>
        </div>
      ) : (
        <button
          className='rounded-md focus:outline-none heart-button'
          onClick={addLike}
        >
          <LikeButtonHeart likes={like} />
        </button>
      )}

      {/* Like counter text */}
      <div
        className={classNames(
          'mt-1 font-medium text-lg',
          like === 0
            ? 'text-gray-400 dark:text-gray-500'
            : 'bg-clip-text text-transparent bg-gradient-to-tr from-accent-200 via-accent-300 to-accent-400'
        )}
      >
        {isLoading ? <span>...</span> : <span>{like}</span>}
      </div>
    </div>
  );
}

export const HEART_PATH_SVG =
  'M139.625 23.563c-1.58.008-3.147.052-4.72.125l171.75 258.093h146.25c15.35-16.906 27.875-35.263 35.69-56.56h-96.876c-7.317 18.17-25.136 31.093-45.845 31.093-27.173 0-49.375-22.233-49.375-49.407 0-11.436 3.95-21.978 10.53-30.375l-49.155-77.655c-.03.053-.063.103-.094.156-1.183-2.05-2.395-4.036-3.624-6-30.106-48.086-73.28-69.694-114.53-69.468zm228.656 2.656c-35.864.328-72.648 18.056-100.78 57.655h204.125C447.147 47.133 408.293 25.85 368.28 26.22zm-253.967.25c-11.495 2.624-22.58 7.007-32.876 13 10.672 9.08 17.47 22.6 17.47 37.624 0 12.72-4.873 24.35-12.844 33.125l43.187 67.31h85.594L114.314 26.47zM49.5 46.374c-17.074 0-30.72 13.645-30.72 30.72 0 17.073 13.646 30.686 30.72 30.686 17.074 0 30.72-13.612 30.72-30.686 0-17.074-13.646-30.72-30.72-30.72zm232.844 56.188l38.97 61.53c7.24-4.184 15.635-6.593 24.56-6.593 27.05 0 49.203 22.03 49.407 49.03h98.75c2.575-11.807 3.757-24.49 3.345-38.25-.735-24.555-6.237-46.66-15.22-65.718h-199.81zm-259.47 16.062c-4.02 15.02-5.985 31.62-5.436 49.656.095 3.143.293 6.215.562 9.25h89.063l-35.97-56.06c-6.533 3.197-13.86 5-21.593 5-9.79 0-18.926-2.887-26.625-7.845zm323 57.563c-17.073 0-30.687 13.644-30.687 30.718 0 17.074 13.614 30.72 30.688 30.72 17.074 0 30.72-13.646 30.72-30.72 0-17.074-13.646-30.72-30.72-30.72zm-325.03 20.03c3.693 16.938 10.187 32.203 18.75 46.345H196.562l2.75 4.343L276.97 369.53l9.092 14.345H212.22c-1.403 6.96-4.274 13.418-8.282 19 22.164 24.562 41.335 52.573 53.843 86.75 35.156-90.944 118.132-134.872 176.564-189.156h-137.72l-2.78-4.19-66.594-100.06H20.844zM52.5 261.25c21.193 27.23 49.796 50.764 79.313 75.313 8.633-7.354 19.808-11.813 31.968-11.813 24.116 0 44.348 17.504 48.595 40.438h39.72L186.28 261.25H52.5zm111.28 82.188c-17.073 0-30.718 13.644-30.718 30.718 0 17.074 13.645 30.72 30.72 30.72 17.073 0 30.687-13.646 30.687-30.72 0-17.074-13.615-30.72-30.69-30.72z';
export const HEART_PATH =
  'M0.291,0.051 c-0.003,0,-0.007,0,-0.01,0 l0.358,0.554 h0.305 c0.032,-0.036,0.058,-0.076,0.074,-0.121 h-0.202 c-0.015,0.039,-0.052,0.067,-0.095,0.067 c-0.057,0,-0.103,-0.048,-0.103,-0.106 c0,-0.025,0.008,-0.047,0.022,-0.065 l-0.102,-0.167 c0,0,0,0,0,0 c-0.002,-0.004,-0.005,-0.009,-0.008,-0.013 c-0.063,-0.103,-0.153,-0.15,-0.239,-0.149 m0.476,0.006 c-0.075,0.001,-0.151,0.039,-0.21,0.124 h0.425 C0.931,0.101,0.85,0.055,0.767,0.056 m-0.529,0.001 c-0.024,0.006,-0.047,0.015,-0.068,0.028 c0.022,0.019,0.036,0.048,0.036,0.081 c0,0.027,-0.01,0.052,-0.027,0.071 l0.09,0.144 h0.178 L0.238,0.057 M0.103,0.1 c-0.036,0,-0.064,0.029,-0.064,0.066 c0,0.037,0.028,0.066,0.064,0.066 c0.036,0,0.064,-0.029,0.064,-0.066 c0,-0.037,-0.028,-0.066,-0.064,-0.066 m0.485,0.121 l0.081,0.132 c0.015,-0.009,0.033,-0.014,0.051,-0.014 c0.056,0,0.102,0.047,0.103,0.105 h0.206 c0.005,-0.025,0.008,-0.053,0.007,-0.082 c-0.002,-0.053,-0.013,-0.1,-0.032,-0.141 h-0.416 m-0.54,0.034 c-0.008,0.032,-0.012,0.068,-0.011,0.107 c0,0.007,0.001,0.013,0.001,0.02 h0.186 l-0.075,-0.12 c-0.014,0.007,-0.029,0.011,-0.045,0.011 c-0.02,0,-0.039,-0.006,-0.055,-0.017 m0.673,0.124 c-0.036,0,-0.064,0.029,-0.064,0.066 c0,0.037,0.028,0.066,0.064,0.066 c0.036,0,0.064,-0.029,0.064,-0.066 c0,-0.037,-0.028,-0.066,-0.064,-0.066 m-0.677,0.043 c0.008,0.036,0.021,0.069,0.039,0.099 H0.409 l0.006,0.009 L0.577,0.793 l0.019,0.031 H0.442 c-0.003,0.015,-0.009,0.029,-0.017,0.041 c0.046,0.053,0.086,0.113,0.112,0.186 c0.073,-0.195,0.246,-0.289,0.368,-0.406 h-0.287 l-0.006,-0.009,-0.139,-0.215 H0.043 M0.109,0.561 c0.044,0.058,0.104,0.109,0.165,0.162 c0.018,-0.016,0.041,-0.025,0.067,-0.025 c0.05,0,0.092,0.038,0.101,0.087 h0.083 L0.388,0.561 H0.109 m0.232,0.176 c-0.036,0,-0.064,0.029,-0.064,0.066 c0,0.037,0.028,0.066,0.064,0.066 c0.036,0,0.064,-0.029,0.064,-0.066 c0,-0.037,-0.028,-0.066,-0.064,-0.066';

function LikeButtonHeart({ likes }) {
  return (
    <div className='relative'>
      <div className='absolute w-full text-2xl text-center'>
        <div
          className={classNames(
            'absolute w-full opacity-0',
            likes === 5 && 'emoji-animate'
          )}
        >
          🥳
        </div>
      </div>

      {/* Heart SVG */}
      <svg
        viewBox='0 0 20 20'
        className='w-12 heart-animate'
        // Grow heart from center
        style={{ originX: '50%', originY: '50%' }}
      >
        <defs>
          {/* Gradient definition */}
          <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop
              offset='0%'
              style={{ stopColor: 'currentColor', stopOpacity: 1 }}
              className='text-accent-200 dark:text-accent-100'
            />
            <stop
              offset='50%'
              style={{ stopColor: 'currentColor', stopOpacity: 1 }}
              className='text-accent-300 dark:text-accent-200'
            />
            <stop
              offset='100%'
              style={{ stopColor: 'currentColor', stopOpacity: 1 }}
              className='text-accent-400 dark:text-accent-300'
            />
          </linearGradient>

          {/* Heart shape mask definition */}
          <clipPath
            id='clip-path'
            transform='scale(19,19)'
            clipPathUnits='userOnSpace'
          >
            <path d={HEART_PATH} />
          </clipPath>
        </defs>

        {/* Wrap children in the mask */}
        <g clipPath='url(#clip-path)'>
          {/* Heart background */}
          <rect
            width={20}
            height={20}
            fill='currentColor'
            className={classNames(
              'dark:text-gray-600',
              likes === 5 ? 'text-white' : 'text-gray-400'
            )}
          />

          {/* Heart gradient fill */}
          <rect
            fill='url(#gradient)'
            width={20}
            height={20}
            x={0}
            y={0}
            style={{
              transform: `translateY(${20 - likes * 4}px)`,
              transition:
                'transform 150ms cubic-bezier(0.64, 0.57, 0.67, 1.53)',
            }}
          />
        </g>
      </svg>
    </div>
  );
}