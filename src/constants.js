const avatarList = [
  'https://firebasestorage.googleapis.com/v0/b/instahelp-482a0.appspot.com/o/1.png?alt=media&token=953379f5-440b-42dc-a385-ea0b72c32d47',
  'https://firebasestorage.googleapis.com/v0/b/instahelp-482a0.appspot.com/o/2.png?alt=media&token=ec14347a-f12d-4af8-9471-f4f39c842f36',
  'https://firebasestorage.googleapis.com/v0/b/instahelp-482a0.appspot.com/o/3.png?alt=media&token=6e72d19e-03d9-403e-a2e3-f97c920ccb1e',
  'https://firebasestorage.googleapis.com/v0/b/instahelp-482a0.appspot.com/o/4.png?alt=media&token=ff7085a8-1f35-401f-80fd-86784eeb2c6e',
];

const randomIndex = Math.floor(Math.random() * 4) + 1;

export const MAX_NAME_LENGTH = 13;
export const MAX_SUBTITLE_LENGTH = 16;
export const AVATAR_URL = avatarList[randomIndex - 1];
