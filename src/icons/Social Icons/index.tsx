import { ReactElement } from 'react';
import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';
interface socialIconsListIn {
  [key: string]: ReactElement;
}

export const useSocialIcons = (): socialIconsListIn => {
  return {
    facebook: <FacebookIcon />,
    github: <GithubIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <TwitterIcon />,
  };
};
