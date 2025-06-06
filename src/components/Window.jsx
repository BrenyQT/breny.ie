export default function Window({ title, children, id }) {
    return (
        <section
            id={id}
            className="bg-[#CDE7FF] border-4 border-[#6B8FCE] shadow-[8px_8px_0_0_rgba(107,143,206,1)] max-w-2xl mx-auto my-8"
        >
            {/* Title Bar */}
            <div className="bg-[#0A64A0] text-white px-5 py-2 flex justify-between items-center select-none">
                <span className="font-bold text-base">{title}</span>
                <button
                    aria-label="Close window"
                    className="bg-[#C83A3A] border-2 border-[#6B8FCE] w-8 h-8 flex items-center justify-center hover:bg-[#7B2020]"
                    onClick={() => alert('Close button clicked!')}
                >
                    <span className="text-sm leading-none">X</span>
                </button>
            </div>
            {/* Window content */}
            <div className="p-6 bg-white min-h-[200px] text-sm">
                {children}
            </div>
        </section>
    );
}
