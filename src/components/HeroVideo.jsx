export const HeroVideo = () => {
    return (
        <section>
            <video
                muted="muted" autoplay="autoplay" playsinline="playsinline" loop="loop"
                className="rounded-3xl aspect-4/3 object-cover"
            >
                <source src="careem_video.mp4" type="video/mp4" />
            </video>
        </section>
    )
}
