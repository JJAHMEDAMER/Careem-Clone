import careemVideo from "../assets/careem_video.mp4"

export const HeroVideo = () => {
    return (
        <section>
            <video
                muted autoPlay playsInline loop
                className="rounded-3xl aspect-4/3 object-cover"
            >
                <source src={careemVideo} type="video/mp4" />
            </video>
        </section>
    )
}
