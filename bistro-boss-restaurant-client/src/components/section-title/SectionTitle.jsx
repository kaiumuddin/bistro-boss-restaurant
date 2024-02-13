const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-3">
            <p className="text-primary">{subtitle}</p>
            <h2 className="text-lg tracking-widest font-semibold text-center border-t-2  border-b-2 px-6 py-1 max-w-fit">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
