import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonApp from '../widget/ButtonApp';
import TextTheme from '../widget/TextTheme';

interface HeroProps {
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                {/* Using one of the scenic images as hero bg */}
                <Image
                    src="/assets/stay/3.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fadeInUp">
                <div className="space-y-4">
                    <TextTheme.Display className="text-white! drop-shadow-2xl">
                        {title}
                    </TextTheme.Display>
                    <TextTheme.Body className="text-emerald-50! text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
                        {description}
                    </TextTheme.Body>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Link href="#explore">
                        <ButtonApp variant="primary" size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white border-none min-w-[200px]">
                            Explore Services
                        </ButtonApp>
                    </Link>
                    <Link href="#contact-footer">
                        <ButtonApp variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-900 min-w-[200px]">
                            Contact Us
                        </ButtonApp>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;
