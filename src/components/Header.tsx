import Image from "next/image";
import NavLinks from "./NavLinks";


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header>
            <div className="relative flex items-center max-w-7xl w-full mx-auto py-3">
                <div className="flex items-center gap-3 mx-auto">
                    <Image src={'/logo.webp'} alt="navlogo" height={50} width={50} />
                    <div>
                        <h2 className="font-bold text-2xl text-red-600">Bangla News 24</h2>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="flex gap-4 absolute right-0">
                    <button className="btn btn-outline">লগ ইন</button>
                    <button className="btn bg-red-500 text-white">সাইন আপ</button>
                </div>
            </div>
            <NavLinks/>
        </header>
    );
};

export default Header;