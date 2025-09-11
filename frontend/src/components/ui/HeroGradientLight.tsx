const HeroGradientLight = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#f8fafc]">
            {/* Grid with dark lines */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Inverted glowing shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-300/40 rounded-full blur-[150px]" />

            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-400/40 rounded-full blur-[180px]" />

            {/* Inverted radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),rgba(250,250,250,0.9))]" />
        </div>
    );
};

export default HeroGradientLight;
