import React from 'react';

const PlayLinks = ({play}) => {
  console.log(play);

  return(
    <ul className="play-links">
      { play.path && 
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/atapas/react-play/tree/main/src${play.path}`}>GitHub
          </a>
        </li> 
      }
      { play.blog && 
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer" 
            href={play.blog}>Blog
          </a>
        </li> 
      }
      { play.video && 
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer" 
            href={play.video}>Video
          </a>
        </li> 
      }
    </ul>  
  );
};

export default React.memo(PlayLinks);