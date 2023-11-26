"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="flex">
                    <div className="w-1/2 ta-l">
                        <p>
                            <Link href="https://www.vikenblockchain.com/" target="_black">Kenneth Zambrano</Link>
                        </p>
                    </div>
                    <div className="w-1/2 ta-r">
                        <p>Copyright © 2023. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
}