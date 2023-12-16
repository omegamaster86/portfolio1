

interface Props {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 ">

            </div>
            {children}
        </div>
    );
};
