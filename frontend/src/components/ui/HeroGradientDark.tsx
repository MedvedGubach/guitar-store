const HeroGradient = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#020617]">
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[180px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,60,0.6),rgba(0,0,0,0.95))]" />
        </div>
    );
};

export default HeroGradient;
