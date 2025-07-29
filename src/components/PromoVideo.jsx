export default function PromoVideo() {

  return (
    
      <section className="w-screen" style={{ aspectRatio: '16/9' }}>
        <video
          src="/assets/videosport.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>
  );
}