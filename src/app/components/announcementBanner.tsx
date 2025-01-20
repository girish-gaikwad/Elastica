import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnnouncementBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: 40 }}
            exit={{ height: 0 }}
            className="bg-green-800 text-white overflow-hidden"
        >
            <div className="h-full flex items-center justify-center text-sm">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center px-4"
                >
                    Free shipping on orders over $50 | Get 15% off your first purchase
                </motion.p>
            </div>
        </motion.div>
    );
};

export default AnnouncementBanner;
