import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        // Exclude bcrypt or other crypto-dependent libraries for Edge environments
        config.externals = [
            ...config.externals,
            'bcrypt',
            'crypto',
            'argon2',
        ];
        return config;
    }
};

export default nextConfig;
