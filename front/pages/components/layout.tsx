

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className="bg-green-400">
                    image
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                       {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
