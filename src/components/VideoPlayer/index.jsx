import { useRef, useState } from 'react'
import './styles.css'

const SRC = 'https://v16-webapp.tiktok.com/e35e4eb13f445c4d0798477ee3b0dd56/624e2846/video/tos/useast2a/tos-useast2a-ve-0068c002/b9a46996baaf4a41a227fea03a95b3e8/?a=1988&br=7908&bt=3954&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3sGnz7ThCAhSDXq&l=202204061751540102230720350547E03B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2wzMzM6ZmdkPDMzNzczM0ApOTNmOWhpaGQ7N2VlNjYzNmdwcC1ycjRfcjFgLS1kMTZzc14xMzA0Mi00MGM2LmNfYTY6Yw%3D%3D&vl=&vr='

export function VideoPlayer () {
  const video = useRef()
  const [playing, setPlaying] = useState(false)
  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <>
      <div className='wrapper'>
        <video
          className='video'
          src={SRC}
          controls={false}
          ref={video}
        />
        <button className='player' onClick={handlePlay} />
      </div>
    </>
  )
}
