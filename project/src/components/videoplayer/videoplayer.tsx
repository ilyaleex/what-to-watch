import {useEffect, useRef} from 'react';
import {FilmCardProps} from '../../types/film';

const PLAY_TIMEOUT = 1000;

function VideoPlayer({film}: FilmCardProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (film.id) {
        videoRef.current?.play();
      }},
    PLAY_TIMEOUT
    );

    if (!film.id) {
      videoRef.current?.pause();
    }

    return () => {
      clearTimeout(timer);
    };
  },[film.id]);

  return (
    <video
      ref={videoRef}
      src={film.previewVideoLink}
      className="player__video"
      poster={film.previewImage}
      muted
      loop
    />
  );
}

export default VideoPlayer;
