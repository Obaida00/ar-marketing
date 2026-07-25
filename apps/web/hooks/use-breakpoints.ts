import {useMediaQuery} from "usehooks-ts"
export default function useBreakpoints() {
    return {
        isMobile: useMediaQuery('(max-width: 767px)'),
        isTablet: useMediaQuery('(min-width: 768px) and (max-width: 1023px)'),
        isDesktop: useMediaQuery('(min-width: 1024px)'),
        isLargeDesktop: useMediaQuery('(min-width: 1536px)'),
    }
}