'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function ImageTestPage() {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        console.error("Failed to load image: /images/p.png");
        setImageError(true);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Image Loading Test</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl mb-2">Profile Picture Test (PNG)</h2>
                <Image
                    src="/images/p.png"
                    alt="Profile Picture (PNG)"
                    width={256}
                    height={256}
                    className="rounded-full mb-4"
                    onError={handleImageError}
                />

                <h2 className="text-xl mb-2">Profile Picture Test (JPG)</h2>
                <Image
                    src="/images/pfp.jpg"
                    alt="Profile Picture (JPG)"
                    width={256}
                    height={256}
                    className="rounded-full"
                    onError={handleImageError}
                />
            </div>

            <div className="mt-4">
                <p>PNG Image path: /images/p.png</p>
                <p>JPG Image path: /images/pfp.jpg</p>
                <p>Status: {imageError ? 'Failed to load' : 'Loaded successfully'}</p>
            </div>
        </div>
    );
}