import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {getFilm, getFilmUrl} from '../../store/film-slice/selectors';
import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {formattingLastTime} from '../../utils/common';
import Spinner from '../../components/ui/util-components/spinner/spinner';
import './player.css';

enum ProgressPlay {
  Start = 0,
  End = 100,
}

function Player(): JSX.Element {
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const {id} = useParams();
  // const {posterImage} = film;
  //
  // const {id} = useParams();
  // const dispatch = useAppDispatch();
  //
  // useEffect(() => {
  //   dispatch(fetchFilmAction(id as string));
  // }, [id, dispatch]);
  //

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(ProgressPlay.Start);
  const [lastTime, setLastTime] = useState<number>(ProgressPlay.Start);
  const formatLastTime = formattingLastTime(lastTime);

  useEffect(() => {
    isPlaying
      ? videoRef.current?.play()
      : videoRef.current?.pause();
  }, [isPlaying]);

  if (!film.id) {
    const filmId = id as string;
    return <Navigate to={getFilmUrl(filmId)}/>;
  }

  const {name, previewImage, videoLink} = film;

  const initVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = ProgressPlay.Start;
      togglePlay();
    }
  };

  const toggleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * ProgressPlay.End;
      setProgress(currentProgress);
      setLastTime(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const handleVideoProgress = (evt: ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / ProgressPlay.End) * manualChange;
      setProgress(manualChange);
    }
  };

  const handleEndPlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = ProgressPlay.Start;
      setIsPlaying(false);
    }
  };


  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={videoLink}
        poster={previewImage}
        onLoadedMetadata={initVideo}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={() => setIsLoading(true)}
        onSeeked={() => setIsLoading(false)}
        onEnded={handleEndPlay}
      />
      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>
      {
        isLoading &&
        <span className="player-preloader">
          <Spinner/>
        </span>
      }
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <input
              className="player__progress"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(evt) => handleVideoProgress(evt)}
            />
            <progress
              className="player__progress"
              value={progress}
              max="100"
            />
          </div>
          <div className="player__time-value">- {formatLastTime}</div>
        </div>

        <div className="player__controls-row">
          {
            isPlaying
              ? (
                <button
                  type="button"
                  className="player__play"
                  onClick={() => togglePlay()}
                >
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </button>
              )
              : (
                <button
                  type="button"
                  className="player__play"
                  onClick={() => togglePlay()}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
              )
          }
          <div className="player__name">{name}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={toggleFullscreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
