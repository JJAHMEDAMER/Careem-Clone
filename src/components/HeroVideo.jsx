import careemVideo from "../assets/careem_video.mp4"

export const HeroVideo = () => {
    return (
        <section className="mt-20">
            <video
                muted autoPlay playsInline loop
                className="rounded-3xl w-full object-cover h-72"
            >
                <source src={careemVideo} type="video/mp4" />
            </video>
        </section>
    )
}
