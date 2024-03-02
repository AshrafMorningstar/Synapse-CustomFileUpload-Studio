/**
 * @license
 * Copyright © 2026 Ashraf Morningstar
 * https://github.com/AshrafMorningstar
 * 
 * Licensed under the MIT License.
 * This is a personal educational recreation.
 * Original concepts remain property of their respective creators.
 * 
 * @author Ashraf Morningstar
 * @see https://github.com/AshrafMorningstar
 */
import React from 'react';
import {Composition} from 'remotion';
import {CyberGithubStats} from './CyberGithubStats';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CyberGithubStats"
        component={CyberGithubStats}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          githubUsername: 'AshrafMorningstar',
          theme: 'cyber' as const,
        }}
      />
    </>
  );
};
